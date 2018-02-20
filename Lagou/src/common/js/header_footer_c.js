$(function() {

    $('head').append('<link href="https://activity.lagou.com/activity/dist/common/subject/header_c.css?v=20160803" rel="stylesheet" />');
    $('head').append('<link href="https://activity.lagou.com/activity/dist/common/subject/footer_c.css?v=20160803" rel="stylesheet" />');

    $.ajax({
        url: 'https://activity.lagou.com/activityapi/common/getHeader',//https://www.lagou.com/subject/header/header_c.html',//'https://activity.lagou.com/activity/dist/common/html/header_c.html',
        dataType: 'html',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true
    })
        .done(function(html) {
            var $header = $.parseHTML(html, document, true);
            $('body').prepend($header);
        });
    $.ajax({
        url: 'https://activity.lagou.com/activityapi/common/getFooter',////https://activity.lagou.com/activity/dist/common/html/footer_c.html',
        dataType: 'html',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true
    })
        .done(function(html) {
            var $footer = $.parseHTML(html, document, true);
            $('body').append($footer);
        });

});