var image_base_path = "https://raw2.github.com/rfong/ecovent/main/images/";
var slides = [
  { image: "dip.JPG",
    caption: "Make every room in your home the right temperature."
  },
  { image: "ecovent.JPG",
    caption: "Vents install in minutes, improving comfort immediately."
  },
  { image: "lightbulb.jpg",
    caption: "Stop wasting money heating and cooling empty space."
  }
];

var carousel_item_template = '<div class="item"> \
  <div class="image" style="background-image:url(\'{{image}}\')"></div> \
  <div class="caption-wrapper"> \
    <div class="caption">{{caption}}</div> \
  </div> \
</div>';

var signup_template = 

$(document).ready(function(){

  $('.flexslider').flexslider();

  $.each(slides, function(i,slide) {
    $('.carousel-inner').append(
      Mustache.render(carousel_item_template, { 
        image: image_base_path + slide.image,
        caption: slide.caption
        })
    );
  });

  $('.carousel-inner .item').first().addClass('active');

  $('.carousel').carousel();

});


// preload images
$.each(slides, function(i,slide){
  new Image(slide.image);
});
