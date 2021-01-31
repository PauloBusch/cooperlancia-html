$(function() {
  updateActiveMenu();
  $('.toggle-menu').click(toggleMenu);  
  $('.second-menu a').click(toggleActiveMenu);
});

function updateActiveMenu() {
  const { hash } = window.location;
  const $menu = $(`a[href="${hash}"]`);
  if (!hash || $menu.length === 0) return;
  $('.second-menu ul a').removeClass('active');
  $menu.addClass('active');
}

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
