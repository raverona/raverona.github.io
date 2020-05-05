---
layout: null
sitemap:
  exclude: 'yes'
---

$(document).ready(function () {
  $('a.panel-button').click(function () {
    if ($('.content-wrapper').hasClass('showing')){
      $('.content-wrapper').removeClass('animated slideInRight');
      $('.panel-cover').removeClass('panel-cover--collapsed');
      $('.panel-cover').css('max-width', '100%');
      $('.panel-cover').animate({'width': '100%'}, 400, swing = 'swing', function () {});
      $('.content-wrapper').removeClass('showing');
      window.location.hash = '';
      parent.location.hash = '';
      return;
    }
    currentWidth = $('.panel-cover').width();
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed');
      $('.content-wrapper').addClass('animated slideInRight')
    } else {
      $('.panel-cover').css('max-width', currentWidth);
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
    }
    $('.content-wrapper').addClass('showing');
  });

  if (window.location.hash && window.location.hash == '#projects') {
    $('.content-wrapper').addClass('showing');
    $('.panel-cover').css({'max-width': '530px', 'width': '40%'})
  }

  if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  $('.btn-mobile-menu').click(function () {
    if(!$('.navigation-wrapper').hasClass('animated visible')) {
      $('.navigation-wrapper').addClass('animated visible');
    }
    $('.navigation-wrapper').toggleClass('bounceInDown bounceOutUp');
    $('.btn-mobile-menu__icon').toggleClass('animated fadeIn hidden')
  });

  $('.navigation-wrapper .projects-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible');
    $('.btn-mobile-menu__icon').toggleClass('animated fadeIn hidden')
    $('.navigation-wrapper').toggleClass('bounceInDown bounceOutUp');
  })

  window.onresize = function() {
    if($('.panel-cover').width() > 960) {
      if(!$('.btn-mobile-open').hasClass('hidden')) {
        $('.navigation-wrapper').removeClass('animated visible bounceOutUp');
      }
    }
    if($('.panel-cover').width() < 960) {
      if($('.btn-mobile-open').hasClass('hidden')) {
        $('.navigation-wrapper').addClass('animated visible bounceInDown');
      } else {
        $('.navigation-wrapper').addClass('bounceOutUp');
      }
    }
  };
});