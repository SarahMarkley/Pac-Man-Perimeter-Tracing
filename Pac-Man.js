var posX = 0;
var posY = 0;
const pacArray = [
    ['PacMan1.png', 'PacMan2.png'],     //direction 0; move right
    ['PacMan3.png', 'PacMan4.png'],     //direction 1; move down
    ['PacMan5.png', 'PacMan6.png'],     //direction 2; move left
    ['PacMan7.png', 'PacMan8.png']      //direction 3; move up
];
var direction = 0;
var focus = 0;

function Run() 
{
    let img = document.getElementById("PacMan");
    let imgWidth = img.width
    focus = (focus + 1) % 2;
    direction = checkPageBounds(direction, imgWidth);
    img.src = pacArray[direction][focus];

    switch(direction)
    {
        case 0:
            posX += 20;
            img.style.left = posX + 'px';
        break;
        case 1:
            posY += 20; 
            img.style.top = posY + 'px';
        break;
        case 2:
            posX -= 20;
            img.style.left = posX + "px";
        break;
        case 3:
            posY -= 20;
             img.style.top = posY + 'px';
         break;
    }

    setTimeout(Run, 200);
}

function checkPageBounds(direction, imgWidth) 
{
    let pageWidth = window.innerWidth;
    let pageHeight = window.innerHeight;
    if (direction == 0 && posX + imgWidth >= pageWidth) direction = 1;
    if (direction == 1 && posY + imgWidth >= pageHeight) direction = 2;
    if (direction == 2 && posX <= 0) direction = 3;
    if (direction == 3 && posY <= 0) direction = 0;
    
    return direction;
}