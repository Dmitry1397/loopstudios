const images = document.querySelectorAll('.flex-container img');
const width = window.innerWidth;


function updateImage() {
    images.forEach((element, index) => {
        const src = element.getAttribute('src');
        const path = src.split('/');
        if (window.innerWidth < 600) {   
            path[1] = 'mobile';
            element.src = path.join('/');
        }
    });
}

updateImage();