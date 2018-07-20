var MENUE_BODY = $("#menu_body");
var MENUE_OPEN = false;
var HEADER = $("#header");
var BODY = $("body");
var isInWechat = /micromessenger/i.test(navigator.userAgent);
var G_wechatUrl = 'https://io.zaojiu.com/api/wechat/signature/config';
//var G_wechatUrl = 'https://io.baidingchat.com/api/wechat/signature/config';

// 未来智能
var intelligentList = [
    {
        id: '',
        name: 'Dr. Bibhrajit Halder',
        enName: 'Dr. Bibhrajit Halder',
        desc: ['SAFE AI 创始人兼CEO，范德堡大学机械工程系顾问、前苹果公司自动驾驶项目高级架构师'],
        enDesc: [''],
        picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/Dr.BibhrajitHalder.jpg',
        Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/Dr.BibhrajitHalder_s.jpg'
    },
    {
        id: '',
        name: '彭斌',
        enName: '',
        desc: ['极飞科技创始人兼CEO'],
        enDesc: [''],
        picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/pengbin.jpg',
        Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/pengbin_s.jpg'
    },
    {
        id: '',
        name: '简仁贤',
        enName: '',
        desc: ['竹间智能创始人及CEO'],
        enDesc: [''],
        picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/jianrenxian.jpg',
        Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/jianrenxian_s.jpg'
    },
    {
        id: '',
        name: '张经纬',
        enName: '',
        desc: ['上海博物馆馆员'],
        enDesc: [''],
        picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/zhangjingwei.jpg',
        Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/zhangjingwei_s.jpg'
    },
    {
        id: '',
        name: '范凌',
        enName: '',
        desc: ['特赞创始人及CEO'],
        enDesc: [''],
        picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/fanling.jpg',
        Thumbnail: ''
    }
];
// 未来生命
var lifeList = [
    {
        id: '',
        name: '张嘉漪',
        enName: '',
        desc: ['复旦大学脑科学研究院研究员'],
        enDesc: [''],
        picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/zhangjiayi.jpg',
        Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/zhangjiayi_s.jpg'
    },
    {
        id: '',
        name: '姜海',
        enName: '',
        desc: ['中国科学院上海生命科学研究院生物化学与细胞生物学研究所，研究员，研究组长'],
        enDesc: [''],
        picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/jianghai.jpg',
        Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/jianghai_s.jpg'
    },
    {
        id: '',
        name: '沈义栋',
        enName: '',
        desc: ['中科院生化与细胞所研究员、课题组长、博士生导师'],
        enDesc: [''],
        picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/shenyidong.jpg',
        Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/shenyidong_s.jpg'
    },
    {
        id: '',
        name: '戴建武',
        enName: '',
        desc: ['中国科学院遗传与发育研究所研究员，再生医学中心主任、分子发育生物学国家重点实验室副主任 '],
        enDesc: [''],
        picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/daijianwu.jpg',
        Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/daijianwu_s.jpg'
    },
    {
        id: '',
        name: '田兴',
        enName: '',
        desc: ['上海纽约大学神经与认知科学助理教授'],
        enDesc: [''],
        picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/tianxing.jpg',
        Thumbnail: ''
    }
];
// 未来城市
var cityList = [
    {
        id: '',
        name: '王坚',
        enName: '',
        desc: ['阿里巴巴技术委员会主席'],
        enDesc: [''],
        picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/wangjian.jpg',
        Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/wangjian_s.jpg'
    },
    {
        id: '',
        name: '崔晓波',
        enName: '',
        desc: ['TalkingData创始人兼CEO'],
        enDesc: [''],
        picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/cuixiaobo.jpg',
        Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/cuixiaobo_s.jpg'
    },
    {
        id: '',
        name: '汤舸',
        enName: '',
        desc: ['脉策数据（城市数据团）联合创始人及COO'],
        enDesc: [''],
        picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/tangke.jpg',
        Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/tangke_s.jpg'
    },
    {
        id: '',
        name: '杨泳梁',
        enName: '',
        desc: ['艺术家，代表作品《FALL INTO OBLIVION》、《The Day of Perpetual Night》等'],
        enDesc: [''],
        picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/yangyongliang.jpg',
        Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/yangyongliang_s.jpg'
    },
    {
        id: '',
        name: '虞晶怡',
        enName: '',
        desc: ['上海科技大学信息科学与技术学院教授，叠境数字科技（上海）有限公司创始人'],
        enDesc: [''],
        picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/yujingyi.jpg',
        Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/yujingyi_s.jpg'
    },
    {
        id: '',
        name: '龙瀛',
        enName: '',
        desc: ['清华大学建筑学院研究员、博士生导师、北京城市实验室创始人与执行主任'],
        enDesc: [''],
        picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/longying.jpg',
        Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/longying_s.jpg'
    }
];
// 未来探索
var exploreList = [
    {
        id: '',
        name: '张昌武',
        enName: '',
        desc: ['蓝箭航空 CEO'],
        enDesc: [''],
        picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/zhangchangwu.jpg',
        Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/zhangchangwu_s.jpg'
    },
    {
        id: '',
        name: '谢涛',
        enName: '',
        desc: ['九天微星创始人兼CEO'],
        enDesc: [''],
        picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/xietao.jpg',
        Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/xietao_s.jpg'
    },
    {
        id: '',
        name: '杨峰',
        enName: '',
        desc: ['天仪研究院 CEO'],
        enDesc: [''],
        picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/yangfeng.jpg',
        Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/yangfeng_s.jpg'
    },
    {
        id: '',
        name: '盛文强',
        enName: '',
        desc: ['作家、海洋文化研究者'],
        enDesc: [''],
        picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/shengwenqiang.jpg',
        Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/shengwenqiang_s.jpg'
    },
    {
        id: '',
        name: '夏伯渝',
        enName: '',
        desc: ['登山家'],
        enDesc: [''],
        picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/xiaboyu.jpg',
        Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/xiaboyu_s.jpg'
    }
];
// 未来娱乐
var recreationList = [
    {
        id: '',
        name: '蔡康永',
        enName: '',
        desc: ['节目主持人、作家、电影导演'],
        enDesc: [''],
        picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/caikangyong.jpg',
        Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/caikangyong_s.jpg'
    },
    {
        id: '',
        name: 'Billy Tan',
        enName: '',
        desc: ['知名美漫大师，漫威及DC资深画师，现任唐漫文化创始人＆CEO'],
        enDesc: [''],
        picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/BillyTan.jpg',
        Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/BillyTan_s.jpg'
    },
    {
        id: '',
        name: '王希',
        enName: '',
        desc: ['不鸣科技创始人兼CEO、前微软Bungie游戏工作室技术负责人'],
        enDesc: [''],
        picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/wangxi.jpg',
        Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/wangxi_s.jpg'
    },
    {
        id: '',
        name: '吴晓毛',
        enName: '',
        desc: ['德国GirtWorld创始人及CEO，前Crytek 法兰克福项目总监及技术总监'],
        enDesc: [''],
        picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/wuxiaomao.jpg',
        Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/wuxiaomao_s.jpg'
    },
    {
        id: '',
        name: '于洲',
        enName: '',
        desc: ['追光动画联合创始人、《小门神》、《阿唐奇遇》、《猫与桃花源》总制片'],
        enDesc: [''],
        picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/yuzhou.jpg',
        Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/yuzhou_s.jpg'
    },
    {
        id: '',
        name: '二师兄',
        enName: '',
        desc: ['黑商会创始人，独立策展人，“博物MUSEUM","鸦之巢”“惊奇世界”品牌运营总监'],
        enDesc: [''],
        picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/ershixiong.jpg',
        Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/ershixiong_s.jpg'
    },
    {
        id: '',
        name: '章扬',
        enName: '',
        desc: ['GK电子竞技俱乐部创始人，人人体育创始人'],
        enDesc: [''],
        picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/zhangyang.jpg',
        Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/zhangyang_s.jpg'
    },
    {
        id: '',
        name: '陈柏言',
        enName: '',
        desc: ['柏言映画创始人及CEO、漫画家、设计师及动画制作人'],
        enDesc: [''],
        picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/chenboyan.jpg',
        Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/zhangyang_s.jpg'
    }
];
// 未来空间
var spaceList = [
    {
        id: '',
        name: '毛大庆',
        enName: '',
        desc: ['优客工场创始人、董事长'],
        enDesc: [''],
        picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/maodaqing.jpg',
        Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/maodaqing_s.jpg'
    },
    {
        id: '',
        name: '马岩松',
        enName: '',
        desc: ['MAD建筑设计事务所创始人、主持建筑师'],
        enDesc: [''],
        picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/mayansong.jpg',
        Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/mayansong_s.jpg'
    },
    {
        id: '',
        name: '青山周平',
        enName: '',
        desc: ['B.L.U.E建筑设计事务所创始合伙人、主持建筑师'],
        enDesc: [''],
        picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/qingshanzhouping.jpg',
        Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/qingshanzhouping_s.jpg'
    },
    {
        id: '',
        name: '朱胜萱',
        enName: '',
        desc: ['上海世博园区景观工程总顾问、乡伴文旅创始人'],
        enDesc: [''],
        picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/zhushengxuan.jpg',
        Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/zhushengxuan_s.jpg'
    },
    {
        id: '',
        name: '张蓓',
        enName: '',
        desc: ['象外文化董事长、「十里芳菲」度假服务品牌创始人、「花间堂」酒店及度假村品牌创始人'],
        enDesc: [''],
        picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/zhangbei.jpg',
        Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/zhangbei_s.jpg'
    }

];
// 未来商业
var businessList = [
    {
        id: '',
        name: 'Amilcar Chavarria',
        enName: '',
        desc: ['金融科技公司和社群创始人，贝莱德公司前主管'],
        enDesc: [''],
        picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/AmilcarChavarria.jpg',
        Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/AmilcarChavarria_s.jpg'
    },
    {
        id: '',
        name: '林俊廷',
        enName: '',
        desc: ['新媒体艺术家'],
        enDesc: [''],
        picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/linjunting.jpg',
        Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/linjunting_s.jpg'
    },
    {
        id: '',
        name: '张弓',
        enName: '',
        desc: ['北京佳格天地科技有限公司创始人&CEO'],
        enDesc: [''],
        picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/zhanggong.jpg',
        Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/zhanggong_s.jpg'
    },
    {
        id: '',
        name: '谷峰',
        enName: '',
        desc: ['爱驰汽车联合创始人兼首席执行官'],
        enDesc: [''],
        picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/gufeng.jpg',
        Thumbnail: ''
    }
];
// 未来的我
var humanList = [
    {
        id: '',
        name: 'Amir Asor（拟邀）',
        enName: '',
        desc: ['Young Engineers 创始人及CEO'],
        enDesc: [''],
        picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/AmirAsor.jpg',
        Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/AmirAsor_s.jpg'
    },
    {
        id: '',
        name: '张睿',
        enName: '',
        desc: ['连尚网络首席运营官'],
        enDesc: [''],
        picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/zhangrui.jpg',
        Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/zhangrui_s.jpg'
    },
    {
        id: '',
        name: ' 邝向荣',
        enName: '',
        desc: ['英国皇家建筑师学会会士、“中式软翼帆”发明者'],
        enDesc: [''],
        picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/qixiangrong.jpg',
        Thumbnail: ''
    }
];

var reviewGuests = {
    index: 1,
    len: 6,
    1: [
        {
            id: '01',
            name: '《未来简史》作者 尤瓦尔·赫拉利',
            img: 'src/dist/image/guest-01.jpg'
        },
        {
            id: '02',
            name: '场景实验室创始人 吴声',
            img: 'src/dist/image/guest-02.jpg'
        }
    ],
    2: [
        {
            id: '03',
            name: '康奈尔大学计算机系教授 John Hopcroft',
            img: 'src/dist/image/guest-03.jpg'
        },
        {
            id: '04',
            name: '红杉资本中国基金专家合伙人 车品觉',
            img: 'src/dist/image/guest-04.jpg'
        }],
    3: [
        {
            id: '05',
            name: '启明创投主管合伙人 甘建平',
            img: 'src/dist/image/guest-05.jpg'
        },
        {
            id: '06',
            name: '音乐艺术家 朱哲琴',
            img: 'src/dist/image/guest-06.jpg'
        }
    ],
    4: [
        {
            id: '07',
            name: '佳士得中国区主席 蔡金青',
            img: 'src/dist/image/guest-07.jpg'
        },
        {
            id: '08',
            name: '学者作家 李天飞',
            img: 'src/dist/image/guest-08.jpg'
        }
    ],
    5: [
        {
            id: '09',
            name: '华大基因董事长 汪建',
            img: 'src/dist/image/guest-09.jpg'
        },
        {
            id: '10',
            name: '《我·世界》作者 光子',
            img: 'src/dist/image/guest-10.jpg'
        }
    ],
    6: [
        {
            id: '11',
            name: '润米咨询董事长 刘润',
            img: 'src/dist/image/guest-11.jpg'
        },
        {
            id: '12',
            name: '西湖大学副校长，前耶鲁大学遗传学系副主任 许田',
            img: 'src/dist/image/guest-12.jpg'
        }
    ]

};

$(document).ready(function () {
    if (isInWechat) {
        shareInit({});
    }
    insertGuest('#intelligent_content', intelligentList);
    insertGuest('#life_content', lifeList);
    insertGuest('#city_content', cityList);
    insertGuest('#explore_content', exploreList);
    insertGuest('#recreation_content', recreationList);
    insertGuest('#space_content', spaceList);
    insertGuest('#business_content', businessList);
    insertGuest('#me_content', humanList);
    insertReviewGuest(reviewGuests[1], 1, 6);
});

$("#menu_control").on("click", function () {
    if (!MENUE_OPEN) {
        MENUE_OPEN = true;
        BODY.css({'overflow': 'hidden'});
        MENUE_BODY.show();
    } else {
        if (MENUE_OPEN) {
            MENUE_OPEN = false;
            BODY.css({'overflow': 'auto'});
            MENUE_BODY.hide();
        }
    }
});


$(document).on("scroll", function (e) {
    var top = $(this).scrollTop();
    if (top > 100) {
        HEADER.css('background-color', 'rgba(0,0,0,1)');
    } else {
        HEADER.css('background-color', 'rgba(0,0,0,0)');
    }
});

function insertGuest(toID, data) {
    var html = '<div class="guest-content">';
    $.each(data, function (i, item) {
        html += '<div class="guest-item">' +
            '<div class="cover"><img src="' + item.picture + '"></div>' +
            '<h4>' + item.name + '</h4>' +
            '<p>' + item.desc[0] + '</p>' +
            '</div>';
    });
    html += '</div>';
    $(toID).html(html);
}

function insertReviewGuest(data, index, len) {
    var html = '<div class="guest"><button class="guest-header">嘉宾阵容</button>' +
        '<div class="cover gray">' +
        '<img src="' + data[0].img + '"/>' +
        '<div class="no">' + data[0].id + '</div>' +
        '</div>' +
        '<p class="guest-desc">' + data[0].name + '</p></div>';

    html +=
        '<div class="guest">' +
        '<div class="cover gray">' +
        '<img src="' + data[1].img + '"/>' +
        '<div class="no">' + data[1].id + '</div>' +
        '</div>' +
        '<p class="guest-desc">' + data[1].name + '</p>' +
        '';
    html += '<div class="button btn-icon btn margin"data-type="review-guest">' +
        '<span data-c-p="03" class="icon icon-arrow-l"></span><span data-c-p="04" class="icon icon-arrow-r"></span></div>';

    html += '</div>';
    $("#review_content").html(html);
}

$(document).on('click', function (event) {
    var _this = event.target;
    var cp = $(_this).attr("data-c-p");
    if (cp === '03' && reviewGuests.index > 1) {
        reviewGuests.index -= 1;
        insertReviewGuest(reviewGuests[reviewGuests.index], reviewGuests.index, reviewGuests.len);
    }
    if (cp === '04' && reviewGuests.index < reviewGuests.len) {
        reviewGuests.index += 1;
        insertReviewGuest(reviewGuests[reviewGuests.index], reviewGuests.index, reviewGuests.len);
    }
});

function shareInit(itemData) {
    if (!itemData.ShareTitle) {
        itemData.ShareTitle = "2018造就FUTURE年度大会";
    }
    if (!itemData.ShareIntro) {
        itemData.ShareIntro = "蔡康永、马岩松...邀你踏入奇思妙想新纪元！";
    }
    if (!itemData.ShareImg) {
        itemData.ShareImg = 'https://og9s6vxbs.qnssl.com/zaojiu-logo.jpg';
    }
    if (!itemData.ShareUrl) {
        itemData.ShareUrl = location.href;
    }

    return $.ajax({
        url: G_wechatUrl,
        type: 'post',
        async: true,
        data: null,
        timeout: 5000,
        dataType: 'json',
        success: function (result) {
            if (result) {
                let configInfo = result;
                wx.config({
                    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: configInfo.appId, // 必填，公众号的唯一标识
                    timestamp: configInfo.timestamp, // 必填，生成签名的时间戳
                    nonceStr: configInfo.nonceStr, // 必填，a生成签名的随机串
                    signature: configInfo.signature, // 必填，签名，见附录1
                    jsApiList: [
                        'checkJsApi',
                        'onMenuShareQQ',
                        'onMenuShareQQ',
                        'onMenuShareTimeline',
                        'onMenuShareWeibo',
                        'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                });

                wx.ready(function () {
                    console.log('wx success');
                    wx.onMenuShareAppMessage({
                        title: '2018造就FUTURE年度大会',
                        desc: '蔡康永、马岩松...邀你踏入奇思妙想新纪元！',
                        link: itemData.ShareUrl,
                        imgUrl: 'https://og9s6vxbs.qnssl.com/zaojiu-logo.jpg',
                        trigger: function (res) {
                            //alert('用户点击发送给朋友');
                        },
                        success: function (res) {
                            //alert('已分享');
                        },
                        cancel: function (res) {
                            // alert('已取消');
                        },
                        fail: function (res) {
                            // alert(JSON.stringify(res));
                        }
                    });
                    // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
                    wx.onMenuShareQQ({
                        title: itemData.ShareTitle,
                        desc: itemData.ShareIntro,
                        link: itemData.ShareUrl,
                        imgUrl: itemData.ShareImg,
                        success: function () {},
                        cancel: function () {}
                    });
                    wx.onMenuShareWeibo({
                        title: itemData.ShareTitle,
                        desc: itemData.ShareIntro,
                        link: itemData.ShareUrl,
                        imgUrl: itemData.ShareImg,
                        success: function () {},
                        cancel: function () {}
                    });
                    wx.onMenuShareTimeline({
                        title: itemData.ShareTitle,
                        link: itemData.ShareUrl,
                        imgUrl: itemData.ShareImg,
                        success: function () {},
                        cancel: function () {}
                    });
                });
                wx.error(function (err) {
                    console.log('wx err:', err);
                });
            }
        },
        error: function (err) {
            console.log(err);
        }
    })
}