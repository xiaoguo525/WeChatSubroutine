var util = require('../../utils/util.js');
Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context,用于实现对音乐的控制
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  data: {
    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46' ,
    playIcon:'../../images/music/play.png',
    currentTime:'00:00',
    allTime:'00:00',
    max:0,
    value:0,
    isPlay:false,
    imgs: ['../../images/zxy.jpg', '../../images/zxy1.jpg', '../../images/zxy2.jpg'],
    autoplay: true,
    interval: 4000,
    duration: 1500,
    circular:true,
  },
  play:function(){
  var isPlay=this.data.isPlay,
  isPlay =! isPlay;
  if (isPlay){
      this.setData({
        playIcon: '../../images/music/pause.png',
        isPlay:true,
      });
      this.audioCtx.play();
  }else{
      this.setData({
        playIcon: '../../images/music/play.png',
        isPlay: false,
      });
      this.audioCtx.pause();
  }
   
  },
  changing:function(e){
    var value=e.detail.value;
    this.audioCtx.seek(value)
  },
  update:function(e){
    this.setData({
      currentTime: util.timeModel(parseInt(e.detail.currentTime)),
      allTime: util.timeModel(parseInt(e.detail.duration)),
      max: parseInt(e.detail.duration),
      value: parseInt(e.detail.currentTime)
    });
    
  },

  next:function(){
    var src=this.data.src;
    src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46';
    
    this.setData({
      src:src,
      currentTime: '00:00',
      allTime: '00:00',
      max: 0,
      value: 0,
      isPlay: true,
     
    })
    this.audioCtx.seek(0)
    setTimeout(()=>{
      this.audioCtx.play();
    },1000)
  },
  prev:function(){
    var src = this.data.src;
    src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46';

    this.setData({
      src: src,
      currentTime: '00:00',
      allTime: '00:00',
      max: 0,
      value: 0,
      isPlay: true,
    })
    this.audioCtx.seek(0)
    setTimeout(() => {
      this.audioCtx.play();
    }, 1000)
  }
})