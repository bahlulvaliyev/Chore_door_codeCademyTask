# Chore_door_codeCademyTask

#HTML_code
<!DOCTYPE html>
<html>
  <head>
    <title>Chore Door!</title>
    <link href="./css/style.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Work+Sans" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="./js/script.js"></script>
  </head>
  <body>
  <!--first header-->
    <div class="header">
      	<img src="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/logo.svg">
    </div>
      <!--twice header-->
    <div class="title-row">
     	 <img src="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/star.svg">
      <p class="instructions-title">Instructions</p>
      <img src="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/star.svg">
     </div>
    <!--First table-->
    <table class="instructions-row">
     	<tr>
        	<td class="instructions-number">1</td>
       		<td class="instructions-text">Hiding behind one of these doors is the ChoreBot.</td>
      </tr> 
      <tr>
        <td class="instructions-number">2</td>
       	<td class="instructions-text">Your mission is to open all of the doors without running into the ChoreBot</td>
      </tr> 
      <tr>
        <td class="instructions-number">3</td>
       	<td class="instructions-text">If you manage to avoid the ChoreBot until you open the very last door, you win!</td>
      </tr> 
      <tr>
        <td class="instructions-number">4</td>
       	<td class="instructions-text">See if you can score a winning streak!</td>
      </tr> 
     </table>
      <!--First section-->
	<div class="door-row">
    	<img class="door-frame" id="door1" src="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg">
  <img class="door-frame" id="door2" src="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg"><img class="door-frame" id="door3" src="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg">
    </div>
    <!--Button section-->
    <div id="start" class="start-row">Good luck!</div>
  </body>
</html>




#CSS_code




body {
  background-color: #010165;
  margin: 0px;
}
.door-frame{
  cursor:pointer;
  padding: 10px;
}
.header{
  background-color:#00ffff;
  text-align: center;
}
.title-row{
  margin-top:42px;
  margin-bottom:21px;
  text-align: center;
}
.instructions-title{
  display:inline;
   color:#00ffff;
  font-size:18px;
  color:#00ffff;
  font-family: 'Work Sans';
}
.instructions-row{
  margin:0 auto;
  width: 400px;
}
.instructions-number{
  padding-right: 25px;
  font-family: 'Work Sans';
  font-size: 36px;
  color: #00ffff;
}
.instructions-text{
  padding:10px;
  font-family:'Work Sans';
  font-size: 14px;
  color: #ffffff;
}
.door-row{
  text-align:center;
}
.start-row{
  margin: 0 auto;
  width: 120px;
  height: 43px;
  font-family: 'Work Sans';
  background-color: #eb6536;
  padding-top: 18px;
  font-size:18px;
  text-align: center;
  color: #010165;
  margin-bottom: 21px;
  cursor: pointer;
}

#Javascript_code

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













