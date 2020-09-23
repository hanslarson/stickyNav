/* smooth scroll */
      $('.desktopAnchor1').click(() => {
        const navBarHeight = $('#navBar-desktop').height();

        $('html,body').animate({
          scrollTop: $('#wt-set').offset().top - navBarHeight,
        }, 1000);
      });
      $('.desktopAnchor2').click(() => {
        const navBarHeight = $('#navBar-desktop').height();

        $('html,body').animate({
          scrollTop: $('#wt-dial').offset().top - navBarHeight,
        }, 1000);
      });