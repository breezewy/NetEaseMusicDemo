
$('.tabs').on('click','li',function(e){
    let $li = $(e.currentTarget);
    let index = $li.index();
    $li.addClass('active').siblings().removeClass('active');
    $('.tabContent > li').eq(index).addClass('active').siblings().removeClass('active');
})