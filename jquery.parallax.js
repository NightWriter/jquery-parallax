(function($){
    $.parallax = function(options){
        var options = $.extend({
                                    wrapper: '.paralax-layers',
                                    parent: 'body',
                                    subLayers: []
                                  },options);
        
        var clientWidth = 0;
        var clientHeight = 0;
        var deltaX = 0;
        var deltaY = 0;
        var layerPositionX = [];
        var layerPositionY = [];
        this.init = function() {
            clientWidth = $(options.parent).width();
            clientHeight = $(options.parent).height();

            for(var key in options.subLayers) {
                var _pos = $(options.subLayers[key][0]).offset();
                layerPositionX[key] = parseInt(_pos.left) + parseInt($(options.subLayers[key][0]).width() * 0.5);
                layerPositionY[key] = parseInt(_pos.top);
            }
            $(options.parent).mousemove(function(e){
                
                deltaX = Math.round(clientWidth/2) - e.pageX;
                deltaY = Math.round(clientHeight/2) - e.pageY;
                for(var key in options.subLayers) {
                    var current = options.subLayers[key];
                    $(current[0]).css('left', Math.round(layerPositionX[key]) + Math.round(deltaX*current[1]));
                    $(current[0]).css('top', Math.round(layerPositionY[key]) + Math.round(deltaY*current[1]));
                }
            });
        };
        this.refresh = function() {
            this.destroy();
            this.init();
        };
        this.destroy = function() {
            $('.paralax-layer').css({
                                    'left': '50%',
                                    'margin-left': '-1000px'
                                        });
            var clientWidth = 0;
            var clientHeight = 0;
            var deltaX = 0;
            var deltaY = 0;
            var layerPositionX = [];
            var layerPositionY = [];
        };
    };

})(jQuery);


