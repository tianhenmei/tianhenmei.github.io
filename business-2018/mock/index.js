var express = require('express'),
    router = express.Router(),
    Mock = require('mockjs');

function dataReback(req,res,data){
    let _callback = req.query.jsonpCallback
    if (_callback){
        res.type('text/javascript');
        res.send(_callback + '(' + JSON.stringify(data) + ')');
    }else{
        res.json(data);
    }
}


router.get('/activityapi/common/getLoginUserAndCompany', getUserInfo);

function getUserInfo(req,res,next){
    dataReback(
        req,res,
        Mock.mock({
            "state|1": [ 200, -1, 200, 200, 200, 200, 200, 200],
            "content":{
                "name|1":["","哈哈","我是拉勾勾","无敌宇宙小超人"],  // 联系人姓名
                "contact|1":["","15567899077"],  // 联系人手机
                "city|1":["","北京","上海","杭州","乌鲁木齐"],   // 公司所在地
                "companyName|1":["","拉勾网","百度小绵羊"]  // 公司名称
            }
        })
    )
}

router.get('/activityapi/common/busiSubmit', postForm);

function postForm(req,res,next){
    dataReback(
        req,res,
        Mock.mock({
            "state|1": [ 200, -1, 200, 200, 200, 200, 200, 200],
            "message": function() { this.state == 200 ? '' : '服务器错误' },
            "content|1":[true,"您已报名，稍后我们营销顾问会为您服务！"] 
        })
    )
}

module.exports = router;