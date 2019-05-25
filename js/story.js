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
  document.getElementById("bg.image").backgroundImage = (url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b4978e7f-1e75-4f66-9e8f-524f5a96cc6c/d9nfsnx-64dbbf90-6141-44e3-bf87-5c966b4416f3.png/v1/fill/w_1192,h_670,q_70,strp/daily_sketch__7___one_piece__endless_ocean_by_kunokillerkarpfen_d9nfsnx-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcL2I0OTc4ZTdmLTFlNzUtNGY2Ni05ZThmLTUyNGY1YTk2Y2M2Y1wvZDluZnNueC02NGRiYmY5MC02MTQxLTQ0ZTMtYmY4Ny01Yzk2NmI0NDE2ZjMucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.FS4-Y5HI4hibXtx-y5apOr23QotFc1R8xN7pUMHRfvY))
  return story;
}

document.getElementById("submit").addEventListener("click", buildStory(), false);
