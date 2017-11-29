/* begin Document Ready
 ***************************************************************************** */
$(function() {
  'use strict';

  /* -------------------------------------------------------------------------
     begin AOS Animated
   * ------------------------------------------------------------------------- */

  // AOS.init({
  //   disable: 'mobile'
  // });

  /* -------------------------------------------------------------------------
     end AOS Animated
   * ------------------------------------------------------------------------- */



  /* -------------------------------------------------------------------------
     begin Magnific Popup
   * ------------------------------------------------------------------------- */

  // $('.xxxxxxx').magnificPopup({
  //   delegate: 'a',
  //   type: 'image',
  //   autoFocusLast: false,
  //   gallery: {
  //     enabled: true,
  //     arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
  //     tPrev: 'Previous (Left arrow key)',
  //     tNext: 'Next (Right arrow key)',
  //     tCounter: '<span class="mfp-counter">%curr% of %total%</span>'
  //   }
  // });
  /* -------------------------------------------------------------------------
     end Magnific Popup
   * ------------------------------------------------------------------------- */


  /* -------------------------------------------------------------------------
     begin Smooth Scroll
   * ------------------------------------------------------------------------- */

  // (function() {
  //   function smoothScroll(event) {

  //     if (this.hash !== "") {
  //       event.preventDefault();

  //       var hash = this.hash;

  //       $('html, body').animate({
  //         scrollTop: $(hash).offset().top
  //       }, 800, function() {

  //         window.location.hash = hash;
  //       });
  //     }
  //   }


  //   $('.nav a').on('click', smoothScroll);
  // })();

  /* -------------------------------------------------------------------------
     end Smooth Scroll
   * ------------------------------------------------------------------------- */

  /* -------------------------------------------------------------------------
      begin Mask Phone
    * ------------------------------------------------------------------------- */

  var inputsTel = document.querySelectorAll('input[type="tel"]');

  Inputmask({
    "mask": "+7(999) 999-99-99",
    showMaskOnHover: false,
    // placeholder: ' ',
    // showMaskOnFocus: false,
  }).mask(inputsTel);

  /* -------------------------------------------------------------------------
     end Mask Phone
   * ------------------------------------------------------------------------- */

  /* -------------------------------------------------------------------------
     begin Form Validator
   * ------------------------------------------------------------------------- */

  // var parsleyArray = ['#modal--form--call_back_order'];

  // function parsleyValidator(event) {
  //   var ok = $('.parsley-error').length === 0;
  // }

  // for (var i = 0, length1 = parsleyArray.length; i < length1; i++) {
  //   $(parsleyArray[i]).parsley().on('field:validated', parsleyValidator);
  // }

  /* -------------------------------------------------------------------------
     end Form Validator
  * ------------------------------------------------------------------------- */



  /* -------------------------------------------------------------------------
     begin Ajax
   * ------------------------------------------------------------------------- */

  function sendEmail(event) {
    event.preventDefault();

    var formName = $(event.target).children('input[name="contact-name"]'),
      formTel = $(event.target).children('input[name="contact-phone"]'),
      formProduct = $(event.target).children('input[name="contact-product"]'),
      formText = $(event.target).children('input[name="contact-message"]');

    var formAlerts = $(event.target).next('.form-alerts');

    var formData = $(event.target).serialize();

    var request = $.ajax({
      type: 'POST',
      url: $(event.target).attr('action'),
      data: formData,
    });

    request.done(function(response) {
      $(formAlerts).removeClass('form-alerts_error');
      $(formAlerts).addClass('form-alerts_success');

      $(formAlerts).children('.form-alerts__message').text(response);

      $(formName).val('');
      $(formTel).val('');
      $(formProduct).val('');
      $(formText).val('');

      setTimeout(function() {
        $(formAlerts).removeClass('form-alerts_success');
        if ($(event.target).parents('.modal')) {
          $(event.target).parents('.modal').modal('hide');
        }
      }, 10000);
    });

    request.fail(function(data) {
      $(formAlerts).removeClass('form-alerts_success');
      $(formAlerts).addClass('form-alerts_error');

      if (data.responseText !== '' && data.responseText !== undefined) {
        $(formAlerts).children('.form-alerts__message').text(data.responseText);
      } else {
        $(formAlerts).children('.form-alerts__message').text('К сожалению! Произошла ошибка, и ваше сообщение не удалось отправить.');
      }
    });

    $(formAlerts.children('.form-alerts__close')).click(function(event) {
      $(formAlerts).removeClass('form-alerts_success form-alerts_error');
    });
  }

  var formsArray = ['#form-call-request'];

  for (var a = 0, length2 = formsArray.length; a < length2; a++) {
    $(formsArray[a]).submit(sendEmail);
  }

  /* -------------------------------------------------------------------------
     end Ajax
  * ------------------------------------------------------------------------- */



  /* -------------------------------------------------------------------------
     begin Back to Top button
   * ------------------------------------------------------------------------- */

  // function trackScroll() {
  //   var scrolled = window.pageYOffset;
  //   var coords = document.documentElement.clientHeight;

  //   if (scrolled > coords) {
  //     goTopBtn.classList.add('back_to_top-show');
  //   }
  //   if (scrolled < coords) {
  //     goTopBtn.classList.remove('back_to_top-show');
  //   }
  // }

  // function backToTop() {
  //   if (window.pageYOffset > 0) {
  //     window.scrollBy(0, -80);
  //     setTimeout(backToTop, 0);
  //   }
  // }

  // var goTopBtn = document.querySelector('.back_to_top');

  // window.addEventListener('scroll', trackScroll);
  // goTopBtn.addEventListener('click', backToTop);

  /* -------------------------------------------------------------------------
     end Back to Top button
   * ------------------------------------------------------------------------- */



  /* -------------------------------------------------------------------------
     begin
   * ------------------------------------------------------------------------- */



  /* -------------------------------------------------------------------------
     end
   * ------------------------------------------------------------------------- */



  /* -------------------------------------------------------------------------
     begin
   * ------------------------------------------------------------------------- */



  /* -------------------------------------------------------------------------
     end
   * ------------------------------------------------------------------------- */



  /* -------------------------------------------------------------------------
     begin
   * ------------------------------------------------------------------------- */



  /* -------------------------------------------------------------------------
     end
   * ------------------------------------------------------------------------- */



  /* -------------------------------------------------------------------------
     begin
   * ------------------------------------------------------------------------- */



  /* -------------------------------------------------------------------------
     end
   * ------------------------------------------------------------------------- */

});
/* end Document Ready
 ***************************************************************************** */