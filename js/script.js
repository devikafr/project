 $(document).ready(function() {
  $(function () {
    $('[data-toggle="popover"]').popover()
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  $('li').click(function(){
    $('.navbar-toggler.navbar-toggler-right').click()
  })
});
