const pet = "Cat";
switch (pet) {
  case "Parrot":
    console.log("They can talk");
    break;
  case "Dog":
  case "Cat":
    console.log("Most loving pet");
    break;
  case "Fish":
    console.log("They require an aquarium");
    break;
  case "Rabbit":
    console.log("They will chew all your cables");
    break;
  default:
    console.log("You should have a pet");
}
