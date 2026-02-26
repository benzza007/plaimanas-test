$(function(){ 'use strict';
  // Tabs
  $('.tabs .tab').on('click', function(){
    var self = $(this);
    var target = self.data('tab');
    var parent = self.closest('.tab-container');
    var container = parent.find('.body');

    if(!self.hasClass('active') && target){
      parent.find('.tab').removeClass('active');
      self.addClass('active');

      container.find('.tab-content').removeClass('active');
      var content = container.find('.tab-content[data-tab="'+target+'"]');
      content.addClass('active');
      AOS.refresh();
    }
  });

  // Accordion
  var accordion = $('.accordion');
  if(accordion.length){
    accordion.each(function(){
      var self = $(this);
      var btn = self.find('.header');
      
      btn.click(function(){
        if(self.hasClass('active')){
          self.removeClass('active');
          self.find('.body').slideUp();
        }else{
          accordion.removeClass('active');
          accordion.find('.body').slideUp();
          self.addClass('active');
          self.find('.body').slideDown();
        }
      });
    });
  }

  // Back to Top
  var backToTop = $('.back-to-top');
  backToTop.click(function(e){
    e.preventDefault();
    $('html, body').stop().animate({ scrollTop: 0 }, 800 );
  });

  // Mobile menu toggle
  $('.burger-menu').on('click', function(){
    $(this).toggleClass('active');
    $('.menu-mobile').toggleClass('active');
  });

  // submenu dropdown in mobile menu
  $('.submenu-toggle').on('click', function(){
    var parent = $(this).closest('.submenu-mobile');
    parent.toggleClass('open');
  });

  AOS.init({ easing: 'ease-in-out-cubic', duration: 750, once: true, offset: 5 });
});