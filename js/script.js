let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let openDoor1;
let openDoor2;
let openDoor3;
let numCloseDoors = 3;
let botDoorPath =  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let closedDoorPath ="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
let startButton = document.getElementById('start');
let currentlyPlaying = true;
doorImage1.onclick =()=>{
  startRound();
  if(currentlyPlaying && !isClicked(doorImage1)){
     	doorImage1.src = openDoor1;
  		playDoor(door1);
  }
};
doorImage2.onclick = () => {
  startRound();
  if(currentlyPlaying && !isClicked(doorImage2)){
    doorImage2.src = openDoor2;
  	playDoor(door2);
}
};
doorImage3.onclick = () => {
  startRound();
 if(currentlyPlaying && !isClicked(doorImage3)){
  doorImage3.src = openDoor3;
  playDoor(door3);
  }
};
function gameOver(status){
  currentlyPlaying = false;
  if(status === 'win'){
    startButton.innerHTML = "You win. Play again";
  }
  else{
    startButton.innerHTML = "Game Over! Playe again?";
  }
}
const randomChoreDoorGeneretor = () => {
  const choreDoor = 						Math.floor(Math.random()*numCloseDoors);
  if(choreDoor==0){
   		openDoor1 = botDoorPath;
    	openDoor2 = beachDoorPath;
    	openDoor3 = spaceDoorPath;
   }
  else if(choreDoor==1){
      openDoor2 = botDoorPath;
    	openDoor1 = beachDoorPath;
    	openDoor3 = spaceDoorPath;
   }
  else{
    	openDoor3 = botDoorPath;
    	openDoor1 = beachDoorPath;
    	openDoor2 = spaceDoorPath;
  }
};
let playDoor = (door) => {
  numCloseDoors--;
  if(numCloseDoors === 0){
    	gameOver('win');
  }
};
let isBot = (door) => {
  if(door.src === botDoorPath){
     return true;
     }
  else{
    return false;
  }
}
let isClicked = (door) =>{
  if(door === closeDoorPath){
     return false
   }
  else{
    return true;
  }
}
let startRound = () => {
  doorImage1 = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = "Good luck!";
  currentlyPlaying = true;
	randomChoreDoorGeneretor();
}
startButton.onclick = () => {
  	if(currentlyPlaying === false){
    startRound();
}
}