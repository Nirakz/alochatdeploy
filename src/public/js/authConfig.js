function showRegisterForm() {
  $('.loginBox').fadeOut('fast', function() {
    $('.registerBox').fadeIn('fast');
    $('.login-footer').fadeOut('fast', function() {
      $('.register-footer').fadeIn('fast');
    });
    $('.modal-title').html('Đăng ký tài khoản');
  });
  $('.error').removeClass('alert alert-danger').html('');

}
function showAddForm() {
  $('#loginModal .registerBox').fadeOut('fast', function() {
    $('.loginBox').fadeIn('fast');
    $('.modal-title').html('Add User');
  });
  $('.error').removeClass('alert alert-danger').html('');
}

function showLoginForm() {
  $('#AddModal').fadeOut('fast', function() {
    $('.addBox').fadeIn('fast');
  });
  $('.error').removeClass('alert alert-danger').html('');
}

function openLoginModal() {
  setTimeout(function() {
    $('#loginModal').modal('show');
    showLoginForm();
  }, 230);
}

function openRegisterModal() {
  setTimeout(function() {
    $('#loginModal').modal('show');
    showRegisterForm();
  }, 230);
}
function openAddModal() {
  setTimeout(function() {
    $('#AddModal').modal('show');
    showAddForm();
  }, 230);
}

