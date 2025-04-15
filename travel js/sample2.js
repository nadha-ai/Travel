const menus = document.querySelector("nav ul");
const header = document.querySelector("header");
const menuBtn =document.querySelector(".menu-btn");
const closeBtn=document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
    menus.classList.add("display");
});

closeBtn.addEventListener("click", () => {
    menus.classList.remove("closeBtn");
});

// scroll sticky navbar
window.addEventListener("scroll",() => {
    if(document.documentElement.scrollTop > 20){
        header.classicList.add("sticky");
    }else {
        header.classList.remove("sticky");
    }
});


const countersEl = document.querySelectorAll(".number");
countersEl.forEach((counter) => {
    counter.textContent = 0;

    incrementCounter();

    function incrementCounter() {
        let currentNum = +counter.textContent; 
        const dataCeil = counter.getAttribute("data-ceil"); 
        const increment = dataCeil / 25;

        currentNum = Math.ceil(currentNum + increment);

        if (currentNum < dataCeil) {
            counter.textContent = currentNum;
            setTimeout(incrementCounter, 70); 
        } else {
            counter.textContent = dataCeil;
        }
    }
});























