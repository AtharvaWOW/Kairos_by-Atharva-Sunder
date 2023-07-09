function showCity(city) {
    // Get all carousel images
    var images = document.querySelectorAll('.carousel-images img');
    
    // Hide all images
    images.forEach(function(image) {
      image.style.display = 'none';
    });
    
    // Show the selected city image
    var selectedImage = document.getElementById(city);
    selectedImage.style.display = 'block';
  }

  $(document).ready(function () {
    $('.city-list li').click(function () {
        $('.city-list li').removeClass('active');
        $(this).addClass('active');
        var index = $(this).data('slide-to');
        $('#office-carousel').carousel(index);
    });
});