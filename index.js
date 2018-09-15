//FACTORY FUNCTION MAKING A NEW ADDRESS OBJECT

const address = {
  street: "23457 Newhope St",
  city: "Metropolis",
  zipCode: 92567
};

function addressMaker(street, city, zipCode) {
  return {
    street: street,
    city: city,
    zipCode: zipCode
  };
}

const newAddress = addressMaker("23456 Newhope", "Metropolis", 98765);

console.log(newAddress);

//CONSTRUCTOR FUNCTION MAKING A NEW ADDRESS OBJECT

function AddressCreator(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const address2 = new AddressCreator("infinite Ln", "New York", 98467);

console.log(address2);
