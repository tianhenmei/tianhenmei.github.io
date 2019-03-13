// 安装
this.addEventListener('install',function(event){
    event.waitUtil(
        caches.open('2018-night-cache-v1').then(function(cache){
            return cache.addAll([
                '/',
                'm_index.html',
                'js/jquery.1.10.1.min.js',
                'js/vue.js',
                'js/plat_tj_mobile.js',
                'js/tween.min.js',
                'js/m_index.js',
                'js/loading.js',
                'images/*.png',
                'images/*.gif',
                'images/*.jpg',
                'css/m_index.css'
            ]);
        });
    );
});
// 自定义请求与响应
// this.addEventListener('fetch',function(event){
//     event.repondWith(
//         caches.match(event.request).then(function(reponse){
//             if(reponse){
//                 return reponse
//             }
//             var request = event.request.clone();
//             return fetch(request).then(function(httpRes){
//                 if(!httpRes || httpRes.status !== 200){
//                     return httpRes;
//                 }
//                 var responseRes = httpRes.clone();
//                 caches.open('2018-night-cache-v1').then(function(cache){
//                     cache.push(event.request,responseRes);
//                 });
//                 return httpRes
//             })
//         });
//     );
// });