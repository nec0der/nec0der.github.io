$(document).ready(() => {
    var coll = document.getElementsByClassName('step--title');
    var i;

    for (i = 0; i < coll.length; i++) {
      $(coll[i]).click(function() {
        this.classList.toggle('active');
        var content = this.nextElementSibling;
        $(content).slideToggle('slow');

        $('html, body').animate(
          {
            scrollTop: parseInt($(this).offset().top) - 10
          },
          500
        );
      });
    }
})