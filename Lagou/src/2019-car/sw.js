const CACHE_NAME = '2019-car-cache-v2';
// 监听 service worker 的 install 事件
this.addEventListener('install', function (event) {
    this.skipWaiting();
    // // 如果监听到了 service worker 已经安装成功的话，就会调用 event.waitUntil 回调函数
    // event.waitUntil(
    //     // 安装成功后操作 CacheStorage 缓存，使用之前需要先通过 caches.open() 打开对应缓存空间。
    //     caches.open(CACHE_NAME).then(function (cache) {
    //         console.log('Opened cache');
    //         // 通过 cache 缓存对象的 addAll 方法添加 precache 缓存
    //         return cache.addAll([
    //             '',
    //             'm_index.html',
    //             'js/jquery.1.10.1.min.js',
    //             'js/vue.js',
    //             'js/plat_tj_mobile.js',
    //             'js/tween.min.js',
    //             'js/m_index.js',
    //             'js/loading.js',
    //             'images/loading-03.gif'//,
    //             // '/images/*.png',
    //             // '/images/*.gif',
    //             // '/images/*.jpg',
    //             // '/css/m_index.css'
    //         ]);
    //     })
    // );
});
this.addEventListener('activate', function (event) {
    this.clients.claim()
    event.waitUntil(caches.keys().then(function(keys){
        Promise.all(keys.map(function(key){
            if(/(2019-car-cache)/g.test(key) && key !== CACHE_NAME){
                return caches.delete(key);
            }
        }));
    }).then(function(){
        console.log('2019-car-cache-02: ready to handle fetches');
    }))
});
this.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
            // Cache hit - return response
            if (response) {
                return response;
            }
    
            // IMPORTANT:Clone the request. A request is a stream and
            // can only be consumed once. Since we are consuming this
            // once by cache and once by the browser for fetch, we need
            // to clone the response.
            var fetchRequest = event.request.clone();
    
            return fetch(fetchRequest).then(
                function(response) {
                    // Check if we received a valid response
                    if(!response || response.status !== 200) {  //  || response.type !== 'basic'
                        return response;
                    }
        
                    // IMPORTANT:Clone the response. A response is a stream
                    // and because we want the browser to consume the response
                    // as well as the cache consuming the response, we need
                    // to clone it so we have two streams.
                    var responseToCache = response.clone();
                    if(/^http(s)?:\/\/tianhenmei.github.io/.test(fetchRequest.url)
                        || /^http(s)?:\/\/activity.lagou.com/.test(fetchRequest.url)
                        || /^http(s)?:\/\/www.lgstatic.com/.test(fetchRequest.url)
                        || /^http(s)?:\/\/www.lagou.com/.test(fetchRequest.url)
                        || /^http(s)?:\/\/res.wx.qq.com/.test(fetchRequest.url)){
                        caches.open(CACHE_NAME)
                            .then(function(cache) {
                                cache.put(event.request, responseToCache);
                            });
                    }
                    return response;
                }
            );
        })
      );
});
// 安装
// this.addEventListener('install',function(event){
//     event.waitUtil(
//         caches.open('2018-night-cache-v1').then(function(cache){
//             return cache.addAll([
//                 '/',
//                 'm_index.html',
//                 'js/jquery.1.10.1.min.js',
//                 'js/vue.js',
//                 'js/plat_tj_mobile.js',
//                 'js/tween.min.js',
//                 'js/m_index.js',
//                 'js/loading.js',
//                 'images/*.png',
//                 'images/*.gif',
//                 'images/*.jpg',
//                 'css/m_index.css'
//             ]);
//         });
//     );
// });
// 自定义请求与响应
// this.addEventListener('fetch',function(event){
//     event.repondWith(
//         caches.match(event.request).then(function(reponse){
//             console.log(event.request);
//             if(reponse){ // Cache hit - return response
//                 return reponse
//             }
//             var request = event.request.clone();
//             return fetch(request).then(function(httpRes){
//                 if(!httpRes || httpRes.status !== 200){
//                     return httpRes;
//                 }
//                 var responseRes = httpRes.clone();
//                 caches.open(CACHE_NAME).then(function(cache){
//                     cache.push(event.request,responseRes);
//                 });
//                 return httpRes
//             })
//         });
//     );
// });