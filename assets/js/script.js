const pauseCarousel = () => {
    $('.carousel').carousel('pause');
}

const openProject = (num) => {
    if (num === 1) {
        window.open("https://auto-parts-inventory-tracker.herokuapp.com/", "_blank");
    } 
    else if (num === 2) {
        window.open("https://note-taker-app-345.herokuapp.com/", "_blank");
    }
    else if (num === 3) {
        window.open("https://tech-blog-432.herokuapp.com/", "_blank");
    }
    else if (num === 4) {
        window.open("https://davidschepis.github.io/Homework6/", "_blank");
    }
    else if (num === 5) {
        window.open("https://github.com/davidschepis/Social_Network_API", "_blank");
    }
}

const navigateCarousel = (num) => {
    if (num === 0) {
        $('.carousel').carousel(0);
    } 
    else if (num === 1) {
        $('.carousel').carousel(1);
    }
    else if (num === 6) {
        $('.carousel').carousel(6);
    }
    else if (num === 7) {
        $('.carousel').carousel(7);
    }
}

$('.carousel').carousel('pause');