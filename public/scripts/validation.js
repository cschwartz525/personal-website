var emailRegex = /^\w+([+\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
var trigger = false;

function validateEmail(e) {
    var email = $('#contact-form-email').val();
    if (e.type !== 'keyup' || trigger) {
        if (!emailRegex.test(email) && email.length > 0) {
            $('#contact-form-email').addClass('error');
            trigger = true;
        } else {
            $('#contact-form-email').removeClass('error');
        }
    }
}

function validateForm() {
    var email = $('#contact-form-email').val();
    if (emailRegex.test(email)) {
        $('#contact-form-submit').removeAttr('disabled');
    } else {
        $('#contact-form-submit').attr('disabled', 'disabled');
    }
}

$('#contact-form-email').on('focusout', validateEmail);
$('#contact-form-email').on('keyup', validateEmail);
$('#contact-form-email').on('keyup', validateForm);
