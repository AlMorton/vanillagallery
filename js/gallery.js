function setUp() {
    
    const container = document.querySelector('.image-container');
    
    const carouselContainer = document.querySelector('.carousel-container');  

    const images = container.querySelectorAll('img');

    const miniImages = [];

    images.forEach(image => {
        var imageNode = document.createElement('img');
        imageNode.src = image.src;      
            
        var divNode = document.createElement('div');
        divNode.className = 'carousel-item';
        divNode.appendChild(imageNode); 
        
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
    
    let counter = 0;

    leftButton.addEventListener('click', () => {     
        
        currentImage.style.display = 'none';
        highlightedImage.classList.remove('highlighted'); 

        counter--;

        if(counter < min) {

            counter = max;
        }              

        currentImage = images[counter];
        highlightedImage = miniImages[counter];

        currentImage.style.display = 'flex';
        highlightedImage.classList.add('highlighted'); 

    });

    rightButton.addEventListener('click', () => {

        currentImage.style.display = 'none';
        highlightedImage.classList.remove('highlighted');  

        counter++;

        if(counter > max) 
        {
            counter = min;
        }
        
        currentImage = images[counter];
        highlightedImage = miniImages[counter];
        
        currentImage.style.display = 'flex'; 
        highlightedImage.classList.add('highlighted');         
    });    
}

setUp();



