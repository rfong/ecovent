var slides = [
  { image: "images/dip.jpg",
    caption: "Make every room in your home the right temperature."
  },
  { image: "images/ecovent.jpg",
    caption: "Vents install in minutes, improving comfort immediately."
  },
  { image: "images/lightbulb.jpg",
    caption: "Put a stop to wasting money heating and cooling empty space."
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

  $.each(slides, function(i,slide) {
    $('.carousel-inner').append(
      Mustache.render(carousel_item_template, { 
        image: slide.image,
        caption: slide.caption
        })
    );
  });

  $('.carousel-inner .item').first().addClass('active');

  $('.carousel').carousel()

});


// preload images
$.each(slides, function(i,slide){
  new Image(slide.image);
});