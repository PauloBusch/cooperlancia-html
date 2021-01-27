$(function() {
  $('.header-question').click(toggleQuestion);  
}); 

function toggleQuestion(ev) {
  const question = $(ev.currentTarget).closest('.question');
  const contentAnimate = question.find('.content-animate');
  const questions = question.closest('.questions').find('.question');
  const contentsAnimate = questions.find('.content-animate');
  const isOpen = question.hasClass('open');
  questions.removeClass('open');
  contentsAnimate.not(contentAnimate).animate({ height: 'hide' }, 500);
  contentAnimate.animate({ height: 'toggle' }, 500);
  if(!isOpen) question.addClass('open');
}
