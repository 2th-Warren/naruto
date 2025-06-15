

const canSellAlcohol = (registrationCard) => {
  return registrationCard.age >= 19;
}

const registrationCard = {
  name: "Naruto",
  age:30,
  gender: "male"
};

console.log(canSellAlcohol(registrationCard)); 
