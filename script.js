// JavaScript Document
$(document).ready(function(){
    $('#button').click(function(){
        var toAdd = $('input[name=checkListItem]').val();
        
        $('.list').append("<div class='item'>" + toAdd + "</div>");
    });
    
    $('.list').click(function(){
        
    });


});

$(document).on('click', '.item', function(){
    $(this).remove();

});

