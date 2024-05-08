function toggle(element) {

    if(element.classList.contains("active")) {
        element.classList.remove("active");
    }
    else {
        element.classList.add("active");
    }
}

const tours = [{
    name: "MACHU PICCHU FULL DAY",
    description: "Experience the best of Machupicchu & Huayna",
    date: "19.07",
    price: "615",
    imageUrl: "./img/fullday & Huayna.jpg"
}, {
    name: "2-DAY INCA TRAIL",
    description: "Explore Short Inca Trail & Machu Picchu",
    date: "12.08",
    price: "638",
    imageUrl: "./img/incatrail.jpg"
}, {
    name: "MACHU PICCHU CLASSIC TOUR 4 DAYS",
    description: "Explore mysterious Inca settlements & Machu Picchua",
    date: "18.08",
    price: "735",
    imageUrl: "./img/экскурсовод.jpg"
}, {
    name: "MACHU PICCHU AMAZON TRIP 7 DAYS",
    description: "Explore the Andes and Amazon Jungle",
    date: "24.08",
    price: "1538",
    imageUrl: "./img/Amazon2.jpg"
}]

function tourDates(element, index) {
    let tourElements = document.getElementsByClassName("tour-date") 
    
    for (let tourDay of tourElements) {
        tourDay.classList.remove("active")
    }
    
    element.classList.add("active")    

    let selectedTour = tours[index]

    document.getElementById("price").textContent = selectedTour.price

    document.getElementById("date").textContent = selectedTour.date

    document.getElementById("mpfd").textContent = selectedTour.name

    
    const fullHuayna = document.getElementById("imgfull");
    fullHuayna.src = selectedTour.imageUrl;
    
    
}