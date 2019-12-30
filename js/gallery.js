function setUp() {

    const container = document.getElementsByClassName('image-container')[0];

    const images = container.getElementsByTagName('img');

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
           
        counter--;

        if(counter < min) {
            counter = max;
        }

        images[counter + 1].style.display = 'none';
        images[counter].style.display = 'flex';
    });

    rightButton.addEventListener('click', () => {

        counter++;

        if(counter > max) 
        {
            counter = min;
        }

        images[counter - 1].style.display = 'none';
        images[counter].style.display = 'flex';
    });    
}

setUp();



