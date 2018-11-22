let doorImage1 = document.getElementById('door1');
doorImage1.onclick = () => {
  doorImage1.src = openDoor1;
};
const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";

let doorImage2 = document.getElementById('door2');
doorImage2.onclick = () => {
  doorImage2.src = openDoor2;
};
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";

let doorImage3 = document.getElementById('door3');
doorImage3.onclick = () => {
  doorImage3.src = openDoor3;
};
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
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
const numCloseDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
randomChoreDoorGeneretor();
