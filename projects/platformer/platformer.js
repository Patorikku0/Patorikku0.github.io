$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
createPlatform(100,100,20,500)
createPlatform(0,800,10000,20) 
createPlatform(100,600,900,20)
createPlatform(100,485,500,20)
createPlatform(900,485,70,20)
createPlatform(1250,640,200,20)
createPlatform(1000, 400,50,20)
createPlatform(1300, 330, 50, 20)
createPlatform(700, 250, 50, 20)
createPlatform(600,300,20,205)
createPlatform(300,0,20,400)
createPlatform(450,90,20,400)


    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
createCollectable("database",20, 40, 0)
createCollectable("steve", 1300, 600,0)
createCollectable("grace", 920, 430, 0)
createCollectable("diamond",100, 650, 0)
createCollectable("max",30, 30)
createCollectable("kennedi",150,530, 0)
    
    
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay)
createCannon("left" ,300,1010)
createCannon("right" ,800 ,1010)
createCannon("top" ,600,1100)
createCannon("bottom" ,300,1100)


    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
