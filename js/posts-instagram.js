$(function() {
  $('.elfsight-app-97c5d595-e300-43b0-8305-fbd0d02d264f').bind('DOMSubtreeModified', function(ev){
    $(ev.currentTarget).find('.eapps-link').remove();
  });
})
