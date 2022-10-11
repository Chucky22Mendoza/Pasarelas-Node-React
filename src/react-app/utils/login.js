$(document).ready(function() {
    $('.owl-login').owlCarousel({
        items: 1,
        loop: true,
        lazyLoad: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        dots: true
    });

    $("#telForm").on('input', function(e) {
        $(this).val($(this).val().replace(/[^0-9]/g, ''));
    });

    $(".mandatoryfields").keyup(function() {
        if ($('#nombreForm').val().length > 0 && $('#nombreNegocioForm').val().length > 0 && $('#telForm').val().length > 0 && $('#passwordForm').val().length >= 6) {
            $('#vl').removeClass('disabled');
        } else {
            $('#vl').addClass('disabled');
        }
    });

    $('#passwordForm').on('blur', function() {
        if ($(this).val().length < 6) {
            $(this).parent().find('.input-error').css('display', 'block');
        } else {
            $(this).parent().find('.input-error').css('display', 'none');
        }
    });

    $('#emailInputCheck').on('focus', function() {
        $('#emailEmpleado').hide();
    });

    $('#passwordToggler').on('click', function() {
        console.log(this);
        $(this).toggleClass('active');
        if ($(this).prev().prev().attr('type') == 'password') {
            $(this).prev().prev().attr('type', 'text');
        } else {
            $(this).prev().prev().attr('type', 'password');
        }
    });
});

(function($) {
    $.fn.borderRed = function() {
        $(this).attr('style', 'border-color: #FE0000');
        setTimeout(() => {
            $(this).removeAttr('style');
        }, 1500);
    };
})(jQuery);

export const emailFound = (email) => {
    document.getElementById('loginFirst').classList.add('covered');
    document.getElementById('loginPassword').classList.remove('hidden');
    document.getElementById('emailFoundContainer').innerText = email;
}

export const borderRed = (element) => {
    element.setAttribute('style', 'border-color: #FE0000; transform: scale(101%)');
    setTimeout(() => {
        element.removeAttribute('style');
    }, 2000);
}

export const emailNotFound = (text) => {
    borderRed(document.getElementById('emailInputCheck'));
    $('#emailEmpleado').text(text).show();
    setTimeout(() => {
        $('#emailEmpleado').hide();
    }, 3000);
}

export const passwordIncorrect = (text) => {
    borderRed(document.getElementById('passWordLogin'));
    $('#passwordError').text(text).show();
    setTimeout(() => {
        $('#passwordError').hide();
    }, 3000);
}

export const expReg = /(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-zA-Z0-9-]*[a-zA-Z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

export const closeLoginPassword = () => {
    document.getElementById('loginPassword').classList.add('hidden');
    document.getElementById('loginFirst').classList.remove('covered');
}