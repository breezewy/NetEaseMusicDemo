


var APP_ID = '3r2KUtIseHz268BknDLjaINQ-gzGzoHsz';
var APP_KEY = '5vvYofXI1LSht793IQHP3e1E';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

var SongObject = AV.Object.extend('SongObject');  //选择表名
var songObject = new SongObject();   //生成一条数据
// songObject.save({
//     name: '光年之外',    //数据里面的内容
//     singer:'邓紫棋',
//     url:'//neteasemusic-1258247871.cos.ap-shanghai.myqcloud.com/url/1606%252F426f%252F10a6%252Fa01cace34f2df73c384bbcfe3e30b827.mp3',
//     cover:'//neteasemusic-1258247871.cos.ap-shanghai.myqcloud.com/cover/gnzw.jpg',
//     bg:'//neteasemusic-1258247871.cos.ap-shanghai.myqcloud.com/cover/gnzwM.jpg'
// }).then(function (object) {
//     alert('保存成功');
// })
// songObject.save({
//     name: '梅香如故',    //数据里面的内容
//     singer: '毛不易',
//     url: '//neteasemusic-1258247871.cos.ap-shanghai.myqcloud.com/url/3e3b%252Fbd94%252F717d%252F4613fcecc16cf94c8d2910cc8b72d0eb.mp3',
//     cover: '//neteasemusic-1258247871.cos.ap-shanghai.myqcloud.com/cover/mxrg.jpg ',
//     bg: '//neteasemusic-1258247871.cos.ap-shanghai.myqcloud.com/cover/mxrgM.jpg'
// }).then(function (object) {
//     alert('保存成功');
// })
// songObject.save({
//     name: '大鱼',    //数据里面的内容
//     singer: '周深',
//     url: '//neteasemusic-1258247871.cos.ap-shanghai.myqcloud.com/url/a5e0%252F56eb%252Fc6f0%252F06e580cf1f74b27c59cb61451c2b59ef.mp3 ',
//     cover: '//neteasemusic-1258247871.cos.ap-shanghai.myqcloud.com/cover/dy.jpg',
//     bg: '//neteasemusic-1258247871.cos.ap-shanghai.myqcloud.com/cover/dyM.jpg'
// }).then(function (object) {
//     alert('保存成功');
// })
// songObject.save({
//     name: '起风了',    //数据里面的内容
//     singer: '买辣椒也用券',
//     url: '//neteasemusic-1258247871.cos.ap-shanghai.myqcloud.com/url/0758%252F550f%252F545f%252F028d3b9421be8425d60dc57735cf6ebc%20(1).mp3',
//     cover: '//neteasemusic-1258247871.cos.ap-shanghai.myqcloud.com/cover/qfl.jpg',
//     bg: '//neteasemusic-1258247871.cos.ap-shanghai.myqcloud.com/cover/qflM.jpg.jpg'
// }).then(function (object) {
//     alert('保存成功');
// })
// songObject.save({
//     name: '演员',    //数据里面的内容
//     singer: '薛之谦',
//     url: '//neteasemusic-1258247871.cos.ap-shanghai.myqcloud.com/url/0dd9%252Fd28b%252Fe089%252Ffcbab41f4900212553c5b610c617da2a%20(2).mp3',
//     cover: '//neteasemusic-1258247871.cos.ap-shanghai.myqcloud.com/cover/whxznjgn.jpg',
//     bg: '//neteasemusic-1258247871.cos.ap-shanghai.myqcloud.com/cover/whxznjgnM.jpg'
// }).then(function (object) {
//     alert('保存成功');
// })
// songObject.save({
//     name: '认真的雪',    //数据里面的内容
//     singer: '薛之谦',
//     url: '//neteasemusic-1258247871.cos.ap-shanghai.myqcloud.com/url/f7da%252F95a0%252F117a%252F5d9f9dc64289d7f292fd3404d7b111c0.mp3',
//     cover:'https://neteasemusic-1258247871.cos.ap-shanghai.myqcloud.com/cover/rzdx.jpg',
//     bg:'//neteasemusic-1258247871.cos.ap-shanghai.myqcloud.com/cover/rzdxM.jpg'
// }).then(function (object) {
//     alert('保存成功');
// })
// songObject.save({
//     name: '想把我唱给你听',    //数据里面的内容
//     singer: '老狼/王婧',
//     url: '//neteasemusic-1258247871.cos.ap-shanghai.myqcloud.com/url/6ffa%252Fadcb%252F68d0%252F522abbbbdf1359c7f4e60bfc5fe7e722%20(1).mp3',
//     cover: '//neteasemusic-1258247871.cos.ap-shanghai.myqcloud.com/cover/xbwcgnt.jpg',
//     bg: '//neteasemusic-1258247871.cos.ap-shanghai.myqcloud.com/cover/xbwcgntM.jpg'
// }).then(function (object) {
//     alert('保存成功');
// })
// songObject.save({
//     name: '贝加尔湖畔',    //数据里面的内容
//     singer: '李健',
//     url: '//neteasemusic-1258247871.cos.ap-shanghai.myqcloud.com/url/f71ec9f18617ba142eb7ef8afabbe216%20(1).mp3 ',
//     cover:'//neteasemusic-1258247871.cos.ap-shanghai.myqcloud.com/cover/bjehp.jpg',
//     bg:'//neteasemusic-1258247871.cos.ap-shanghai.myqcloud.com/cover/bjehpM.jpg'
// }).then(function (object) {
//     alert('保存成功');
// })
// songObject.save({
//     name: '如果爱下去',    //数据里面的内容
//     singer: '张靓颖',
//     url: '//neteasemusic-1258247871.cos.ap-shanghai.myqcloud.com/url/194d%252F0103%252Fd972%252F7bb0bb387bd600ce5ee50a124071afaf%20(1).mp3',
//     cover: '//neteasemusic-1258247871.cos.ap-shanghai.myqcloud.com/cover/rgaxq.jpg',
//     bg: '//neteasemusic-1258247871.cos.ap-shanghai.myqcloud.com/cover/rgaxqM.jpg'
// }).then(function (object) {
//     alert('保存成功');
// })
// songObject.save({
//     name: '没你不行',    //数据里面的内容
//     singer: '羽泉',
//     url: '//neteasemusic-1258247871.cos.ap-shanghai.myqcloud.com/url/8f99c8bb45022c7ee02c8ebc8af52bdc%20(1).mp3',
//     cover: '//neteasemusic-1258247871.cos.ap-shanghai.myqcloud.com/cover/mnbx.jpg',
//     bg: '//neteasemusic-1258247871.cos.ap-shanghai.myqcloud.com/cover/mnbxM.jpg'
// }).then(function (object) {
//     alert('保存成功');
// })
var query = new AV.Query('SongObject');
query.find().then(function (results) {
    $('#loading').remove();
    for (var i = 0; i < results.length; i++) {
        let song = results[i].attributes;
        let $li = `<li>
                    <h3>${song.name}</h3>
                    <p>
                        <svg class="icon icon-sq" aria-hidden="true">
                            <use xlink:href="#icon-sq"></use>
                        </svg>
                        ${song.singer}
                    </p>
                    <a class="playButton" href="#">
                        <svg class="icon icon-play" aria-hidden="true" >
                            <use xlink: href="#icon-play-circled"></use>
                        </svg>
                    </a>
                </li >`
        $('.songs .list').append($li);
    }
}, function (error) {
    console.log('获取歌曲失败');
});