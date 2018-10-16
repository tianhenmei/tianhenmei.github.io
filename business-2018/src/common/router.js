import index from 'pages/index.vue';
import set from 'pages/set.vue';
import hunter from 'pages/hunter.vue';
import ads from 'pages/ads.vue';
import activity from 'pages/activity.vue';

var routes = [{  // 招聘指南
    path:'/',
    component:index,
    name:''
},{  // 招聘套餐
    path:'/set',
    component:set,
    name:'set'
},{  // 拉勾猎头
    path:'/hunter',
    component:hunter,
    name:'hunter'
},{  // 广告展示
    path:'/ads',
    component:ads,
    name:'ads'
},{  // 品牌活动
    path:'/activity',
    component:activity,
    name:'activity'
}];

export default routes;