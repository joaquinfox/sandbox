$('.accordion').on('click','.accordion-control',function(foo){
  foo.preventDefault(); //i think this is totally unecessary
  $(this)
    .next('.accordion-panel')
    .not(':animated') //to prevent repeated clicks, queing up a bunch of animations.
    .slideToggle();
});
