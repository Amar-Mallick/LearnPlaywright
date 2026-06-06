const data = {
    user: {
        name: "Amar", address: {
            city: "kochi"
        }
    }

};
console.log(data.user.address.city);//kochi
console.log(data.user.name);//Amar
const { user: { address: { city } } } = data;
console.log(city);//kochi


