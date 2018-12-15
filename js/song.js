// 获取url参数
function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}
let id = getQueryString('id');

let query = new AV.Query('SongObject');


// 根据id获得存储的歌曲数据
query.get(id).then(function (response) {
    // console.log(response);
    let { singer, name, url, bg, cover, lyric } = response.attributes;
    let audio = new Audio();
    audio.src = url;
    audio.play();

    $('.cover').attr('src', cover);
    $('.pageBg').css('background-image', 'url(' + bg + ')');
    $('.lyric h3').text(name + ' - ' + singer);

    $('.iconPause').on('click', function () {
        audio.pause();
        $('.circle').addClass('pause');
    });
    $('.iconPlay').on('click', function () {
        audio.play();
        $('.circle').removeClass('pause');
    })


    // 在split前，应该先把歌词转换为一行一行的，也就是有换行符的，然后再用lyric.split('\n')转换为数组
    let lyricArr = lyric.split('\n');
    let array = [];


    // 遍历每一行
    for (var i = 0; i < lyricArr.length; i++) {

        let reg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
        let timeArr = lyricArr[i].match(reg) || [];
        let lyricStr = lyricArr[i].replace(reg, '');

        for (var k = 0; k < timeArr.length; k++) {
            let t = timeArr[k];
            let min = Number(String(t.match(/\[\d*/i)).slice(1));
            let sec = Number(String(t.match(/\:\d*/i)).slice(1));
            let times = min * 60 + sec;
            // 把获得到秒数和对应的歌词，放入输入数组内
            array.push({
                time: times,
                lyric: lyricStr
            })
        }
    }

    // 遍历歌词数组，生成DOM，加入页面
    array.forEach(function (object) {
        if (!object) return;
        let $p = `<p data-time="${object.time}">${object.lyric}</p>`;
        $('.lyric > .text > .lines').append($p);
    })


    //  根据当前播放事件，获得当前应该显示并且高亮的那一行歌词，并设置滚动动画
    setInterval(function () {
        let current = audio.currentTime;
        let $lines = $('.lines > p');
        let $whichline;
        for (var i = 0; i < $lines.length; i++) {
            let currentLineTime = $lines.eq(i).attr('data-time');
            let nextLineTime = $lines.eq(i + 1).attr('data-time');
            if (i === $lines.length - 1) {
                $whichline = $lines.eq(i);
            } else if (currentLineTime <= current && current < nextLineTime) {
                $whichline = $lines.eq(i);
                break;
            }
        }

        if ($whichline) {
            $whichline.addClass('active').prev().removeClass('active');
            let top = $whichline.offset().top;
            let linesTop = $('.lines').offset().top;
            let difference = top - linesTop - $('.text').height() / 3;
            $('.lines').css('transform', `translateY(-${difference}px)`);
        }
    }, 500)


    // setInterval(function(){
    //     let current = audio.currentTime;
    //     for(var i = 0;i<array.length;i++){
    //         // 当id等于最后一项的时候，是没有i+1的，所以要判断下，如果是最后一项，就直接显示最后一句的歌词
    //         if(i === array.length-1){
    //             console.log(array[i].lyric);
    //         }else if(array[i].time <= current && current<array[i+1].time){
    //             console.log(array[i].lyric);
    //             break;
    //         }
    //     }
    // },500)

    // lyricArr.forEach(function(string,index){
    //     let reg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
    //     let timeArr = string.match(reg) || [];
    //     let lyricStr = string.replace(reg, '');
    //     console.log(timeArr);

    //     // if(!timeArr) continue;
    //     // 遍历每一行匹配的时间 ，同一句歌词有可能有不同的时间
    //     timeArr.forEach(function(time,index){
    //             // if(time === null) break;
    //             let t = time;
    //             let min = Number(String(t.match(/\[\d*/i)).slice(1));
    //             let sec = Number(String(t.match(/\:\d*/i)).slice(1));
    //             let times = min * 60 + sec;
    //             lyricObj[times] = lyricStr;
    //     })
    // })
    // console.log(lyricObj);  

})
