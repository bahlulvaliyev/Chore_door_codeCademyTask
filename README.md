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

