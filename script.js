document.addEventListener('DOMContentLoaded', function() {
    var currentIndex = 0;
    var items = document.querySelectorAll('.carousel .carousel-item');
    var itemCount = items.length;

    function cycleItems() {
        var item = items[currentIndex];
        items.forEach(item => item.classList.remove('active'));
        item.classList.add('active');
    }

    setInterval(function() {
        currentIndex = (currentIndex + 1) % itemCount;
        cycleItems();
    }, 3000); 

    function setCurrentIndex(newIndex) {
        if (newIndex < 0 || newIndex >= itemCount) return;
        currentIndex = newIndex;
        cycleItems();
    }

    var prevButton = document.querySelector('.carousel-control-prev');
    var nextButton = document.querySelector('.carousel-control-next');

    prevButton.addEventListener('click', function() {
        setCurrentIndex(currentIndex - 1);
    });

    nextButton.addEventListener('click', function() {
        setCurrentIndex(currentIndex + 1);
    });
});
