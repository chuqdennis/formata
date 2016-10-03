/**
 * Created by apple on 9/30/16.
 */

$('.next').click(function(){
    var nextId = $(this).parents('.tab-pane').next().attr("id");
    $('[href="#'+nextId+'"]').tab('show');
    return false;
});

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    //update progress
    var step = $(e.target).data('step');
    var percent = (parseInt(step) / 5) * 100;

    $('.progress-bar').css({width: percent + '%'});

    //e.relatedTarget // previous tab
});

$('.submit').click(function(){
    alert('submit form');

    $.ajax({
        url: '',
        type: 'post',
        dataType: 'html',
        beforeSend: function(){},
        success: function(data){}
    });
    return false;
});