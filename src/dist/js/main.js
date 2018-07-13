$(document).ready(function () {
    insertGuest('#intelligent_content', intelligentList, 'intelligent');
    insertGuest('#life_content', lifeList, 'life');
    insertGuest('#city_content', cityList, 'city');
    insertGuest('#explore_content', exploreList, 'explore');
    insertGuest('#recreation_content', recreationList, 'recreation');
    insertGuest('#space_content', spaceList, 'space');
    insertGuest('#business_content', businessList, 'business');
    insertGuest('#me_content', humanList, 'me');
    insertReviewGuest(reviewGuests[1], 1, 3);
});

var MENUE_BODY = $("#menu_body");
var MENUE_OPEN = false;
var HEADER = $("#header");

// 未来智能
var intelligentList = {
    len: 2,
    index: 1,
    1: [
        {
            id: '',
            name: 'Dr. Bibhrajit Halder',
            enName: 'Dr. Bibhrajit Halder',
            desc: ['自动驾驶软件公司创始人，范德堡大学机械工程系顾问，前苹果公司自动驾驶项目高级架构师'],
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
            name: '熊明磊',
            enName: '',
            desc: ['Robosea CEO'],
            enDesc: [''],
            picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/xiongminglei.jpg',
            Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/xiongminglei_s.jpg'
        },
        {
            id: '',
            name: '简仁贤（拟邀）',
            enName: '',
            desc: ['竹间智能创始人及CEO'],
            enDesc: [''],
            picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/jianrenxian.jpg',
            Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/jianrenxian_s.jpg'
        }
    ],
    2: [
        {
            id: '',
            name:
                '张经纬',
            enName:
                '',
            desc:
                ['上海博物馆馆员'],
            enDesc:
                [''],
            picture:
                'https://og9s6vxbs.qnssl.com/futrue/guests/zhangjingwei.jpg',
            Thumbnail:
                'https://og9s6vxbs.qnssl.com/futrue/guests/zhangjingwei_s.jpg'
        }
    ]
};
// 未来生命
var lifeList = {
    index: 1,
    len: 2,
    1: [
        {
            id: '',
            name: 'Dr. Susan Jenkins',
            enName: '',
            desc: ['加州伯克利大学创新基因研究院院长'],
            enDesc: [''],
            picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/Dr.%20SusanJenkins.jpg',
            Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/Dr.%20SusanJenkins_s.jpg'
        },
        {
            id: '',
            name: '徐讯',
            enName: '',
            desc: ['华大集团CEO,深圳华大生命科学研究院院长，国家基因库执行主任'],
            enDesc: [''],
            picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/xuxun.jpg',
            Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/xuxun_s.jpg'
        },
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
        }
    ],
    2: [
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
        }
    ]
};
// 未来城市
var cityList = {
    index: 1,
    len: 2,
    1: [
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
        }
    ],
    2: [
        {
            id: '',
            name: '虞晶怡',
            enName: '',
            desc: ['上海科技大学信息科学与技术学院教授，美国特拉华大学计算机与信息科学系终身教授，叠境数字科技（上海）有限公司创始人'],
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
    ]
};
// 未来探索
var exploreList = {
    index: 1,
    len: 2,
    1: [
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
    ],
    2: [
        {
            id: '',
            name: '叶聪',
            enName: '',
            desc: ['“蛟龙号”深海载人潜水器潜航员，“7000米载人潜水器”总布置主任设计师，中国唯一载人深潜器潜航员兼潜航员教练'],
            enDesc: [''],
            picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/yecong.jpg',
            Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/yecong_s.jpg'
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
    ]
};
// 未来娱乐
var recreationList = {
    index: 1,
    len: 2,
    1: [
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
            desc: ['网易不鸣工作室创始人兼CEO，前微软Bungie游戏工作室技术负责人'],
            enDesc: [''],
            picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/wangxi.jpg',
            Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/wangxi_s.jpg'
        },
        {
            id: '',
            name: '吴晓毛',
            enName: '',
            desc: ['德国Girtworld创始人及CEO，前Crytek 法兰克福项目总监及技术总监'],
            enDesc: [''],
            picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/wuxiaomao.jpg',
            Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/wuxiaomao_s.jpg'
        }
    ],
    2: [
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
            desc: ['GK电子竞技俱乐部创始人，人人体育创始人，柑客电竞创始人'],
            enDesc: [''],
            picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/zhangyang.jpg',
            Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/zhangyang_s.jpg'
        }]
};
// 未来空间
var spaceList = {
    index: 1,
    len: 2,
    1: [
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
            desc: ['BLUE建筑设计事务所创始合伙人、主持建筑师'],
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
        }

    ],
    2: [
        {
            id: '',
            name: '张蓓',
            enName: '',
            desc: ['“十里芳菲”“花间堂”创始人&首席设计师'],
            enDesc: [''],
            picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/zhangbei.jpg',
            Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/zhangbei_s.jpg'
        }]
};
// 未来商业
var businessList = {
    index: 1,
    len: 1,
    1: [
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
        }
    ]
};
// 未来的我
var humanList = {
    index: 1,
    len: 1,
    1: [
        {
            id: '',
            name: 'Pernille Tranberg（拟邀）',
            enName: '',
            desc: ['Pernille Tranberg  DataEthicsConsulting.com创办人，数据道德领域咨询专家'],
            enDesc: [''],
            picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/PernilleTranberg.jpg',
            Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/PernilleTranberg_s.jpg'
        },
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
            name: '王志鸥',
            enName: '',
            desc: ['Blackbow黑弓创始人'],
            enDesc: [''],
            picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/wangzhiou.jpg',
            Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/wangzhiou_s.jpg'
        },
        {
            id: '',
            name: '张睿',
            enName: '',
            desc: ['连尚网络首席运营官'],
            enDesc: [''],
            picture: 'https://og9s6vxbs.qnssl.com/futrue/guests/zhangrui.jpg',
            Thumbnail: 'https://og9s6vxbs.qnssl.com/futrue/guests/zhangrui_s.jpg'
        }
    ]
};

var reviewGuests = {
    index: 1,
    len: 3,
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
        },
        {
            id: '03',
            name: '康奈尔大学计算机系教授 John Hopcroft',
            img: 'src/dist/image/guest-03.jpg'
        },
        {
            id: '04',
            name: '红杉资本中国基金专家合伙人 车品觉',
            img: 'src/dist/image/guest-04.jpg'
        }
    ],
    2: [
        {
            id: '05',
            name: '启明创投主管合伙人 甘建平',
            img: 'src/dist/image/guest-05.jpg'
        },
        {
            id: '06',
            name: '音乐艺术家 朱哲琴',
            img: 'src/dist/image/guest-06.jpg'
        },
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
    3: [
        {
            id: '09',
            name: '华大基因董事长 汪建',
            img: 'src/dist/image/guest-09.jpg'
        },
        {
            id: '10',
            name: '《我·世界》作者 光子',
            img: 'src/dist/image/guest-10.jpg'
        },
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

$("#menu_control")
    .on("mouseenter", function (event) {
        if (!MENUE_OPEN) {
            MENUE_OPEN = true;
            setTimeout(function () {
                MENUE_BODY.show();
            }, 10);
        }
    })
    .on("mouseleave", function () {
        if (MENUE_OPEN) {
            MENUE_OPEN = false;
            MENUE_BODY.hide();
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

function insertGuest(toID, data, type) {
    var html = '<div class="control">';
    if (data.index > 1) {
        html += '<div class="button pre icon" data-c-p="00" data-type="' + type + '"></div>';
    }
    html += '</div><div class="guest-content">';
    $.each(data[data.index], function (i, item) {
        html += '<div class="guest-item">' +
            '<div class="cover"><img src="' + item.picture + '"></div>' +
            '<h4>' + item.name + '</h4>' +
            '<p>' + item.desc[0] + '</p>' +
            '</div>';
    });
    html += '</div><div class="control own">';
    if (data.index < data.len) {
        html += '<div class="button next icon" data-c-p="01" data-type="' + type + '"></div>';
    }
    html += '</div>';
    $(toID).html(html);
}

function insertReviewGuest(data, index, len) {
    var html = '<div class="guest"><div class="guest-header">嘉宾阵容</div>' +
        '<div class="cover gray">' +
        '<img src="' + data[0].img + '"/>' +
        '<div class="no">' + data[0].id + '</div>' +
        '</div>' +
        '<p class="guest-desc">' + data[0].name + '</p>';
    if (index > 1) {
        html +=
            '<div class="button btn-icon  btn" data-c-p="03" data-type="review-guest"><span class="icon icon-arrow-l"></span>' +
            '<span>上一页</span></div>';
    }

    html +=
        '</div>' +
        '<div class="guest">' +
        '<div class="cover gray">' +
        '<img src="' + data[1].img + '"/>' +
        '<div class="no">' + data[1].id + '</div>' +
        '</div>' +
        '<p class="guest-desc">' + data[1].name + '</p>' +
        '</div>' +
        '<div class="guest">' +
        '<div class="cover gray">' +
        '<img src="' + data[2].img + '"/>' +
        '<div class="no">' + data[2].id + '</div>' +
        '</div>' +
        '<p class="guest-desc">' + data[2].name +
        '</p>' +
        '</div>' +
        '<div class="guest">' +
        '<div class="cover gray">' +
        '<img src="' + data[3].img + '"/>' +
        '<div class="no">' + data[3].id + '</div>' +
        '</div>' +
        '<p class="guest-desc">' + data[3].name + '</p>';
    if (index < len) {
        html += '<div class="button btn-icon btn margin" data-c-p="04" data-type="review-guest">' +
            '<span>下一页</span><span class="icon icon-arrow-r"></span></div>';
    }
    html += '</div>';
    $("#review_content").html(html);
}

$(".pre").on('click', function (event) {
    var type = $(this).attr("data-type");
    changeGuest(false, type);
});

$('.next').on('click', function () {
    var type = $(this).attr("data-type");
    changeGuest(true, type);
});

$(document).on('click', function (event) {
    var _this = event.target;
    var cp = $(_this).attr("data-c-p");
    if (cp === '00') {
        var type = $(_this).attr("data-type");
        changeGuest(false, type);
    }
    if (cp === '01') {
        var type = $(_this).attr("data-type");
        changeGuest(true, type);
    }
    if (cp === '03') {
        reviewGuests.index -= 1;
        insertReviewGuest(reviewGuests[reviewGuests.index], reviewGuests.index, reviewGuests.len);
    }
    if (cp === '04') {
        reviewGuests.index += 1;
        insertReviewGuest(reviewGuests[reviewGuests.index], reviewGuests.index, reviewGuests.len);
    }
});

function changeGuest(directionTop, type) {
    var data = {};
    switch (type) {
        case 'intelligent':
            data = intelligentList;
            break;
        case 'life':
            data = lifeList;
            break;
        case 'city':
            data = cityList;
            break;
        case 'explore':
            data = exploreList;
            break;
        case 'recreation':
            data = recreationList;
            break;
        case 'space':
            data = spaceList;
            break;
        case 'business':
            data = businessList;
            break;
        case 'me':
            data = humanList;
            break;
    }
    if (directionTop) {
        data.index += 1;
    } else {
        data.index -= 1;
    }
    insertGuest('#' + type + '_content', data, type);
}