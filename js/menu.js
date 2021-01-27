$(function() {
  $('.toggle-menu').click(toggleMenu);  
});

function toggleMenu(ev) {
  $(ev.currentTarget)
    .closest('.second-menu')
    .find('ul')
    .toggleClass('show');
}
