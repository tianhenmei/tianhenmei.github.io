var expectedCaches = ['2019-sw-version-01'];
this.addEventListener('install',function(event){
    console.log("installing...");
    this.skipWaiting();
    event.waitUntil(caches.open('2019-sw-version-01').then(function(cache){
        cache.add('images/horse.jpg');
    }));
});
this.addEventListener('activate',function(event){
    console.log('activate: already to handle fetches');
    // 添加this.clients.claim(): 如果不添加，第二次刷新页面生效；如果添加，并且它执行完成发生在资源加载前，那么第一次打开页面也可能生效。
    this.clients.claim();
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
    console.log(url.origin,location.origin,url.pathname)
    if(url.origin === location.origin && /(images\/dog.jpg)/.test(url.pathname)){
        event.respondWith(caches.match('images/horse.jpg'));
    }
});