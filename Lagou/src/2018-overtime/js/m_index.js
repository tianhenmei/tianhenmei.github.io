(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
    function ANGLE(position, global) {
        var dx = global.x - position.x,
            dy = global.y - position.y,
            an = Math.acos(dy / Math.sqrt(dx * dx + dy * dy))
        if(dx >= 0 && dy >= 0){
            an = 2 * Math.PI - an
        }else if(dx >= 0 && dy <= 0){
            an = 2 * Math.PI - an
        }
        return an
    }
    function SCALE(position,global,data,scale){
        var dx = global.x - position.x,
            dy = global.y - position.y,
            absA = Math.abs(dx),
            absB = Math.abs(dy),
            mins = 0.4,//100 / data.w,
            s = scale
        if(dy < 0){ // 缩小
            s = s * (1 + absB / data.w)
        }else if(dy > 0){  // 放大
            s = s * (1 - absB / data.w)
        }
        return s < mins ? mins : s
        // var dx = global.x - position.x,
        //     dy = global.y - position.y,
        //     absA = Math.abs(dx),
        //     absB = Math.abs(dy),
        //     mins = 0.4,//100 / data.w,
        //     s = scale
        // if(dy < 0){ // 缩小
        //     s = s * (1 - absB / data.w)
        // }else if(dy > 0){  // 放大
        //     s = s * (1 + absB / data.w)
        // }
        // return s < mins ? mins : s
    }
    
    var app = new Vue({
        el:"#app",
        data:{
            dataCode:"1bh8",
            width:750,
            height:1206,
            fontSize:16,
            people:[],  // 用于存放所有人物角色舞台的数组
            stage:null,  // 用于人物舞台
            stageE:null,
            stageO:null,
            ercodeStage:null,
            classifyActive:0,
            currentRoleType:0,
            currentRotate:null,
            backgroundStage:null,
            fullscreenStatus:false,
            foldStatus:false,
            resultStatus:false,
            resultTipsStatus:false,
            resultWhiteStatus:false,
            canvas:null,
            canvasStage:null,
            result:'',
            w:1080,
            h:1920,
            currentSexIndex:-1,
            currentOthersIndex:-1,        
            currentPostureIndex:0,
            currentEmotionIndex:0,
            currentClothesIndex:0,
            currentHairIndex:0,
            host:"",
            classify:[{
                name:"场景"
            },{
                name:"性别"
            },{
                name:"姿势"
            },{
                name:"衣服"
            },{
                name:"表情"
            },{
                name:"发型"
            },{
                name:"物品一"
            },{
                name:"物品二"
            }],
            sex:[{
                name:"男",
                en:'man'
            },{
                name:"女",
                en:'woman'
            }],
            facing:[{
                name:"坐着",
                en:'sit'
            },{
                name:"站立",
                en:'stand',
            },{
                name:"跪着",
                en:'knee'
            }],
            cloth:[{
                name:"1"
            },{
                name:"2"
            },{
                name:"3"
            },{
                name:"4"
            },{
                name:"5"
            },{
                name:"6"
            }],
            emotionList:[{
                name:"1"
            },{
                name:"2"
            },{
                name:"3"
            },{
                name:"4"
            },{
                name:"5"
            },{
                name:"6"
            },{
                name:"7"
            },{
                name:"8"
            }],
            hairList:[{
                name:"1"
            },{
                name:"2"
            },{
                name:"3"
            },{
                name:"4"
            },{
                name:"5"
            },{
                name:"6"
            },{
                name:"7"
            },{
                name:"8"
            },{
                name:"9"
            }],
            hairList_woman:[{
                name:"1"
            },{
                name:"2"
            },{
                name:"3"
            },{
                name:"4"
            },{
                name:"5"
            },{
                name:"6"
            },{
                name:"7"
            },{
                name:"8"
            }],
            roomList:[{
                name:"1"
            },{
                name:"2"
            },{
                name:"3"
            },{
                name:"4"
            }],
            othersList:[
                {},{},{},{},{},
                {},{},{},{},{}],
            role:[
                // man
                [
                    {  // 坐着
                        bodyPosition: {
                            x: 327,
                            y: 200
                        },
                        bodyImgPosition: {
                            x: 0,
                            y: 84+79-20
                        },
                        headPosition: {
                            x: 90,
                            y: 79-20
                        },
                        hairPosition: {
                            x: 159 - 8,
                            y: 0
                        },
                        globalPosition: {
                            x: 327,
                            y: 200
                        }
                    },{ // 站立
                        bodyPosition: {
                            x: 327,
                            y: 200
                        },
                        bodyImgPosition: {
                            x: 0,
                            y: 162+77 - 20
                        },
                        headPosition: {
                            x: 35,
                            y: 77 -20
                        },
                        hairPosition: {
                            x: 103 - 8,
                            y: 0
                        },
                        globalPosition: {
                            x: 327,
                            y: 200
                        }
                    },{  // 跪着
                        bodyPosition: {
                            x: 225,
                            y: 200
                        },
                        bodyImgPosition: {
                            x: 0,
                            y: 0+27-20
                        },
                        headPosition: {
                            x: 202,
                            y: 48+27-20
                        },
                        hairPosition: {
                            x: 269 - 8,
                            y: 0
                        },
                        globalPosition: {
                            x: 327,
                            y: 200
                        }
                    }
                ],
                // woman
                [
                    {  // 坐着
                        bodyPosition: {
                            x: 327,
                            y: 200
                        },
                        bodyImgPosition: {
                            x: 0,
                            y: 125+30+45
                        },
                        headPosition: {
                            x: 233,
                            y: 30+45
                        },
                        hairPosition: {
                            x: 233 - 17,
                            y: 0
                        },
                        globalPosition: {
                            x: 327,
                            y: 200
                        }
                    },{ // 站立
                        bodyPosition: {
                            x: 327,
                            y: 200
                        },
                        bodyImgPosition: {
                            x: 0,
                            y: 93+30+45
                        },
                        headPosition: {
                            x: 173,
                            y: 30+45
                        },
                        hairPosition: {
                            x: 173 - 17,
                            y: 0
                        },
                        globalPosition: {
                            x: 327,
                            y: 200
                        }
                    },{  // 跪着
                        bodyPosition: {
                            x: 327,
                            y: 200
                        },
                        bodyImgPosition: {
                            x: 0,
                            y: 112+30+45
                        },
                        headPosition: {
                            x: 244,
                            y: 30+45
                        },
                        hairPosition: {
                            x: 244 - 17,
                            y: 0
                        },
                        globalPosition: {
                            x: 327,
                            y: 200
                        }
                    }
                ]
            ],
            clothesIndex:0,
            clothes:[
                [  // man 
                    [{ // 坐着 
                        url:'images/man-sit-01.png',
                        width:477,
                        height:506,
                        position:{
                            x:10,
                            y:85
                        }
                    },{
                        url:'images/man-sit-02.png',
                        width:471,
                        height:510,
                        position:{
                            x:13,
                            y:84
                        }
                    },{
                        url:'images/man-sit-03.png',
                        width:471,
                        height:506,
                        position:{
                            x:0,
                            y:87
                        }
                    },{
                        url:'images/man-sit-04.png',
                        width:479,
                        height:545,
                        position:{
                            x:12,
                            y:54
                        }
                    },{
                        url:'images/man-sit-05.png',
                        width:481,
                        height:587,
                        position:{
                            x:9,
                            y:0
                        }
                    },{
                        url:'images/man-sit-06.png',
                        width:479,
                        height:514,
                        position:{
                            x:17,
                            y:87
                        }
                    }],// 站立
                    [{
                        url:'images/man-stand-01.png',
                        width:280,
                        height:954,
                        position:{
                            x:46,
                            y:18
                        },
                    },{
                        url:'images/man-stand-02.png',
                        width:310,
                        height:984,
                        position:{
                            x:27,
                            y:13
                        },
                    },{
                        url:'images/man-stand-03.png',
                        width:397,
                        height:980,
                        position:{
                            x:29,
                            y:11
                        },
                    },{
                        url:'images/man-stand-04.png',
                        width:292,
                        height:969,
                        position:{
                            x:39,
                            y:18
                        }
                    },{
                        url:'images/man-stand-05.png',
                        width:371,
                        height:991,
                        position:{
                            x:0,
                            y:0
                        }
                    },{
                        url:'images/man-stand-06.png',
                        width:336,
                        height:968,
                        position:{
                            x:25,
                            y:14
                        }
                    }],[{ // 跪着
                        url:'images/man-knee-01.png',
                        width:279,
                        height:508,
                        position:{
                            x:209,
                            y:217
                        }
                    },{
                        url:'images/man-knee-02.png',
                        width:353,
                        height:507,
                        position:{
                            x:181,
                            y:216
                        }
                    },{
                        url:'images/man-knee-03.png',
                        width:526,
                        height:730,
                        position:{
                            x:102,
                            y:3
                        }
                    },{
                        url:'images/man-knee-04.png',
                        width:630,
                        height:512,
                        position:{
                            x:0,
                            y:221
                        }
                    },{
                        url:'images/man-knee-05.png',
                        width:406,
                        height:579,
                        position:{
                            x:153,
                            y:154
                        }
                    },{
                        url:'images/man-knee-06.png',
                        width:414,
                        height:494,
                        position:{
                            x:139,
                            y:216
                        }
                    }]
                ],[  // woman
                    [{// 站立
                        url:'images/woman-sit-01.png',
                        width:449,
                        height:463,
                        position:{
                            x:104,
                            y:28
                        }
                    },{
                        url:'images/woman-sit-02.png',
                        width:396,
                        height:451,
                        position:{
                            x:117,
                            y:30
                        }
                    },{
                        url:'images/woman-sit-03.png',
                        width:528,
                        height:461,
                        position:{
                            x:84,
                            y:28
                        }
                    },{
                        url:'images/woman-sit-04.png',
                        width:406,
                        height:492,
                        position:{
                            x:124,
                            y:29
                        }
                    },{
                        url:'images/woman-sit-05.png',
                        width:643,
                        height:515,
                        position:{
                            x:0,
                            y:0
                        }
                    },{
                        url:'images/woman-sit-06.png',
                        width:463,
                        height:467,
                        position:{
                            x:119,
                            y:31
                        }
                    }],[{ // 站立
                        url:'images/woman-stand-01.png',
                        width:351,
                        height:921,
                        position:{
                            x:40,
                            y:69
                        }
                    },{
                        url:'images/woman-stand-02.png',
                        width:347,
                        height:924,
                        position:{
                            x:83,
                            y:64
                        }
                    },{
                        url:'images/woman-stand-03.png',
                        width:525,
                        height:924,
                        position:{
                            x:25,
                            y:62
                        }
                    },{
                        url:'images/woman-stand-04.png',
                        width:302,
                        height:911,
                        position:{
                            x:110,
                            y:93
                        }
                    },{
                        url:'images/woman-stand-05.png',
                        width:518,
                        height:945,
                        position:{
                            x:0,
                            y:76
                        }
                    },{
                        url:'images/woman-stand-06.png',
                        width:459,
                        height:999,
                        position:{
                            x:58,
                            y:0
                        }
                    }],[{// 跪着
                        url:'images/woman-knee-01.png',
                        width:347,
                        height:498,
                        position:{
                            x:146,
                            y:43
                        }
                    },{
                        url:'images/woman-knee-02.png',
                        width:294,
                        height:507,
                        position:{
                            x:181,
                            y:44
                        }
                    },{
                        url:'images/woman-knee-03.png',
                        width:525,
                        height:525,
                        position:{
                            x:98,
                            y:13
                        }
                    },{
                        url:'images/woman-knee-04.png',
                        width:323,
                        height:510,
                        position:{
                            x:159,
                            y:41
                        }
                    },{
                        url:'images/woman-knee-05.png',
                        width:643,
                        height:512,
                        position:{
                            x:0,
                            y:13
                        }
                    },{
                        url:'images/woman-knee-06.png',
                        width:278,
                        height:490,
                        position:{
                            x:196,
                            y:42
                        }
                    }]
                ]
            ],
            emotion:[[{
                url:'images/man-head-09.png',
                width:222,
                height:266,
                position:{
                    x:26,
                    y:6
                }
            },{
                url:'images/man-head-06.png',
                width:222,
                height:266,
                position:{
                    x:26,
                    y:6
                }
            },{
                url:'images/man-head-07.png',
                width:222,
                height:266,
                position:{
                    x:26,
                    y:6
                }
            },{
                url:'images/man-head-03.png',
                width:222,
                height:266,
                position:{
                    x:26,
                    y:6
                }
            },{
                url:'images/man-head-05.png',
                width:294,
                height:266,
                position:{
                    x:26,
                    y:6
                }
            },{
                url:'images/man-head-01.png',
                width:222,
                height:266,
                position:{
                    x:26,
                    y:6
                }
            },{
                url:'images/man-head-04.png',
                width:248,
                height:269,
                position:{
                    x:0,
                    y:3
                }
            },{
                url:'images/man-head-08.png',
                width:222,
                height:266,
                position:{
                    x:26,
                    y:6
                }
            },{
                url:'images/man-head-02.png',
                width:222,
                height:266,
                position:{
                    x:26,
                    y:6
                }
            }],[{
                url:'images/woman-head-9.png',
                width:177,
                height:253,
                position:{
                    x:0,
                    y:0
                }
            },{
                url:'images/woman-head-5.png',
                width:177,
                height:253,
                position:{
                    x:0,
                    y:0
                }
            },{
                url:'images/woman-head-7.png',
                width:177,
                height:253,
                position:{
                    x:0,
                    y:0
                }
            },{
                url:'images/woman-head-8.png',
                width:177,
                height:253,
                position:{
                    x:0,
                    y:0
                }
            },{
                url:'images/woman-head-1.png',
                width:177,
                height:253,
                position:{
                    x:0,
                    y:0
                }
            },{
                url:'images/woman-head-6.png',
                width:177,
                height:253,
                position:{
                    x:0,
                    y:0
                }
            },{
                url:'images/woman-head-2.png',
                width:177,
                height:253,
                position:{
                    x:0,
                    y:0
                }
            },{
                url:'images/woman-head-3.png',
                width:177,
                height:253,
                position:{
                    x:0,
                    y:0
                }
            },{
                url:'images/woman-head-4.png',
                width:177,
                height:253,
                position:{
                    x:0,
                    y:0
                }
            }]],
            hair:[[{
                url:'images/man-hair-01.png',
                width:146,
                height:127,
                position:{
                    x:16,
                    y:30
                },
            },{
                url:'images/man-hair-02.png',
                width:151,
                height:138,
                position:{
                    x:13,
                    y:22
                },
            },{
                url:'images/man-hair-03.png',
                width:137,
                height:95,
                position:{
                    x:14,
                    y:56
                }
            },{
                url:'images/man-hair-04.png',
                width:139,
                height:151,
                position:{
                    x:11,
                    y:0
                },
            },{
                url:'images/man-hair-05.png',
                width:158,
                height:102,
                position:{
                    x:5,
                    y:49
                }
            },{
                url:'images/man-hair-06.png',
                width:152,
                height:130,
                position:{
                    x:1,
                    y:25
                }
            },{
                url:'images/man-hair-07.png',
                width:149,
                height:168,
                position:{
                    x:7,
                    y:25
                }
            },{
                url:'images/man-hair-08.png',
                width:135,
                height:117,
                position:{
                    x:14,
                    y:40
                }
            },{
                url:'images/man-hair-09.png',
                width:158,
                height:157,
                position:{
                    x:0,
                    y:42
                }
            }],[{
                url:'images/woman-hair-01.png',
                width:183,
                height:166,
                position:{
                    x:14,
                    y:12+47
                }
            },{
                url:'images/woman-hair-02.png',
                width:161,
                height:226,
                position:{
                    x:26,
                    y:7+47
                }
            },{
                url:'images/woman-hair-03-02.png',
                width:136,
                height:131,
                position:{
                    x:33,
                    y:7+47
                }
            },{
                url:'images/woman-hair-04.png',
                width:220,
                height:243,
                position:{
                    x:0,
                    y:16+47
                }
            },{
                url:'images/woman-hair-05.png',
                width:145,
                height:231,
                position:{
                    x:28,
                    y:0+47
                }
            },{
                url:'images/woman-hair-06.png',
                width:167,
                height:198,
                position:{
                    x:14,
                    y:0+47
                }
            },{
                url:'images/woman-hair-07.png',
                width:146,
                height:228,
                position:{
                    x:32,
                    y:0
                }
            },{
                url:'images/woman-hair-08.png',
                width:153,
                height:133,
                position:{
                    x:24,
                    y:2+47
                }
            }]],
            room:[{
                url:'images/room-01.jpg?v=2',
                width:1080,
                height:2178
            },{
                url:'images/room2.jpg?v=2',
                width:1080,
                height:2016
            },{
                url:'images/room3.jpg?v=2',
                width:1080,
                height:2016
            },{
                url:'images/room4.jpg?v=2',
                width:1080,
                height:2016
            }],
            others:[{
                url:'images/others/01.png',
                width:338,
                height:1030
            },{
                url:'images/others/02.png',
                width:213,
                height:276
            },{
                url:'images/others/09.png',
                width:454,
                height:516
            },{  // 柯基
                url:'images/others/31-add.png',
                width:312,
                height:263
                // url:'images/others/31.png',
                // width:275,
                // height:327
            },{  // 沙皮
                url:'images/others/15.png',
                width:332,
                height:341
            },{  // 猫
                url:'images/others/24.png',
                width:415,
                height:325
            },{  // 天道酬勤
                url:'images/others/18.png',
                width:418,
                height:209
            },{  // 条幅 我爱加班
                url:'images/others/50.png',
                width:909,
                height:129
            },{ // 条幅 要么交业绩
                url:'images/others/51.png',
                width:909,
                height:129
            },{  // 马云头像
                url:'images/others/48-add.png',
                width:349,
                height:276
                // url:'images/others/48.png',
                // width:394,
                // height:329
            },{  // 代码佛
                url:'images/others/49-add.png',
                width:306,
                height:306
                // url:'images/others/49.png',
                // width:281,
                // height:205
            },{
                url:'images/others/20.png',
                width:85,
                height:273
            },{
                url:'images/others/21.png',
                width:85,
                height:273
            },{
                url:'images/others/22.png',
                width:85,
                height:273
            },{
                url:'images/others/32.png',
                width:275,
                height:327
            },{
                url:'images/others/52-add.png',
                width:562,
                height:111
            },{
                url:'images/others/53-add.png',
                width:562,
                height:111
            }],
            others2:[{
                url:'images/others/28.png',
                width:454,
                height:365
            },{
                // url:'images/others/12.png',
                // width:323,
                // height:186
                url:'images/others/12-add.png',
                width:590,
                height:587
            },{
                url:'images/others/13-add.png',
                width:220,
                height:88
                // url:'images/others/13.png',
                // width:262,
                // height:177
            },{
                url:'images/others/23-add.png',
                width:204,
                height:234
                // url:'images/others/23.png',
                // width:187,
                // height:123
            },{
                url:'images/others/17-add.png',
                width:306,
                height:195
                // url:'images/others/17.png',
                // width:97,
                // height:175
            },{
                url:'images/others/06.png',
                width:115,
                height:98
            },{
                url:'images/others/38-add.png',
                width:280,
                height:885
                // url:'images/others/38.png',
                // width:118,
                // height:121
            },{
                url:'images/others/04.png',
                width:138,
                height:281
            },{
                url:'images/others/05-add.png',
                width:146,
                height:111
            },{
                url:'images/others/33.png',
                width:132,
                height:104
            },{
                url:'images/others/41.png',
                width:232,
                height:219
            },{
                url:'images/others/29-add.png',
                width:173,
                height:205
            },{
                url:'images/others/19-add.png',
                width:144,
                height:159
                // url:'images/others/19.png',
                // width:221,
                // height:178
            },{
                url:'images/others/37.png',
                width:124,
                height:264
            },{
                url:'images/others/30.png',
                width:86,
                height:142
            },{
                url:'images/others/39-add.png',
                width:907,
                height:666
                // url:'images/others/39.png',
                // width:907,
                // height:666
            },{
                url:'images/others/26.png',
                width:133,
                height:134
            },{
                url:'images/others/25.png',
                width:242,
                height:283
            },{
                url:'images/others/14.png',
                width:227,
                height:168
            },{
                url:'images/others/42.png',
                width:174,
                height:167
            },{
                url:'images/others/44.png',
                width:99,
                height:151
            },{
                url:'images/others/16.png',
                width:194,
                height:253
            },{
                url:'images/others/08.png',
                width:87,
                height:103
            },{
                url:'images/others/10.png',
                width:55,
                height:122
            },{
                url:'images/others/11.png',
                width:178,
                height:259
            },{
                url:'images/others/03.png',
                width:117,
                height:306
            },{
                url:'images/others/36.png',
                width:229,
                height:174
            },{
                url:'images/others/45.png',
                width:214,
                height:222
            },{
                url:'images/others/46.png',
                width:250,
                height:163
            },{
                url:'images/others/40.png',
                width:212,
                height:306
            },{
                url:'images/others/35.png',
                width:80,
                height:259
            },{
                url:'images/others/07.png',
                width:140,
                height:81
            },{
                url:'images/others/34.png',
                width:203,
                height:89
            }/*,{
                url:'images/others/27.png',
                width:109,
                height:64
            }*//*,{
                url:'images/others/43.png',
                width:441,
                height:729
            }*//*,{
                url:'images/others/47.png',
                width:717,
                height:474
            }*/],
            saying:[
                "KPI还未达标，加班就要趁早",
                "世上最遥远的距离，是你在加班而我在等你",
                "押一付三是动力，夜不归宿是劳动力",
                "贫穷，让人无法入睡",
                "单身不是我的错，都是加班背的锅",
                "沉迷加班，日渐消瘦",
                "有个人经常加班，后来，他死了",
                "每一次夜归，是为了将来的闪耀",
                "从没有白加的班，每一秒，都算数",
                "天亮之前，我就是光",
                "我努力加班，是为了追上曾经被寄予厚望的自己",
                "拼出个样来，给自己看",
                "梦想就是别人都觉得像个笑话，而自己却当做宝贝",
                "总有一些事情，是值得加班做好的"
            ]
        },
        computed:{
            userInfo:function(){
                return {
                    sex:'',
                    facing:'front',
                }
            },
        },
        mounted:function(){
            var _this = this
            this.width = window.innerWidth
            this.height = window.innerHeight
            this.w = 1080
            this.h = 1080 / this.width * this.height,
            this.fontSize = fontSize
            // alert(this.width+' , '+this.height)
            // iphoneX
            this.fullscreenStatus = /iphone/gi.test(window.navigator.userAgent) && window.screen.width == 375 && window.screen.height == 812 && this.height > 720
            this.initCanvas()
            document.addEventListener('touchend',function(e){
                // e.preventDefault()
                if(_this.currentRotate){
                    _this.currentRotate.dragging = false
                    _this.currentRotate = null
                }
                if(_this.currentScale){
                    _this.currentScale.dragging = false
                    _this.currentScale = null
                }
            },this)
            this.requestAnimation()
            this.doAnimation()
        },
        methods:{
            getRem:function(value){
                // return value / (750 / 16)
                return value * (750 / 1080) / (750 / 16)
            },
            getPx:function(value){
                return value * (750 / 1080) / (750 / 16) * this.fontSize
            },
            getCount: function (num) {
                return '0000'.slice((num + '').length) + num;
            },
            doAnimation:function(){
                TWEEN.update();
                requestAnimationFrame(this.doAnimation);
            },
            requestAnimation:function(){
                var lastTime = 0;
                var vendors = ['webkit', 'moz'];
                let self = this
                for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
                    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
                    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||    // name has changed in Webkit
                                                window[vendors[x] + 'CancelRequestAnimationFrame'];
                }
    
                if (!window.requestAnimationFrame) {
                    window.requestAnimationFrame = function(callback) {
                        var currTime = new Date().getTime();
                        var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
                        // self.waitTime = timeToCall
                        var id = window.setTimeout(function() {
                            callback();
                        }, timeToCall);
                        lastTime = currTime + timeToCall;
                        return id;
                    };
                }
                if (!window.cancelAnimationFrame) {
                    window.cancelAnimationFrame = function(id) {
                        clearTimeout(id);
                    };
                }
            },
            initCanvas:function(){
                // 创建canvas画布（1080x1736）
            　　 // 并设置背景为黑色(16进制),第三个参数（options对象）是可选的
            　　 // 然后将其添加到html中
                var content = this.$refs.content
                // PIXI.Application
                // PIXI.CanvasRenderer
                var can = new PIXI.Application(this.w,this.h,{//this.width,this.height,{
                    preserveDrawingBuffer:true,
                    antialias: false,  
                    backgroundColor:0xffffff
                })
                this.canvas = can
                content.appendChild(can.view)
                this.canvasStage = new PIXI.Container()
                // 使用图片方式创建背景精灵
                this.backgroundStage = new PIXI.Container()
                var background = this.setBackground(0)
                // 将背景精灵放置于舞台之上
                this.backgroundStage.position.set(0,0)
                this.backgroundStage.index = 0
                this.backgroundStage.addChild(background)
                this.canvasStage.addChild(this.backgroundStage)
                // can.stage.scale.set(
                //     this.width / this.w
                // )
                // can.render(this.stage)
                // 之后的对象都存在于舞台之上
                // this.stage: 用于放置人物
                this.stage = new PIXI.Container()
                this.stage.x = 0
                this.stage.y = 0
                this.canvasStage.addChild(this.stage)
                this.stageO = new PIXI.Container()
                this.canvasStage.addChild(this.stageO)
                this.stageE = new PIXI.Container()
                this.canvasStage.addChild(this.stageE)
    
                this.ercodeStage = new PIXI.Container()
                this.addErcodeChild()
                // this.canvasStage.addChild(this.ercodeStage)
                // 设置默认背景
                var bg = new PIXI.Sprite.fromImage(this.host+"images/bg.jpg")
                bg.width = this.w
                bg.height = 2323
                can.stage.addChild(bg,this.canvasStage,this.ercodeStage)
            },
            setBackground:function(index){
                var current = this.room[index],
                    background = new PIXI.Sprite.fromImage(this.host+current.url)
                    background.width = current.width
                    background.height = current.height
                background.position.set(0,0);
                return background
            },
            addErcodeChild:function(){
                this.ercodeStage.position.set(0,this.h)
                this.ercodeStage.width = this.w
                this.ercodeStage.height = this.h
                var bottomBG = new PIXI.Sprite.fromImage(this.host+"images/bottom.jpg?v=2");
                bottomBG.width = 1014
                bottomBG.height = 271
                bottomBG.position.set((this.w - 1014) / 2, -bottomBG.height)//this.h - bottomBG.height);
                var ercode = new PIXI.Sprite.fromImage(this.host+"images/ercode.png");
                ercode.width = 121// * (this.w / 1014)  //280
                ercode.height = 121// * (this.w / 1014)  //280
                ercode.position.set(this.w - ercode.width - 7 - 33, -ercode.height - 88 - 33);
                var style = new PIXI.TextStyle({
                        lineHeight:29,
                        letterSpacing:5,
                        // fontFamily: 'Arial',
                        fontSize: 24,
                        // fontStyle: 'italic',
                        // fontWeight: 'bold',
                        fill: ['#ffffff','#ffffff'],//, '#00ff99'], // gradient
                        // stroke: '#4a1850',
                        // strokeThickness: 5,
                        // dropShadow: true,
                        // dropShadowColor: '#000000',
                        // dropShadowBlur: 4,
                        // dropShadowAngle: Math.PI / 6,
                        // dropShadowDistance: 6,
                        // wordWrap: true,
                        // wordWrapWidth: 660
                    }),
                    index = Math.floor(Math.random() * this.saying.length),
                    saying = new PIXI.Text(this.saying[index],style)
                saying.x = 25+33
                saying.y = -131-29
                this.ercodeStage.visible = false
                this.ercodeStage.addChild(bottomBG,saying,ercode)
            },
            foldEvent:function(event){
                this.foldStatus = !this.foldStatus
            },
            onDragStart:function(event){
                // store a reference to the data
                // the reason for this is because of multitouch
                // we want to track the movement of this particular touch
                this.data = event.data;
                // this.alpha = 0.5;
                this.dragging = true;
            },
            onDragMove:function(){
                if (this.dragging) {
                    var newPosition = this.data.getLocalPosition(this.parent);
                    this.x = newPosition.x;
                    this.y = newPosition.y;
                }
            },
            onDragEnd:function(){
                // this.alpha = 1;
                this.dragging = false;
                // set the interaction data to null
                this.data = null;
            },
            changeClassify:function(index){
                var length = this.people.length
                this.currentRoleType = length > 0 ? this.people[length - 1].role : 0
                this.classifyActive = index
                this.foldStatus = false
            },
            beforeSelectRole:function(index){
                this.currentSexIndex = index
            },
            selectRole:function(index){
                this.currentSexIndex = -1
                var stage = null
                if(this.stageE.children.length == 0){
                    stage = this.createRole(index)
                    this.stageE.addChild(stage)
                }else if(this.stageE.children.length == 1){
                    var temp = this.stageE.children[0]
                    temp.chosen = false
                    temp.outline.visible = false
                    this.stageO.addChild(temp)
                    this.stageE.removeChildren()
                    stage = this.createRole(index)
                    this.stageE.addChild(stage)
                }
            },
            createRole:function(index){
                var stage = new PIXI.Container(),
                    length = this.people.length,
                    _this = this
                stage.index = length
                _this.people.push(stage)
                stage.chosen = true
                stage.interactive = true
                stage.buttonMode = true
                stage.on("touchstart",function(event){
                    new TWEEN.Tween(this.scale).to({
                        x:1.015 * this.scale.x,
                        y:1.015 * this.scale.y
                    },100).start()
                    if(!this.chosen){
                        this.chosen = true
                        this.outline.visible = true
                        if(_this.stageE.children.length){
    
                        }else{
                            var first = _this.stageE.children[0]
                            first.chosen = false
                            first.outline.visible = false
                            _this.stageO.addChild(first)
                            _this.stageE.removeChildren()
                        }
                    }
                    // _this.people.remove(this)
                    _this.people.splice(this.index,1)
                    _this.people.push(this)
                    // 更新底部配置界面所有物体的状态
                    // e(this.role,t)
                    _this.stageE.addChild(this)
                    _this.stageO.removeChild(this)
                }).on("touchend", function(event) {
                    new TWEEN.Tween(this.scale).to({
                        x: 1 * this.scale.x,
                        y: 1 * this.scale.y
                    }, 100).start()
                })
                stage.role = index
                stage.facing = 0
                stage.emotion = 0
                stage.clothes = 0
                stage.hair = 0
                var x = Math.floor(Math.random() * 50) - 50,
                    y = Math.floor(Math.random() * 50) - 50,
                    data = this.role[index][stage.facing]
                stage.globalPosition = {
                    x:data.globalPosition.x + x,
                    y:data.globalPosition.y + y
                }
                stage.data = {
                    rotation:0
                }
                this.addChild(stage,{
                    role:data,  // 朝向
                    emotion:this.emotion[index][stage.emotion],  // 表情
                    clothes:this.clothes[index][stage.facing][stage.clothes],  // 衣服
                    hair:this.hair[index][stage.hair]  // 表情
                })
                this.clothesIndex = stage.facing
                this.drawSelection(stage)
                stage.originWidth = stage.width
                stage.originHeight = stage.height
                return stage
            },
            addChild:function(stage,data){
                var _this = this
                var headStage = new PIXI.Container()
                var bodyStage = new PIXI.Container()
                var lineStage = new PIXI.Container()
                var body = new PIXI.Sprite.fromImage(this.host+data.clothes.url),
                    minx = 0,
                    miny = 0
                    body.width = data.clothes.width
                    body.height = data.clothes.height
                body.position.set(
                    data.role.bodyImgPosition.x,
                    data.role.bodyImgPosition.y)
                bodyStage.position.set(0,
                    data.clothes.position.y-data.emotion.position.y-data.hair.position.y)
                bodyStage.addChild(body)
    
                var head = new PIXI.Sprite.fromImage(this.host+data.emotion.url)
                head.width = data.emotion.width
                head.height = data.emotion.height
                if(minx > data.emotion.position.x){
                    minx = data.emotion.position.x
                }
                if(miny > data.emotion.position.y){
                    miny = data.emotion.position.y
                }
                head.position.set(
                    data.role.headPosition.x+data.emotion.position.x, 
                    data.role.headPosition.y-data.hair.position.y)
                headStage.position.set(
                    -data.clothes.position.x,0)
                headStage.addChild(head)
                var hair = new PIXI.Sprite.fromImage(this.host+data.hair.url)
                hair.width = data.hair.width
                hair.height = data.hair.height
                if(minx > data.hair.position.x){
                    minx = data.hair.position.x
                }
                if(miny > data.hair.position.y){
                    miny = data.hair.position.y
                }
                hair.position.set(
                    data.role.hairPosition.x+data.hair.position.x,0)
                headStage.addChild(hair)
    
                bodyStage.interactive = true
                bodyStage.buttonMode = true
                bodyStage.on('touchstart',function(event){
                    event.stopped = true
                    _this.roleTouchStart(event,this)
                })
                .on("touchmove", function(event){
                    _this.roleTouchMove(event,this)
                })
                .on("touchend", function(event){
                    _this.roleTouchEnd(this)
                })
                headStage.interactive = true
                headStage.buttonMode = true
                headStage.on('touchstart',function(event){
                    event.stopped = true
                    _this.roleTouchStart(event,this)
                })
                .on("touchmove", function(event){
                    _this.roleTouchMove(event,this)
                })
                .on("touchend", function(){
                    _this.roleTouchEnd(this)
                })
                lineStage.position.set(minx,miny)
    
                this.currentPostureIndex = stage.facing
                this.currentClothesIndex = stage.clothes
                this.currentEmotionIndex = stage.emotion
                this.currentHairIndex = stage.hair
                stage.head = headStage
                stage.body = bodyStage
                stage.outline = lineStage
                stage.addChild(headStage,bodyStage,lineStage)
                
                stage.pivot.set(stage.width / 2, stage.height / 2)
                stage.position.set(stage.globalPosition.x + stage.width / 2, 
                            stage.globalPosition.y + stage.height / 2)
                // if(stage.facing == 1){
                //     stage.pivot.set(0, o.height / 2)
                //     stage.position.set(stage.globalPosition.x + stage.width / 2, 
                //         stage.globalPosition.y + stage.height / 2)
                //     if(stage.role == 0){
                //         stage.globalPosition.x += 150
                //     }else if(stage.role == 1){
                //         stage.globalPosition.x += 130
                //     }
                // }else if(stage.pivot._x == 0){
                //     if(stage.role == 0){
                //         stage.globalPosition.x += 150
                //     }else if(stage.role == 1){
                //         stage.globalPosition.x += 130
                //     }
                //     stage.pivot.set(stage.width / 2, stage.height / 2),
                //     stage.position.set(stage.globalPosition.x + stage.width / 2, 
                //         stage.globalPosition.y + stage.height / 2)
                // }
            },
            putOnTop:function(self){
                new TWEEN.Tween(self.scale).to({
                    x:1.015 * self.scale.x,
                    y:1.015 * self.scale.y
                },100).start()
                if(!self.chosen){
                    self.chosen = true
                    self.outline.visible = true
                    if(this.stageE.children.length){
                        var first = this.stageE.children[0]
                        first.chosen = false
                        first.outline.visible = false
                        this.stageO.addChild(first)
                        this.stageE.removeChildren()
                    }
                }
                // this.people.remove(self)
                this.people.splice(self.index,1)
                this.people.push(self)
                // 更新底部配置界面所有物体的状态
                // e(this.role,t)
                this.stageE.addChild(self)
                this.stageO.removeChild(self)
            },
            roleTouchStart:function(o,self){
                this.putOnTop(self.parent)
                this.currentRoleType = self.parent.role
                this.currentPostureIndex = self.parent.facing
                this.currentClothesIndex = self.parent.clothes
                this.currentEmotionIndex = self.parent.emotion
                this.currentHairIndex = self.parent.hair
                // _this.setOnTop(stage)
                self.dragging = true
                self.startPosition = {
                    x: o.data.global.x,
                    y: o.data.global.y
                }
            },
            roleTouchMove:function(o,self){
                if(self.dragging){
                    self.newPosition = {
                        x: o.data.global.x,
                        y: o.data.global.y
                    }
                    self.parent.position.set(
                        self.newPosition.x - self.startPosition.x + self.parent.globalPosition.x + self.parent.pivot._x, 
                        self.newPosition.y - self.startPosition.y + self.parent.globalPosition.y + self.parent.pivot._y)
                }
            },
            roleTouchEnd:function(self){
                if(self.dragging){
                    self.dragging = false
                    self.parent.globalPosition.x = self.parent.position.x - self.parent.pivot._x
                    self.parent.globalPosition.y = self.parent.position.y - self.parent.pivot._y
                }else {
                    // 其他元素 拖拽到 别的元素下面，导致继续拖拽时 两个元素会同时动作
                    if(this.stageE.children.length > 0){
                        var temp = null,
                            i = 0
                        for(i = 0; i < this.stageE.children.length; i++){
                            temp = this.stageE.children[i]
                            temp.dragging = false
                            temp.chosen = false
                            temp.outline.visible = false
                            this.stageO.addChild(temp)
                        }
                        this.stageE.removeChildren()
                    }
                }
            },
            changeFacing:function(index){
                var length = this.people.length
                if(length > 0){
                    var stage = this.people[length - 1]
                    this.setOnTop(stage)
                    this.setFacing(stage,index)
                }
            },
            setFacing:function(stage,index){
                var _this = this
                if(stage.facing != index){
                    stage.facing = index
                    stage.removeChildren()
                    var data = this.role[stage.role][stage.facing]
                    this.addChild(stage,{
                        role:data,  // 朝向
                        emotion:this.emotion[stage.role][stage.emotion],  // 表情
                        clothes:this.clothes[stage.role][stage.facing][stage.clothes],  // 衣服
                        hair:this.hair[stage.role][stage.hair]  // 表情
                    })
                    this.clothesIndex = stage.facing
                    setTimeout(function() {
                        _this.drawSelection(stage)
                    }, 100)
                }
            },
            setOnTop:function(stage){
                if (stage != this.stageE.children[0]) {
                    if (this.stageE.children.length == 0){
    
                    }else {
                        var t = this.stageE.children[0]
                        t.chosen = false
                        t.outline.visible = false
                        this.stageO.addChild(t)
                        this.stageE.removeChildren()
                    }
                    // e(stage.sex, stage)
                    this.stageE.addChild(stage)
                    this.stageO.removeChild(stage)
                    stage.chosen = true
                    stage.outline.visible = true
                }
            },
            changeClothes:function(index){
                var length = this.people.length
                if(length > 0){
                    var stage = this.people[length - 1]
                    this.setOnTop(stage)
                    this.setClothes(stage,index)
                }
            },
            setClothes:function(stage,index){
                var _this = this
                if(stage.clothes != index){
                    stage.clothes = index
                    stage.removeChildren()
                    this.addChild(stage,{
                        role:this.role[stage.role][stage.facing],  // 朝向
                        emotion:this.emotion[stage.role][stage.emotion],  // 表情
                        clothes:this.clothes[stage.role][stage.facing][stage.clothes],  // 衣服
                        hair:this.hair[stage.role][stage.hair]  // 表情
                    })
                    setTimeout(function() {
                        _this.drawSelection(stage)
                    }, 100)
                }
            },
            changeMotion:function(index){
                var length = this.people.length
                if(length > 0){
                    var stage = this.people[length - 1]
                    this.setOnTop(stage)
                    this.setMotion(stage,index)
                }
            },
            setMotion:function(stage,index){
                var _this = this
                if(stage.emotion != index){
                    stage.emotion = index
                    stage.removeChildren()
                    this.addChild(stage,{
                        role:this.role[stage.role][stage.facing],  // 朝向
                        emotion:this.emotion[stage.role][stage.emotion],  // 表情
                        clothes:this.clothes[stage.role][stage.facing][stage.clothes],  // 衣服
                        hair:this.hair[stage.role][stage.hair]  // 表情
                    })
                    setTimeout(function() {
                        _this.drawSelection(stage)
                    }, 100)
                }
            },
            changeHair:function(index){
                var length = this.people.length
                if(length > 0){
                    var stage = this.people[length - 1]
                    this.setOnTop(stage)
                    this.setHair(stage,index)
                }
            },
            setHair:function(stage,index){
                var _this = this
                if(stage.hair != index){
                    stage.hair = index
                    stage.removeChildren()
                    this.addChild(stage,{
                        role:this.role[stage.role][stage.facing],  // 朝向
                        emotion:this.emotion[stage.role][stage.emotion],  // 表情
                        clothes:this.clothes[stage.role][stage.facing][stage.clothes],  // 衣服
                        hair:this.hair[stage.role][stage.hair]  // 表情
                    })
                    setTimeout(function() {
                        _this.drawSelection(stage)
                    }, 100)
                }
            },
            changeRoom:function(index){
                if(this.backgroundStage.index != index){
                    var background = this.setBackground(index)
                    this.backgroundStage.index = index
                    this.backgroundStage.removeChildren()
                    this.backgroundStage.addChild(background)
                }
            },
            beforeAddOthers:function(index){
                this.currentOthersIndex = index
            },
            moveAddOthers:function(){
                this.currentOthersIndex = -1
            },
            addOthers:function(classify,index){
                this.currentOthersIndex = -1
                var _this = this,
                    name = 'others'+(classify == 1 ? '2' : '') 
                if (this.stageE.children.length == 1) {
                    var current = this.stageE.children[0];
                    current.chosen = false
                    current.outline.visible = false
                    this.stageO.addChild(current),
                    this.stageE.removeChildren()
                }
                var otherStage = new PIXI.Container();
                otherStage.chosen = true
                otherStage.interactive = true
                otherStage.buttonMode = true
                otherStage.on("touchstart", function(o) {
                    new TWEEN.Tween(this.scale).to({
                        x: 1.015 * this.scale.x,
                        y: 1.015 * this.scale.y
                    }, 100).start()
                    if (!this.chosen) {
                        this.chosen = true
                        this.outline.visible = true
                        if (_this.stageE.children.length){
                            var last = _this.stageE.children[0];
                            last.chosen = false
                            last.outline.visible = false
                            _this.stageO.addChild(last),
                            _this.stageE.removeChildren()
                        }
                        _this.stageE.addChild(this)
                        _this.stageO.removeChild(this)
                    }
                }).on("touchend",function(o){
                    new TWEEN.Tween(this.scale).to({
                        x: 1 * this.scale.x,
                        y: 1 * this.scale.y
                    }, 100).start()
                })
                otherStage.data = {};
                var x = 50 * Math.random() - 50
                , y = 50 * Math.random() - 50;
                otherStage.globalPosition = {
                    x: (1080 - _this[name][index].width) / 2 + x,
                    y: (1920 - _this[name][index].height - 200) / 2 + y
                },
                otherStage.position.set(otherStage.globalPosition.x, otherStage.globalPosition.y);
                var subject = new PIXI.Sprite.fromImage(this.host+_this[name][index].url)
                subject.width = _this[name][index].width
                subject.height = _this[name][index].height
                subject.interactive = true
                subject.buttonMode = true
                var outer = new PIXI.Container();
                otherStage.addChild(subject, outer)
                otherStage.outline = outer
                subject.texture.baseTexture.hasLoaded ? _this.setOthersOperation(otherStage) : subject.texture.baseTexture.on("loaded", function() {
                    _this.setOthersOperation(otherStage)
                }),
                otherStage.originWidth = otherStage.width
                otherStage.originHeight = otherStage.height
                _this.stageE.addChild(otherStage)
            },
            setOthersOperation:function(stage){
                var _this = this
                stage.outline.removeChildren();
                var gra = new PIXI.Graphics();
                gra.lineStyle(1, 16777215, 1);
                var s = stage.scale.x,
                    width = stage.width / s,
                    height = stage.height / s
                stage.pivot.set(width / 2, height / 2),
                stage.position.set(stage.globalPosition.x + width / 2, stage.globalPosition.y + height / 2);
                var distance = 8;
                gra.moveTo(-distance, -distance)
                _this.drawDashLine(gra, -distance, -distance, width + distance, -distance)
                _this.drawDashLine(gra, width + distance, -distance, width + distance, height + distance)
                _this.drawDashLine(gra, width + distance, height + distance, -distance, height + distance)
                _this.drawDashLine(gra, -distance, height + distance, -distance, -distance)
                stage.children[0].on("touchstart", function(o) {
                    this.dragging = true
                    if (!this.parent.chosen) {
                        this.parent.chosen = true
                        this.parent.outline.visible = true
                        if (_this.stageE.children.length){
                            var last = _this.stageE.children[0];
                            last.chosen = false
                            last.outline.visible = false
                            if(last.children[0].dragging){
                                last.children[0].dragging = false
                                last.globalPosition.x = last.position.x - last.pivot._x
                                last.globalPosition.y = last.position.y - last.pivot._y
                            }
                            _this.stageO.addChild(last),
                            _this.stageE.removeChildren()
                        }
                        _this.stageE.addChild(this.parent)
                        _this.stageO.removeChild(this.parent)
                    }
                    this.startPosition = {
                        x: o.data.global.x,
                        y: o.data.global.y
                    }
                }).on("touchmove", function(o) {
                    if(this.dragging){
                        this.newPosition = {
                            x: o.data.global.x,
                            y: o.data.global.y
                        },
                        this.parent.position.set(
                            this.newPosition.x - this.startPosition.x + this.parent.globalPosition.x + this.parent.pivot._x, 
                            this.newPosition.y - this.startPosition.y + this.parent.globalPosition.y + this.parent.pivot._y)
                    }
                }).on("touchend", function() {
                    this.dragging = false
                    this.parent.globalPosition.x = this.parent.position.x - this.parent.pivot._x
                    this.parent.globalPosition.y = this.parent.position.y - this.parent.pivot._y
                }),
                stage.outline.addChild(gra);
                // var rotate = new PIXI.Sprite.fromImage(this.host+"images/rotate.png")
                // rotate.width = 42
                // rotate.height = 42
                // rotate.position.set(-distance-42,-distance-42),
                // rotate.interactive = true
                // rotate.buttonMode = true
                // rotate.on("touchstart", function(o) {
                //     this.dragging = true;
                //     var global = o.data.global;
                //     this.parent.parent.data.rotation = this.parent.parent.rotation;
                //     var angle = ANGLE({
                //         x: this.parent.parent.position.x,
                //         y: this.parent.parent.position.y
                //     }, global);
                //     this.startRotation = angle
                //     _this.currentRotate = this
                // }).on("touchmove", function(o) {
                //     if (this.dragging) {
                //         var global = o.data.global
                //         , angle = ANGLE({
                //             x: this.parent.parent.position.x,
                //             y: this.parent.parent.position.y
                //         }, global);
                //         this.parent.parent.rotation = angle - this.startRotation + this.parent.parent.data.rotation
                //     }
                // }).on("touchend", function() {
                //     this.dragging = false
                //     _this.currentRotate = null
                // });
                var scale = new PIXI.Sprite.fromImage(this.host+"images/scale-3.png"),
                    close = new PIXI.Sprite.fromImage(this.host+"images/close-2.png")
                scale.width = 60
                scale.height = 60
                scale.position.set(width + distance, -distance - 60)
                // scale.position.set(width, height)
                scale.interactive = true
                scale.buttonMode = true
                scale.on("touchstart", function(event) {
                    event.stopped = true
                    this.dragging = true;
                    var global = event.data.global;
                    this.parent.parent.data.scale = this.parent.parent.scale
                    this.startScale = this.parent.parent.scale
                    this.startScalePosition = event.data.getLocalPosition(this.parent.parent)
                    this.startSize = {
                        w:this.parent.parent.originWidth,
                        h:this.parent.parent.originHeight
                    }
                    // console.log("start: "+this.startScalePosition.x+' , '+this.startScalePosition.y)
                    _this.currentScale = this
                }).on("touchmove", function(event) {
                    if (this.dragging) {
                        var global = event.data.global,
                            currentPosition = event.data.getLocalPosition(this.parent.parent)
                            scale = SCALE(
                                this.startScalePosition, 
                                currentPosition, 
                                this.startSize,
                                this.startScale.x
                            );
                        this.parent.parent.scale.set(scale)
                        this.scale.set(1/scale)
                        this.position.set(width + distance, -distance-60/scale) // -(distance+60)
                        close.scale.set(1/scale)
                        close.position.set(-distance-60/scale,-distance-60/scale)
                    }
                }).on("touchend", function() {
                    this.dragging = false
                    _this.currentScale = null
                });
                close.width = 60
                close.height = 60
                close.position.set(-distance-60,-distance-60)
                // close.position.set(width + distance, -distance - 60)
                close.interactive = true
                close.buttonMode = true
                close.on("tap", function() {
                    this.parent.parent.parent.removeChild(this.parent.parent)
                }),
                stage.outline.addChild(scale, close)  // rotate, 
            },
            drawSelection:function(stage){
                var _this = this
                stage.outline.removeChildren();
                var gra = new PIXI.Graphics();
                gra.lineStyle(1, 16777215, 1);  // 0xffffff
                var s = stage.scale.x,
                    width = stage.width / s,
                    height = stage.height / s,
                    space = 8;
                // 3 != stage.facingTo && 6 == stage.faceIndex && (height -= 130)
                gra.moveTo(-space, -space),
                _this.drawDashLine(gra, -space, -space, width+space, -space),
                _this.drawDashLine(gra, width+space, -space, width+space, height+space),
                _this.drawDashLine(gra, width+space, height+space, -space, height+space),
                _this.drawDashLine(gra, -space, height+space, -space, -space),
                stage.outline.addChild(gra);
                // var rotate = new PIXI.Sprite.fromImage(this.host+"images/rotate.png")
                // rotate.width = 42
                // rotate.height = 42
                // rotate.position.set(-42-space, -42-space)
                // rotate.interactive = true
                // rotate.buttonMode = true
                // rotate.on("touchstart", function(event) {
                //     event.stopped = true
                //     this.dragging = true;
                //     var global = event.data.global;
                //     this.parent.parent.data.rotation = this.parent.parent.rotation;
                //     var angle = ANGLE({
                //         x: this.parent.parent.position.x,
                //         y: this.parent.parent.position.y
                //     }, global);
                //     this.startRotation = angle
                //     _this.currentRotate = this
                // }).on("touchmove", function(event) {
                //     if (this.dragging) {
                //         var global = event.data.global,
                //             angle = ANGLE({
                //                 x: this.parent.parent.position.x,
                //                 y: this.parent.parent.position.y
                //             }, global),
                //             scale = SCALE({
                //                 x: this.parent.parent.position.x,
                //                 y: this.parent.parent.position.y
                //             }, global, {
                //                 w:this.parent.parent.width,
                //                 h:this.parent.parent.height
                //             },this.parent.parent.scale);
                //         this.parent.parent.rotation = angle - this.startRotation + this.parent.parent.data.rotation
                //     }
                // }).on("touchend", function() {
                //     this.dragging = false
                //     _this.currentRotate = null
                // });
                var scale = new PIXI.Sprite.fromImage(this.host+"images/scale-3.png"),
                    close = new PIXI.Sprite.fromImage(this.host+"images/close-2.png"),
                    rr = stage.scale.x,
                    ww = 60//60 / rr
                console.log(ww)
                scale.width = ww
                scale.height = ww
                scale.position.set(width+space, -ww-space)
                // scale.position.set(width+space, height+space)
                scale.interactive = true
                scale.buttonMode = true
                scale.on("touchstart", function(event) {
                    event.stopped = true
                    this.dragging = true;
                    var global = event.data.global;
                    this.parent.parent.data.scale = this.parent.parent.scale
                    this.startScale = this.parent.parent.scale
                    this.startScalePosition = event.data.getLocalPosition(this.parent.parent)
                    this.startSize = {
                        w:this.parent.parent.originWidth,
                        h:this.parent.parent.originHeight
                    }
                    // console.log(this.startSize.w+' , '+this.startSize.h)
                    _this.currentScale = this
                }).on("touchmove", function(event) {
                    if (this.dragging) {
                        var global = event.data.global,
                            currentPosition = event.data.getLocalPosition(this.parent.parent)
                            scale = SCALE(
                                this.startScalePosition, 
                                currentPosition, 
                                this.startSize,
                                this.startScale.x
                            );
                        this.parent.parent.scale.set(scale)
                        this.scale.set(1/scale)
                        this.position.set(width + space, -space-ww/scale) // -(distance+60)
                        close.scale.set(1/scale)
                        close.position.set(-space-ww/scale,-space-ww/scale)
                        // this.parent.close.scale.set(1/scale)
                    }
                }).on("touchend", function() {
                    this.dragging = false
                    _this.currentScale = null
                });
                close.width = ww
                close.height = ww
                close.position.set(-ww-space, -ww-space)
                // close.position.set(width+space, -60-space)
                close.interactive = true
                close.buttonMode = true
                close.on("tap", function() {
                    // _this.people.remove(this.parent.parent)
                    _this.people.splice(this.parent.parent.index,1)
                    this.parent.parent.parent.removeChild(this.parent.parent)
                    // if(_this.people.length > 0 ){
                    //     e(_this.people[_this.people.length - 1].sex, _this.people[_this.people.length - 1])
                    // }else{
                    //     e(-100)
                    // }
                }),
                stage.outline.addChild(scale, close)  // rotate, 
            },
            getBeveling:function(dx, dy) {
                return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
            },
            drawDashLine:function(gra, startX, startY, endX, endY, dis) {
                dis = void 0 === dis ? 5 : dis;
                var distance = this.getBeveling(endX - startX, endY - startY),
                    ra = Math.floor(distance / dis),
                    func = '',
                    i = 0
                for (i = 0; i < ra; i++){
                    if(i % 2 == 0){
                        func = "moveTo"
                    }else {
                        func = "lineTo"
                    }
                    gra[func](
                        startX + (endX - startX) / ra * i, 
                        startY + (endY - startY) / ra * i
                    )
                }
            },
            ismobile:function(){
                var u = navigator.userAgent, app = navigator.appVersion;
                if(/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))){
                    if(window.location.href.indexOf("?mobile")<0){
                        try{
                            if(/iPhone/i.test(navigator.userAgent)){  // /iPhone|mac|iPod|iPad/i
                                return 'iphone';
                            }else{
                                return 'android';
                            }
                        }catch(e){}
                    }
                }else if( u.indexOf('iPad') > -1){
                    return 'iphone';
                }else{
                    return 'android';
                }
            },
            convertCanvasToImage:function(){
                var temp = null,
                    i = 0
                if(this.stageE.children.length > 0){
                    for(i = 0; i < this.stageE.children.length; i++){
                        temp = this.stageE.children[i]
                        temp.chosen = false
                        temp.outline.visible = false
                        this.stageO.addChild(temp)
                        this.stageE.removeChild(temp)
                    }
                }
                var _this = this,
                    space = (_this.w - 1014) / 2
                _this.resultWhiteStatus = true
                _this.canvasStage.scale.set(1014 / _this.w)
                _this.canvasStage.position.x = space
                _this.canvasStage.position.y = space
                _this.ercodeStage.visible = true
                _this.resultTipsStatus = true
                setTimeout(function(){
                    setTimeout(function(){
                        var canvas = document.getElementsByTagName('canvas')[0],
                            data = _this.canvas.renderer.plugins.extract.image().src
                        _this.result = data
                        _this.resultStatus = true
                        setTimeout(function(){
                            _this.resultTipsStatus = false
                            _this.resultWhiteStatus = false
                        },2300)
                    },30)
                },200)
            }
        }
    })
    },{}]},{},[1]);
    