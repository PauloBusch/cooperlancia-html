$(function() {
  $('.toggle-menu').click(toggleMenu);  
  $('.second-menu a').click(toggleActiveMenu);
});

function toggleMenu(ev) {
  $(ev.currentTarget)
    .closest('.second-menu')
    .find('ul')
    .toggleClass('show');
}

function toggleActiveMenu(ev) {
  const $link = $(ev.currentTarget);
  $link.closest('ul').find('a').removeClass('active');
  $link.addClass('active');
}
