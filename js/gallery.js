function setUp() {
    
    // The main image container
    const container = document.querySelector('.image-container');
    
    // Div containing all the smaller images along the bottom
    const carouselContainer = document.querySelector('.carousel-container');  

    const images = container.querySelectorAll('img');

    const miniImages = [];

    let counter = 0;

    images.forEach((image, key) => {

        var imageNode = document.createElement('img');
        imageNode.src = image.src;      
            
        var divNode = document.createElement('div');
        divNode.className = 'carousel-item';
        divNode.appendChild(imageNode); 

        divNode.addEventListener('click', () => {
            ResetCurrentImage();            
            counter = key;
            SetCurrentImage();
        });
        carouselContainer.appendChild(divNode);
        miniImages.push(divNode);
    });    

    let currentImage = images[0];
    let highlightedImage = miniImages[0];

    highlightedImage.classList.add('highlighted');    

    for (let index = 1; index < images.length; index++) {

        images[index].style.display = "none";        
    }

    const max = images.length - 1;
    const min = 0;

    const buttons = document.getElementsByClassName('control-button');

    const leftButton = buttons[0];

    const rightButton = buttons[1];    

    leftButton.addEventListener('click', () => {     
        
        ResetCurrentImage(); 

        counter--;

        if(counter < min) {

            counter = max;
        }              

        SetCurrentImage();
    });

    rightButton.addEventListener('click', () => {

        ResetCurrentImage();   

        counter++;

        if(counter > max) 
        {
            counter = min;
        }
        
        SetCurrentImage();         
    });    


    function ResetCurrentImage() {

        currentImage.style.display = 'none';
        highlightedImage.classList.remove('highlighted');
    }

    function SetCurrentImage() {

        currentImage = images[counter];
        highlightedImage = miniImages[counter];
        currentImage.style.display = 'flex';
        highlightedImage.classList.add('highlighted');
    }
}

setUp();



