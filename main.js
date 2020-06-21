import customers from './customers.js'

let container = document.getElementById("profileContainer") 
console.log(container);
for (let customer of customers) {

    let article = document.createElement("article"); //however many are in the loop, build an article 
    article.classList.add("hide-child", "relative", "ba", "b--black-20", "mw5");
    let image = document.createElement("img");
    image.src = `${customer.picture.large}`;
    article.append(image);
   
    function strCap(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    let name = document.createElement("h1"); //this will have opening closing p-tags
    name.classList.add("f6", "db", "link", "dark-blue", "hover-blue");
    let nameText =  `${strCap(customer.name.first)} ${strCap(customer.name.last)}`;
    name.append(nameText) //get the name div and add something into it
    article.append(name);
    container.append(article); //big container housing information i need appended
    
    let gender = document.createElement("p"); //this will have opening closing p-tags
    gender.classList.add("f6", "db", "link", "dark-blue", "hover-blue");
    let genderText = `${strCap(customer.gender)}`;
    gender.append(genderText) //get the name div and add something into it
    article.append(gender);
    container.append(article); //big container housing information i need appended 

    let location = document.createElement("p"); //this will have opening closing p-tags
    location.classList.add("f6", "db", "link", "dark-blue", "hover-blue");
    let locationText = `${customer.location.street}`;
    location.append(locationText) //get the name div and add something into it
    article.append(location);
    container.append(article); //big container housing information i need appended 


    let locationCity = document.createElement("p"); //this will have opening closing p-tags
    locationCity.classList.add("f6", "db", "link", "dark-blue", "hover-blue");
    let locationCityText = `${customer.location.city},
    ${customer.location.state} ${customer.location.postcode}`;
    locationCity.append(locationCityText) //get the name div and add something into it
    article.append(locationCity);
    container.append(article); //big container housing information i need appended 


    let email = document.createElement("p"); //this will have opening closing p-tags
    email.classList.add("f6", "db", "link", "dark-blue", "hover-blue");
    let emailText = `${customer.email}`;
    email.append(emailText) //get the name div and add something into it
    article.append(email);
    container.append(article); //  DOM element(div) something included in tags housing information i need appended 


   

    // let gender = document.createElement("p"); //this will have opening closing p-tags
    // gender.classList.add("f6", "db", "link", "dark-blue", "hover-blue");
    // let genderText = `${customer.gender}`;
    // gender.append(genderText) //get the name div and add something into it
    // article.append(gender);
    // container.append(gender); //big container housing information i need appended 


    
   



}
