$('.accordion').on('click','.accordion-control', function(){
  $(this)
    .next('.accordion-panel')
    .not(':animated')
    .slideToggle()
});
