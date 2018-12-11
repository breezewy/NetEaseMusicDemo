

let timer = null;

//监控input输入事件 
$('.input').on('input', function (e) {
    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(function () {
        timer = null;
        let $input = $(e.currentTarget);
        let value = $input.val().trim();  //，获取到输入的值，trim就是把两边的空格排除
        if (value === "") { $('.searchResult').empty() };  //如果什么都没有输入，就不去搜数据库了，直接什么都不做
        $('.searchResultBox .tips').text('搜索"' + value + '"');
        var query1 = new AV.Query('SongObject');
        query1.contains('name', value);
        var query2 = new AV.Query('SongObject');
        query2.contains('singer', value);
        var query = new AV.Query.or(query1, query2);

        query.find().then(function (response) {
            $('.searchResult').empty();
            console.log(response);
            if (response.length === 0) {
                $('.searchResult').append(`<li class="item">搜索不到，请重新输入！</li>`);
            } else {
                for (var i = 0; i < response.length; i++) {
                    let songs = response[i].attributes;
                    let li = `<li class="item" data-id= ${response[i].id}>
                                        <svg class="icon iconSearch" aria-hidden="true">
                                            <use xlink:href="#icon-search"></use>
                                        </svg>
                                        <a href="./song.html?id=${response[i].id}">
                                            ${songs.name} - ${songs.singer}
                                        </a>
                                        </li>`
                    $('.searchResult').append(li);
                }
            }
        })
    }, 500)
}) 