var questions = 7;

function buildStory() {
  var name1 = prompt ("Welcome to JosiahLibs. Please give me a man's name." + " [" + questions + " words left]")
  var ocupation1 = prompt ("Please give me an ocupaton" + " [" + (questions -= 1) + " words left]")
  var noun1 = prompt ("Please give me a plural noun." + " [" + (questions -= 1) + " words left]")
  var noun2 = prompt ("Please give me a plural noun." + " [" + (questions -= 1) + " words left]")
  var noun3 = prompt ("Please give me a plural noun." + " [" + (questions -= 1) + " words left]")
  var noun4 = prompt ("Please give me a noun." + " [" + (questions -= 1) + " words left]")
  var place1 = prompt ("Please give me a place." + " [" + (questions -= 1) + " words left]")
  alert("All done! Here's your story.");
  var story = "There once was a man named " + name1 + " who was king of the " + ocupation1 + "s. He had " + noun1 + ", " + noun2 + " and " + noun3 + " beyond your wildest dreams. Before they hung him from the gallows, these were the final words he said: " + '"My ' + noun4 + " is yours for the taking, but you'll have to find it first. " +  "I left everything I own in " + place1 + '." Ever since, ' + ocupation1 + "s from all over the world set sail for " + place1 + " searching for the " + noun4 + ", the treasure that would make their dreams come true!"
  document.getElementById("main").innerHTML = story;
}

document.getElementById("submit").addEventListener("click", buildStory(), false);
