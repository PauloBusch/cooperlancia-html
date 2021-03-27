$(function() {
  $('#select-curriculum').click(selectCurriculum);
  $('#form-join-work button[type=submit]').on('click', submit);
})

function selectCurriculum() {
  $('input[name="curriculum"]').click();
}

function submit(ev) {
  ev.preventDefault();
  ev.stopPropagation();
  const data = getFormData();
  const valid = validate(data);
  if (!valid) return;

  sendCurriculum(data);
}

function sendCurriculum(data) {
  data.append('websiteName', WEBSITE_NAME);
  data.append('websiteUrl', WEBSITE_URL);

  $('#form-join-work').addClass('loading');
  $.ajax({
    url: `${API_HOST}/api/curriculum`,
    data: data,
    processData: false,
    contentType: false,
    type: 'POST'
  })
  .done(function(res) {
    if (res.ErrorCode > 0) {
      alert('Falha ao enviar currículo');
      return;
    } 

    alert('Currículo enviado com sucesso');
    $('#form-join-work')[0].reset();
  })
  .fail(function() {
    alert('Falha ao enviar currículo');
  })
  .always(function() {
    $('#form-join-work').removeClass('loading');
  });
}

function getFormData() {
  const $form = $('#form-join-work');
  return new FormData($form[0]);
}

function validate(data) {
  removeFeedbacks();

  if(!data.get('name')) addFeedback('name', 'O campo é obrigatório');
  if(!data.get('email')) addFeedback('email', 'O campo é obrigatório');
  if(data.get('email') && !validateEmail(data.get('email'))) addFeedback('email', 'O email deve ser válido');
  const { name } = data.get('curriculum');
  if(!name) addFeedback('curriculum', 'O Currículo é obrigatório');
  const extension = name.substring(name.lastIndexOf('.'));
  if(name && extension !== '.pdf') addFeedback('curriculum', 'O Currículo deve estar no formado PDF');
  if(!data.get('message')) addFeedback('message', 'O de mensagem é obrigatório');

  return !hasFormError();
}

function hasFormError() {
  return $('#form-join-work').find('.invalid-field').length > 0;
}

function addFeedback(fieldName, message) {
  const $field = $('#form-join-work').find(`[name="${fieldName}"]`);
  const $container = $field.closest('.form-group');
  const $feedback = $container.find('.field-feedback');
  $container.addClass('invalid-field');
  $feedback.html(message);
}

function removeFeedback(field) {
  const $field = $(field);
  const $container = $field.closest('.form-group');
  $container.removeClass('invalid-field');
  $container.find('.field-feedback').html('');
}

function removeFeedbacks() {
  const $form = $('#form-join-work');
  $form.find('.invalid-field').removeClass('invalid-field');
  $form.find('.field-feedback').html('');
}
