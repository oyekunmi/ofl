
new UISearch(document.getElementById('sb-search1'));
new UISearch(document.getElementById('sb-search2'));


$(document).ready(function(){

$('#sidebar-group .collapse')
.on('shown.bs.collapse', function() {
    // alert( $(this) .prev().find(".fa-plus").attr("class"));
    $(this)
        .prev()
        .find(".fa-plus")
        .removeClass("fa-plus")
        .addClass("fa-minus");
    })
.on('hidden.bs.collapse', function() {
    $(this)
        .prev()
        .find(".fa-minus")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    });

 //FAQ Page
 $('#faq-group .collapse')
.on('shown.bs.collapse', function() {
    // console.log( $(this).parent().find('.fa-plus-circle').attr("class"));
    $(this).parent().find('.fa-plus-circle').parent().addClass("light-red");})
.on('hidden.bs.collapse', function() {
    $(this).parent().find('.fa-plus-circle').parent().removeClass("light-red");});

});