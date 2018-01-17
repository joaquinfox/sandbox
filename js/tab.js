$('.tab-list').each(function(){
  var list = $(this);
  var tab = list.find('li.active');
  var link = tab.find('a');
  var panel =$(link.attr('href'));

  list.on('click','.tab-control', function(){
    var link = $(this);
    var id = this.hash;

    if (id && !link.is('.active')) {
      panel.removeClass('active');
      tab.removeClass('active');

      panel = $(id).addClass('active');
      tab = link.parent().addClass('active');
    }
  });
});
