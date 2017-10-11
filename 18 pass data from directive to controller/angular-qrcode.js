
angular.module('monospaced.qrcode', [])
  .directive('qrcode', ['$window', function($window) {

    // var canvas2D = !!$window.CanvasRenderingContext2D,
        // levels = {
        //   'L': 'Low',
        //   'M': 'Medium',
        //   'Q': 'Quartile',
        //   'H': 'High'
        // },
        //  }
        //   }
      // };

    return {
      restrict: 'E',
      scope:{
            fn:'&',
      },                 ///////imp.
      template: '<canvas class="qrcode"></canvas>',
      link: function(scope, element, attrs) {
        scope.passIt = function() {
            scope.fn({code: ""});
        };
              // if (canvas2D) {
              //   draw(context, qr, modules, tile, color);

              //   if (download) {
                  
              //     domElement.href = canvas.toDataURL('image/png');
                  var xData= canvas.toDataURL('image/png');
                    scope.fn({code: xData});
              //       console.log(canvas.toDataURL('image/png'));
              //     return;
              //   }
              // } else {
              //   domElement.innerHTML = qr.createImgTag(tile, 0);
              //   $img = element.find('img');
              //   $img.addClass('qrcode');

              //   if (download) {
              //     domElement.href = $img[0].src;
              //     return;
              //   }
              // }

