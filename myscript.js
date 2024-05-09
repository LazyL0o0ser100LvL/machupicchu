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

const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slider-button");
    const sliderScrollbar = document.querySelector(".container-6 .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;

        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }



        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp)
        }

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp)
    })

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
    }

    const updateScrollThumbPosition = ()=> {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    imageList.addEventListener("scroll", () => {
        handleSlideButtons();
        updateScrollThumbPosition();
    })
}

window.addEventListener("load", initSlider);


