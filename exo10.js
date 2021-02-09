
var img = document.getElementById('image');

img.addEventListener('mouseenter', function() {
    this.src = 'image/dond.jpg';
}, true);

img.addEventListener('mouseleave', function() {
    this.src = 'image/fond.jpg';
}, false);