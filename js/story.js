var questions = 7;

function buildStory() {
  var name1 = document.getElementById("name1").value;
  var ocupation1 = document.getElementById("occupation1").value;
  var noun1 = document.getElementById("noun1").value;
  var noun2 = document.getElementById("noun2").value;
  var noun3 = document.getElementById("noun3").value;
  var noun4 = document.getElementById("noun4").value;
  var place1 = document.getElementById("place1").value;
  var story = "There once was a man named " + name1 + " who was king of the " + ocupation1 + "s. He had " + noun1 + ", " + noun2 + " and " + noun3 + " beyond your wildest dreams. Before they hung him from the gallows, these were the final words he said: " + '"My ' + noun4 + " is yours for the taking, but you'll have to find it first. " +  "I left everything I own in " + place1 + '." Ever since, ' + ocupation1 + "s from all over the world set sail for " + place1 + " searching for the " + noun4 + ", the treasure that would make their dreams come true!"
  document.getElementById("main").innerHTML = story;
}

document.getElementById("submit").addEventListener("click", buildStory, false);
document.getElementById("reset").addEventListener("click", location.reload(), false);
