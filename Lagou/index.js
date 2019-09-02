var express = require('express'),
    request = require('request'),
    bodyParser = require('body-parser'),
 
    app = express();
app.use(require('cookie-parser')());
var myLimit = typeof(process.argv[2]) != 'undefined' ? process.argv[2] : '100kb';
 
app.use(bodyParser());

//设置跨域访问
app.all('*', function(req, res, next) {
    // console.log(req.url);
    // lagou 跨域请求响应参数如下：
    /* 
        Accept-Charset: big5, big5-hkscs, euc-jp, euc-kr, gb18030, gb2312, gbk, ibm-thai, ibm00858, ibm01140, ibm01141, ibm01142, ibm01143, ibm01144, ibm01145, ibm01146, ibm01147, ibm01148, ibm01149, ibm037, ibm1026, ibm1047, ibm273, ibm277, ibm278, ibm280, ibm284, ibm285, ibm290, ibm297, ibm420, ibm424, ibm437, ibm500, ibm775, ibm850, ibm852, ibm855, ibm857, ibm860, ibm861, ibm862, ibm863, ibm864, ibm865, ibm866, ibm868, ibm869, ibm870, ibm871, ibm918, iso-2022-cn, iso-2022-jp, iso-2022-jp-2, iso-2022-kr, iso-8859-1, iso-8859-13, iso-8859-15, iso-8859-2, iso-8859-3, iso-8859-4, iso-8859-5, iso-8859-6, iso-8859-7, iso-8859-8, iso-8859-9, jis_x0201, jis_x0212-1990, koi8-r, koi8-u, shift_jis, tis-620, us-ascii, utf-16, utf-16be, utf-16le, utf-32, utf-32be, utf-32le, utf-8, windows-1250, windows-1251, windows-1252, windows-1253, windows-1254, windows-1255, windows-1256, windows-1257, windows-1258, windows-31j, x-big5-hkscs-2001, x-big5-solaris, x-compound_text, x-euc-jp-linux, x-euc-tw, x-eucjp-open, x-ibm1006, x-ibm1025, x-ibm1046, x-ibm1097, x-ibm1098, x-ibm1112, x-ibm1122, x-ibm1123, x-ibm1124, x-ibm1364, x-ibm1381, x-ibm1383, x-ibm300, x-ibm33722, x-ibm737, x-ibm833, x-ibm834, x-ibm856, x-ibm874, x-ibm875, x-ibm921, x-ibm922, x-ibm930, x-ibm933, x-ibm935, x-ibm937, x-ibm939, x-ibm942, x-ibm942c, x-ibm943, x-ibm943c, x-ibm948, x-ibm949, x-ibm949c, x-ibm950, x-ibm964, x-ibm970, x-iscii91, x-iso-2022-cn-cns, x-iso-2022-cn-gb, x-iso-8859-11, x-jis0208, x-jisautodetect, x-johab, x-macarabic, x-maccentraleurope, x-maccroatian, x-maccyrillic, x-macdingbat, x-macgreek, x-machebrew, x-maciceland, x-macroman, x-macromania, x-macsymbol, x-macthai, x-macturkish, x-macukraine, x-ms932_0213, x-ms950-hkscs, x-ms950-hkscs-xp, x-mswin-936, x-pck, x-sjis_0213, x-utf-16le-bom, x-utf-32be-bom, x-utf-32le-bom, x-windows-50220, x-windows-50221, x-windows-874, x-windows-949, x-windows-950, x-windows-iso2022jp
        Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Connection, User-Agent, Cookie
        Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE
        Access-Control-Allow-Origin: *
        Access-Control-Max-Age: 3600
        */
    res.header("Access-Control-Allow-Origin", "http://192.168.1.101:8180");
    res.header("Access-Control-Allow-Headers", "Authorization,Origin,X-Requested-With,Content-Type, Accept, x-l-req-header");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    //这段仅仅为了方便返回json而已
    res.header("Content-Type", "application/json;charset=utf-8");
    // 它的值是一个布尔值，表示是否允许发送Cookie。默认情况下，Cookie不包括在CORS请求之中。
    // 设为true，即表示服务器明确许可，Cookie可以包含在请求中，一起发给服务器。
    // 这个值也只能设为true，如果服务器不要浏览器发送Cookie，删除该字段即可
    res.header("Access-Control-Allow-Credentials",true)
    res.header("Access-Control-Max-Age","3600");
    console.log(req.method)
    // console.log(req.headers)
    if(req.method == 'OPTIONS') {
        // 让options请求快速返回
        res.sendStatus(204);
    } else {
        next()
    }
});
app.get('/v1/entry/cuser/baseStatus/get', function (req, res, next) {
    res.send({
        "state": 1,
        "message": "成功",
        "content": {
            "userId": 1630096,
            "resumeId": 1493926,
            "resumeScore": 100,
            "workCity": "深圳",
            "userName": "高辉",
            "headpic": "{\"defaultPortial\":false,\"url\":\"image1/M00/22/DD/Cgo8PFVGIQSAEDn5AAAiS7gxq14732.jpg\"}",
            "isAnswerdQuestion": 0,
            "isBeijingUser": 0,
            "isNewUser": 0,
            "isComplete": 1,
            "isReachStandard": 1,
            "resumeUserName": "高辉",
            "resumeHeadpic": "https://www.lgstatic.com/image1/M00/22/DD/Cgo8PFVGIQSAEDn5AAAiS7gxq14732.jpg",
            "shortCategory": "技术",
            "showCompanyVideo": false
        }
    })
});

var router = express.Router()
router.get('/v1/entry/activity/zhuazhou/queryPositions', function (req, res, next) {
    res.send({
        "state": 1,
        "message": "成功",
        "content": [
            {
                "positionId": 6273119,
                "companyLogo": "image1/M00/00/3C/Cgo8PFTUXLOAVHZ-AACFosKYPbs938.png",
                "companyShortName": "淡蓝网Blued",
                "industryField": "移动互联网,社交",
                "companySize": "150-500人",
                "financeStage": "D轮及以上",
                "positionName": "销售实习生",
                "salary": "2k-3k",
                "education": "不限",
                "workYear": "应届毕业生",
                "city": "北京"
            }, {
                "positionId": 6316105,
                "companyLogo": "i/image2/M01/B3/EB/CgoB5lwGFhSAfHt-AAAQoyYtENU742.jpg",
                "companyShortName": "琥珀纷钛",
                "industryField": "移动互联网,金融",
                "companySize": "15-50人",
                "financeStage": "A轮",
                "positionName": "在线客服",
                "salary": "4k-6k",
                "education": "不限",
                "workYear": "1-3年",
                "city": "北京"
            } /*, {
                "positionId": 6254720,
                "companyLogo": "i/image3/M00/43/D2/Cgq2xlq4haWAXGC0AABchMno84M300.jpg",
                "companyShortName": "方格教育",
                "industryField": "教育",
                "companySize": "15-50人",
                "financeStage": "未融资",
                "positionName": "渠道销售",
                "salary": "4k-6k",
                "education": "不限",
                "workYear": "应届毕业生",
                "city": "北京"
            }, {
                "positionId": 6273119,
                "companyLogo": "image1/M00/00/3C/Cgo8PFTUXLOAVHZ-AACFosKYPbs938.png",
                "companyShortName": "淡蓝网Blued",
                "industryField": "移动互联网,社交",
                "companySize": "150-500人",
                "financeStage": "D轮及以上",
                "positionName": "销售实习生",
                "salary": "2k-3k",
                "education": "不限",
                "workYear": "应届毕业生",
                "city": "北京"
            }, {
                "positionId": 6316105,
                "companyLogo": "i/image2/M01/B3/EB/CgoB5lwGFhSAfHt-AAAQoyYtENU742.jpg",
                "companyShortName": "琥珀纷钛",
                "industryField": "移动互联网,金融",
                "companySize": "15-50人",
                "financeStage": "A轮",
                "positionName": "在线客服",
                "salary": "4k-6k",
                "education": "不限",
                "workYear": "1-3年",
                "city": "北京"
            }, {
                "positionId": 6254720,
                "companyLogo": "i/image3/M00/43/D2/Cgq2xlq4haWAXGC0AABchMno84M300.jpg",
                "companyShortName": "方格教育",
                "industryField": "教育",
                "companySize": "15-50人",
                "financeStage": "未融资",
                "positionName": "渠道销售",
                "salary": "4k-6k",
                "education": "不限",
                "workYear": "应届毕业生",
                "city": "北京"
            }, {
                "positionId": 6273119,
                "companyLogo": "image1/M00/00/3C/Cgo8PFTUXLOAVHZ-AACFosKYPbs938.png",
                "companyShortName": "淡蓝网Blued",
                "industryField": "移动互联网,社交",
                "companySize": "150-500人",
                "financeStage": "D轮及以上",
                "positionName": "销售实习生",
                "salary": "2k-3k",
                "education": "不限",
                "workYear": "应届毕业生",
                "city": "北京"
            }, {
                "positionId": 6316105,
                "companyLogo": "i/image2/M01/B3/EB/CgoB5lwGFhSAfHt-AAAQoyYtENU742.jpg",
                "companyShortName": "琥珀纷钛",
                "industryField": "移动互联网,金融",
                "companySize": "15-50人",
                "financeStage": "A轮",
                "positionName": "在线客服",
                "salary": "4k-6k",
                "education": "不限",
                "workYear": "1-3年",
                "city": "北京"
            }, {
                "positionId": 6254720,
                "companyLogo": "i/image3/M00/43/D2/Cgq2xlq4haWAXGC0AABchMno84M300.jpg",
                "companyShortName": "方格教育",
                "industryField": "教育",
                "companySize": "15-50人",
                "financeStage": "未融资",
                "positionName": "渠道销售",
                "salary": "4k-6k",
                "education": "不限",
                "workYear": "应届毕业生",
                "city": "北京"
            }, {
                "positionId": 6273119,
                "companyLogo": "image1/M00/00/3C/Cgo8PFTUXLOAVHZ-AACFosKYPbs938.png",
                "companyShortName": "淡蓝网Blued",
                "industryField": "移动互联网,社交",
                "companySize": "150-500人",
                "financeStage": "D轮及以上",
                "positionName": "销售实习生",
                "salary": "2k-3k",
                "education": "不限",
                "workYear": "应届毕业生",
                "city": "北京"
            }, {
                "positionId": 6316105,
                "companyLogo": "i/image2/M01/B3/EB/CgoB5lwGFhSAfHt-AAAQoyYtENU742.jpg",
                "companyShortName": "琥珀纷钛",
                "industryField": "移动互联网,金融",
                "companySize": "15-50人",
                "financeStage": "A轮",
                "positionName": "在线客服",
                "salary": "4k-6k",
                "education": "不限",
                "workYear": "1-3年",
                "city": "北京"
            }, {
                "positionId": 6254720,
                "companyLogo": "i/image3/M00/43/D2/Cgq2xlq4haWAXGC0AABchMno84M300.jpg",
                "companyShortName": "方格教育",
                "industryField": "教育",
                "companySize": "15-50人",
                "financeStage": "未融资",
                "positionName": "渠道销售",
                "salary": "4k-6k",
                "education": "不限",
                "workYear": "应届毕业生",
                "city": "北京"
            }, {
                "positionId": 6273119,
                "companyLogo": "image1/M00/00/3C/Cgo8PFTUXLOAVHZ-AACFosKYPbs938.png",
                "companyShortName": "淡蓝网Blued",
                "industryField": "移动互联网,社交",
                "companySize": "150-500人",
                "financeStage": "D轮及以上",
                "positionName": "销售实习生",
                "salary": "2k-3k",
                "education": "不限",
                "workYear": "应届毕业生",
                "city": "北京"
            }, {
                "positionId": 6316105,
                "companyLogo": "i/image2/M01/B3/EB/CgoB5lwGFhSAfHt-AAAQoyYtENU742.jpg",
                "companyShortName": "琥珀纷钛",
                "industryField": "移动互联网,金融",
                "companySize": "15-50人",
                "financeStage": "A轮",
                "positionName": "在线客服",
                "salary": "4k-6k",
                "education": "不限",
                "workYear": "1-3年",
                "city": "北京"
            }, {
                "positionId": 6254720,
                "companyLogo": "i/image3/M00/43/D2/Cgq2xlq4haWAXGC0AABchMno84M300.jpg",
                "companyShortName": "方格教育",
                "industryField": "教育",
                "companySize": "15-50人",
                "financeStage": "未融资",
                "positionName": "渠道销售",
                "salary": "4k-6k",
                "education": "不限",
                "workYear": "应届毕业生",
                "city": "北京"
            }, {
                "positionId": 6273119,
                "companyLogo": "image1/M00/00/3C/Cgo8PFTUXLOAVHZ-AACFosKYPbs938.png",
                "companyShortName": "淡蓝网Blued",
                "industryField": "移动互联网,社交",
                "companySize": "150-500人",
                "financeStage": "D轮及以上",
                "positionName": "销售实习生",
                "salary": "2k-3k",
                "education": "不限",
                "workYear": "应届毕业生",
                "city": "北京"
            }, {
                "positionId": 6316105,
                "companyLogo": "i/image2/M01/B3/EB/CgoB5lwGFhSAfHt-AAAQoyYtENU742.jpg",
                "companyShortName": "琥珀纷钛",
                "industryField": "移动互联网,金融",
                "companySize": "15-50人",
                "financeStage": "A轮",
                "positionName": "在线客服",
                "salary": "4k-6k",
                "education": "不限",
                "workYear": "1-3年",
                "city": "北京"
            }, {
                "positionId": 6254720,
                "companyLogo": "i/image3/M00/43/D2/Cgq2xlq4haWAXGC0AABchMno84M300.jpg",
                "companyShortName": "方格教育",
                "industryField": "教育",
                "companySize": "15-50人",
                "financeStage": "未融资",
                "positionName": "渠道销售",
                "salary": "4k-6k",
                "education": "不限",
                "workYear": "应届毕业生",
                "city": "北京"
            } */
        ]
    })
});
router.get('/v1/neirong/delivers/batchDeliver', function(req, res, next) {
    res.send({
        "state":1,
        "message":"已投递2个职位",
        "content":{
            "deliveredPositionIds":[6273119, 5124640]
        },
        "uiMessage":null
    })
}),
app.use('/', router)
//定制404页面
app.use(function(req,res,next){
    res.status(404);
});
app.set('port', 8090);
 
app.listen(app.get('port'), function () {
    console.log('Proxy server listening on port ' + app.get('port'));
});