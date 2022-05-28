// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图
swiperlist:[{image:'https://1.s140i.faiusr.com/2/AIwBCAAQAhgAIOj669UFKKDpltMDMIAPOKgK.jpg',
id:1
},
{image:'https://1.s140i.faiusr.com/2/AIwBCAAQAhgAIOf669UFKK7GzP0BMIAPOIEK.jpg',
id:2},
{image:'https://1.s140i.faiusr.com/2/AIwBCAAQAhgAIOj669UFKP_2td8GMIAPOP8J.jpg',
id:3}
],

//四个模块
fourlist:[
{image:'https://20006355.s61i.faiusr.com/4/AD0I04vFCRAEGAAg9M666QUo3OjnwAYwbjiNAQ.png',
id:1,
text:'五月热读好书'
},
{image:'https://20006355.s61i.faiusr.com/4/AD0I04vFCRAEGAAg9M666QUo1vSY8gcwbjiSAQ.png',
id:2,
text:'文学精品'
},
{image:'https://20006355.s61i.faiusr.com/4/AD0I04vFCRAEGAAg9M666QUo7ayY8AIwbDiQAQ.png',
id:3,
text:'新锐作家'
},
{image:'https://20006355.s61i.faiusr.com/4/AD0I04vFCRAEGAAg9M666QUoyPPhrQEwcziKAQ.png',
id:4,
text:'年度畅销'
}
],
tesebook:[
{
image:'https://20006355.s61i.faiusr.com/2/AD0I04vFCRACGAAgwuq66QUo_qf8RjCgBjigBg.jpg',
id:1,
text:'时间简史 '
},
{
  image:'https://20006355.s61i.faiusr.com/2/AD0I04vFCRACGAAgxOq66QUo_P2G-gIwoAY4oAY.jpg',
  id:2,
  text:'有限与无限的游戏'
  },
  {
    image:'https://20006355.s61i.faiusr.com/2/AD0I04vFCRACGAAg4PC66QUopNn1xwUwoAY4oAY.jpg',
    id:3,
    text:'温迪嬷嬷...'
    }
],
list:[],
//
alist:[
  { 
    image:'https://img2.doubanio.com/view/subject/s/public/s32266692.jpg',
    id:1,
    name:'人生海海'
  },
  { 
    image:'https://img2.doubanio.com/view/subject/s/public/s33974633.jpg',
    id:2,
    name:'活着'
  },
  { 
    image:'https://img1.doubanio.com/view/subject/s/public/s29237648.jpg',
    id:3,
    name:'被讨厌的勇气'
  },
  { 
    image:'https://img9.doubanio.com/view/subject/s/public/s33921954.jpg',
    id:4,
    name:'浮木'
  },
  { 
    image:'https://img1.doubanio.com/view/subject/s/public/s34086258.jpg',
    id:5,
    name:'生死疲劳'
  },
  { 
    image:'https://img9.doubanio.com/view/subject/s/public/s29179365.jpg',
    id:6,
    name:'长夜难明'
  }
],
//
blist:[
  { 
    image:'https://img2.doubanio.com/view/subject/s/public/s34157273.jpg',
    id:1,
    name:'致渐行渐远的朋友'
  },
  { 
    image:'https://img1.doubanio.com/view/subject/s/public/s34134347.jpg',
    id:2,
    name:'创伤之前...'
  },
  { 
    image:'https://img2.doubanio.com/view/subject/s/public/s34199321.jpg',
    id:3,
    name:'自深深处'
  },
  { 
    image:'https://img9.doubanio.com/view/subject/s/public/s34125105.jpg',
    id:4,
    name:'货币幻觉'
  },
  { 
    image:'https://img2.doubanio.com/view/subject/s/public/s34214463.jpg',
    id:5,
    name:'舒吉·贝恩'
  },
  { 
    image:'https://img9.doubanio.com/view/subject/s/public/s34218104.jpg',
    id:6,
    name:'我和妈妈...'
  }
],
//
clist:[
  { 
    image:'https://img9.doubanio.com/view/subject/s/public/s33821754.jpg',
    id:1,
    name:'克拉拉与太阳'
  },
  { 
    image:'https://img1.doubanio.com/view/subject/s/public/s33880929.jpg',
    id:2,
    name:'字母表谜案'
  },
  { 
    image:'https://img2.doubanio.com/view/subject/s/public/s33984963.jpg',
    id:3,
    name:'从零开始的女性主义'
  },
  { 
    image:'https://img1.doubanio.com/view/subject/s/public/s33956867.jpg',
    id:4,
    name:'置身事内'
  },
  { 
    image:'https://img2.doubanio.com/view/subject/s/public/s33944153.jpg',
    id:5,
    name:'也许你该找个人聊聊'
  },
  { 
    image:'https://img2.doubanio.com/view/subject/s/public/s33792562.jpg',
    id:6,
    name:'下沉年代'
  }
],
xiangq:'/image/icon/更多.png',


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