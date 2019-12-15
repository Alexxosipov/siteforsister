var $ = require('jquery')

import initGallery from './gallery'



$('.portfolio__tab').click(function(e){
    e.preventDefault();
    $('.portfolio__tab').removeClass('portfolio__tab-active');
    $(this).addClass('portfolio__tab-active');
    $('.portfolio__items').hide();
    $('.portfolio__items-' + $(this).attr('data-items')).css('display', 'flex');
    initGallery('.portfolio__items');
});

initGallery('.portfolio__items')
