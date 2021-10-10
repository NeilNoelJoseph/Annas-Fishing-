var crosshair, crosshair_moving;
var fish, fishGroup, fish_image;
var fishGroup;
var gunShot;
var clam;
var buzzer;

var shark, sharkGroup, shark_image;
var sharkGroup;

var jellyFish, jellyFishGroup, jellyFish_image;
var jellyFishGroup;

var octopus, octopus, octopus_image;
var octopusGroup;

var clam, clamGroup, clam_image;
var sharkGroup;

//var gun, gun_shooting;
var points;

function preload () {
    fish_image = loadImage("fish1.png");

    shark_image = loadImage("shark.png");

    jellyFish_image = loadImage("jellyFish.png");

    octopus_image = loadImage("octopus.png");

    clam_image = loadImage("clam.png");


    crosshair_moving = loadImage("crosshair.png");

    gunShot = loadSound("gunShot.mp3");

    buzzer = loadSound("buzzer.wav");

   // gun_shooting = loadAnimation("gun.png", "gun2.png");
}

function setup () {
   
    fishGroup=createGroup();

    sharkGroup=createGroup();

    jellyFishGroup=createGroup();

    octopusGroup=createGroup();
   
    clamGroup=createGroup();

    createCanvas(windowWidth, windowHeight);

    crosshair = createSprite(200,180,20,20);
    crosshair.addImage(crosshair_moving);
   crosshair.scale = 3;


    score = 4;

}

function draw() {
    background(180);
    background("lightblue");
  
    crosshair.y=World.mouseY;
    crosshair.x=World.mouseX;


    if(fishGroup.isTouching(crosshair)){
        fishGroup.destroyEach();
        score = score + 2;
        gunShot.play()
        
      }

      if(sharkGroup.isTouching(crosshair)){
        sharkGroup.destroyEach();
        score = score + 4;
        gunShot.play()
        
      }

      if(jellyFishGroup.isTouching(crosshair)){
        jellyFishGroup.destroyEach();
        score = score - 7;
        buzzer.play()
        
      }

      if(jellyFishGroup.isTouching(octopus)){
        jellyFishGroup.destroyEach();
        
      }

      if(sharkGroup.isTouching(crosshair)){
        sharkGroup.destroyEach();
        score = score + 4;
        gunShot.play()
        
      }

      crosshair.setCollider("rectangle",0,0,10,10);

    text("Score: "+ score, 500,50);
  
   

    spawnFish();

    spawnShark();

    spawnjellyFish();

    spawnoctopus();
    
    drawSprites();


    }
  

function spawnFish() {
  if (frameCount % 15 === 0) {
    fish = createSprite(1400,1000,50,10);
    fish.addImage(fish_image);
    fish.y = Math.round(random(100,600));
    fish.scale = 1.5;
    fish.velocityX = -5;
    fish.lifetime = 1500;
    fish.velocityX= ( -(score/4));
    fishGroup.add(fish);

  }
}

  function spawnShark() {
    if (frameCount % 80 === 0) {
      shark = createSprite(1400,1000,50,10);
      shark.addImage(shark_image);
      shark.y = Math.round(random(100,600));
      shark.scale = 1;
      shark.velocityX = -5;
      shark.lifetime = 1500;
      shark.velocityX= ( -(score/4));
      sharkGroup.add(shark);
  
    }
    
}

function spawnjellyFish() {
    if (frameCount % 40 === 0) {
      jellyFish = createSprite(1400,1000,50,10);
      jellyFish.addImage(jellyFish_image);
      jellyFish.y = Math.round(random(150,660));
      jellyFish.scale = 1.5;
      jellyFish.velocityX = -10;
      jellyFish.lifetime = 1500;
      jellyFishGroup.add(jellyFish);
  
    }
    
}

function spawnoctopus() {
    if (frameCount % 40 === 0) {
      octopus = createSprite(1400,1000,50,10);
      octopus.addImage(octopus_image);
      octopus.y = Math.round(random(150,660));
      octopus.scale = 1.55;
      octopus.velocityX = -12;
      octopus.lifetime = 1500;
      octopusGroup.add(octopus);
  
    }
    
}

console.log("Hi! Nice to see you opened the console...This game was inspired by my little sister. I asked if I made her a game what should it be about...Her answer was a game where you catch fish by shooting them? Weird I know, but it was intresting none the less. So here we are now. So each animal has diffrent effects if caught. The most common one, the fish only gives 2 points if caught. The shark much smaller and less common gives a total of 4 points. However the jelly fish when shot decrases your points by 7! So my little sister told me to add octopuses which could eat the jellfishes. So I did. Hopefull you enjoyed the game! It was fun making it...I know my graphics and coding skills are not the best, but I tried. Enjoy the game! One last thing to play this game its a good idea to have a high refresh screen. insert:smileyface error");