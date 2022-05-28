// pages/sort/sort.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    //
    alist:[
      { 
        image:'https://img9.doubanio.com/view/subject/s/public/s34126046.jpg',
        id:1,
        name:'只是一首歌 :...',
        intro:'作者聚焦并追踪北宋时期，词如何从宴饮助兴的表演文本——歌词，历经创作、传唱、抄写、结集诸过程，最终衍变为一种独立的文学体裁，并逐渐取得与诗歌并举的正统地位。...'
      },
      { 
        image:'https://img9.doubanio.com/view/subject/s/public/s34157904.jpg',
        id:2,
        name:'赤壁之戟 : 建安与三国',
        intro:'【编辑推荐】 文学是田晓菲的切入点，在这本书里，田晓菲讨论了三国的重要意象——建安七子、铜雀台、赤壁——在整个文学史中的嬗变。但文学或不是她要讨论的主题，田...'
      },
      { 
        image:'https://img1.doubanio.com/view/subject/s/public/s1070959.jpg',
        id:3,
        name:'红楼梦',
        intro:'《红楼梦》是一部百科全书式的长篇小说。以宝黛爱情悲剧为主线，以四大家族的荣辱兴衰为背景，描绘出18世纪中国封建社会的方方面面，以及封建专制下新兴资本主义民主...'
      },
      { 
        image:'https://img9.doubanio.com/view/subject/s/public/s34150895.jpg',
        id:4,
        name:'唐诗三百年',
        intro:'唐诗是中国古典文学的巅峰，也是中华文明的瑰宝。当代讲习唐诗者众，但深有会心者不多，通过唐诗而会通一个时代者更少。著名古典文学专家黄天骥教授半个多世纪专研古典...'
      },
      { 
        image:'https://img9.doubanio.com/view/subject/s/public/s34198375.jpg',
        id:5,
        name:'尘几录 : 陶渊明与手抄本文化研究',
        intro:'田晓菲学术成名作。 在流动的手抄本世界里云游，探寻读者如何主动参与对“陶渊明”的生产和创造。 只有当我们看到陶渊明是多么深刻地植根于文学和文化传统，我们才能...'
      },
      { 
        image:'https://img1.doubanio.com/view/subject/s/public/s34098359.jpg',
        id:6,
        name:'古文辭類篹',
        intro:'“桐城派”的核心经典，古代文选的范例和高峰，市面唯一完整保留姚鼐圈点评语的版本。 ★ “桐城三祖”之一姚鼐编选的古文选集，桐城一派的核心经典，古代文选的范例...'
      }
    ],
    blist:[
      { 
        image:'https://img1.doubanio.com/view/subject/s/public/s33941998.jpg',
        id:1,
        name:'蛤蟆先生去看心理医生',
        intro:'蛤蟆先生一向爱笑爱闹，如今却一反常态地郁郁寡欢，他一个人躲在屋里，连起床梳洗的力气都没有。朋友们非常担心他，建议他去做心理咨询。在10次心理咨询中，蛤蟆在咨...'
      },
      { 
        image:'https://img2.doubanio.com/view/subject/s/public/s33496233.jpg',
        id:2,
        name:'夜莺与玫瑰',
        intro:'本书为王尔德的经典童话作品集，包括《夜莺与玫瑰》《快乐王子》《好朋友》《了不起的高筒炮》《少年国王》《西班牙公主的生日》《渔夫和灵魂》《星童》《自私的巨人》...'
      },
      { 
        image:'https://img9.doubanio.com/view/subject/s/public/s33717946.jpg',
        id:3,
        name:'月光落在左手上',
        intro:'◎名人推荐 在余秀华的诗里，肉体与灵魂，小我与世界，瞬间与永恒，哲思与情绪，以爆炸般的烈度混合在一起，让你放弃分辨，不管不顾地浮沉在她诗句的洪流中。 ——学...'
      },
      { 
        image:'https://img9.doubanio.com/view/subject/s/public/s33814814.jpg',
        id:4,
        name:'男孩、鼹鼠、狐狸和马',
        intro:'这是一本写给所有人的书。 一个孤单的男孩邂逅了一只刚刚钻出地面的鼹鼠，他们决定一起在荒野里探险。旅途中，他们先是遇到了狐狸，然后遇到了体格更大的伙伴——马。...'
      },
      { 
        image:'https://img2.doubanio.com/view/subject/s/public/s33820282.jpg',
        id:5,
        name:'提琴与坟墓 : 洛尔迦诗选',
        intro:'※继塞万提斯之后最为世界所熟知的西班牙作家加西亚•洛尔迦诗歌精选 ※他是被全世界拥抱的诗人，甜蜜如雪地里一声啜泣 ※莱昂纳德•科恩和帕蒂•史密斯都从他的作品...'
      },
      { 
        image:'https://img1.doubanio.com/view/subject/s/public/s33959398.jpg',
        id:6,
        name:'我将宇宙随身携带：佩索阿诗集 : 佩索阿诗集',
        intro:'★葡萄牙国宝级诗人佩索阿最重要异名 ★阿尔贝托·卡埃罗诗歌全收录！ ★以纯粹的感受把握自然，不思考，是唯一的纯真 【编辑推荐】 阅读卡埃罗是理解佩索阿的重要...'
      }
    ],
    clist:[
      { 
        image:'https://img1.doubanio.com/view/subject/s/public/s34070178.jpg',
        id:1,
        name:'消失的13级台阶',
        intro:'【内容简介】 一对老夫妇惨遭杀害。一切证据都指向树原亮，他却因车祸，恰好丧失了案发前后数小时的记忆…… 死刑执行官南乡携手刚假释出狱的纯一调查，希望替这位丧...'
      },
      { 
        image:'https://img1.doubanio.com/view/subject/s/public/s33317677.jpg',
        id:2,
        name:'克莱因壶',
        intro:'什么时候你开始怀疑这个世界是假的？ . 日本虚拟现实VR题材开山杰作， 超前《盗梦空间》20年！ 传奇推理作家组合冈岛二人预言之书，以超强的技术预见力，30...'
      },
      { 
        image:'https://img1.doubanio.com/view/subject/s/public/s33880929.jpg',
        id:3,
        name:'字母表谜案',
        intro:'一座神秘的公寓，不定期举行推理合战。红茶、曲奇，搭配寒意逼人的谜案，与案件相关的字母似乎是重要线索。一群特殊的房客，联手组成侦探团，秘密追踪警视厅也难以锁定...'
      },
      { 
        image:'https://img2.doubanio.com/view/subject/s/public/s25814002.jpg',
        id:4,
        name:'罗杰疑案 : 阿加莎·克里斯蒂侦探作品集02',
        intro:'金斯艾伯特村里坐落着两座豪宅，“皇家围场”是其中之一，而居住其中的弗拉尔斯太太刚刚过世。 此后不久，她的情人，也就是住在另一所大宅里的罗杰•艾克罗伊德先生便...'
      },
      { 
        image:'https://img9.doubanio.com/view/subject/s/public/s9102105.jpg',
        id:5,
        name:'占星术杀人魔法 : 岛田庄司作品集01',
        intro:'四十年前，一桩占星术连续杀人案件轰动全日本！先是画家梅泽平吉在密室被人重击致死，接着是他早已出嫁的长女在家中被奸杀，最后甚至连与他同住的六个女儿也全部失踪。...'
      },
      { 
        image:'https://img1.doubanio.com/view/subject/s/public/s24514468.jpg',
        id:6,
        name:'白夜行',
        intro:'东野圭吾万千书迷心中的无冕之王 周刊文春推理小说年度BEST10第1名 本格推理小说年度BEST10第2名 《白夜行》是东野圭吾迄今口碑最好的长篇杰作，具备...'
      }
    ]

  },

  getbook(event){
    if(event.target.dataset.dex==='blist')
    {
  this.setData({
   list:this.data.blist
  });}
  else if(event.target.dataset.dex==='clist')
  {
    this.setData({
      list:this.data.clist
     })
  }
  else{
    this.setData({
      list:this.data.alist
    })
  }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
this.setData({
  list:this.data.alist
})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})