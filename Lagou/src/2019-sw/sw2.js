var expectedCaches = ['2019-sw-version-02'];
this.addEventListener('install',function(event){
    console.log('2019-sw-version-02 installing');
    this.skipWaiting();
    event.waitUntil(caches.open('2019-sw-version-02').then(function(cache){
        cache.add('images/horse.jpg');
    }));
});
this.addEventListener('activate',function(event){
    event.waitUntil(caches.keys().then(function(keys){
        Promise.all(keys.map(function(key){
            if(/(2019-sw-version)/g.test(key) && expectedCaches.indexOf(key) === -1){
                return caches.delete(key);
            }
        }));
    }).then(function(){
        console.log('2019-sw-version-02: ready to handle fetches');
    }))
});

this.addEventListener('fetch',function(event){
    var url = new URL(event.request.url);
    if(url.origin === location.origin && /(images\/dog.jpg)/g.test(url.pathname)){
        event.respondWith(caches.match('images/horse.jpg'));
    }
});