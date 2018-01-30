$(document).ready(function(){
    $('img').click(function(){
        var attr = $(this).attr('data-alt-src');
        $(this).attr('src', attr);

    });
});
