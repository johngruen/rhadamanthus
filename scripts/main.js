$(document).ready(function(){
  $(".show-details").click(function() {
    $(this).closest('.experiment')
        .find('.experiment-details')
        .toggleClass('hidden');
  });
});
