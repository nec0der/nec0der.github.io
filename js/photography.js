$(document).ready(() => {
  var loadingIndicator = $('.lds-dual-ring');
  var folder = 'images/photography';
  var rightPlace = $('#photo-wrapper');

  // $.ajax({
  //   url: folder,
  //   headers: {
  //     'Access-Control-Allow-Origin': '*'
  //   },
  //   success: function(data) {
      loadingIndicator.toggle('lds-dual-ring');

  //     $(data)
  //       .find('a')
  //       .attr('href', function(i, val) {
  //         if (val.match(/\.(jpe?g|png|gif)$/)) {
  //           let newPicture =
  //             "<li><img class='photo lazy' data-src='" + val + "'></li>";

  //           rightPlace.append(newPicture);

            $(function() {
              $('.lazy').lazy();
            });
  //         }
  //       });
  //   }
  // });
});
