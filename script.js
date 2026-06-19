/* typing effect */

const words = [
    "ECE Student",
    "Python Developer",
    "IoT Enthusiast",
    "Embedded Systems Learner",
    "Future Engineer"
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type(){

    currentWord = words[i];

    if(isDeleting){

        document.getElementById("typing").textContent =
        currentWord.substring(0,j--);

    }

    else{

        document.getElementById("typing").textContent =
        currentWord.substring(0,j++);

    }

    if(!isDeleting && j === currentWord.length){

        isDeleting = true;

        setTimeout(type,1000);

        return;
    }

    if(isDeleting && j === 0){

        isDeleting = false;

        i++;

        if(i===words.length){

            i=0;
        }
    }

    setTimeout(type,isDeleting?60:120);
}

type();


/* particles */

particlesJS("particles-js",{

  particles:{

    number:{ value:80 },

    color:{ value:"#00ffff" },

    line_linked:{
        enable:true
    },

    move:{
        speed:3
    }

  }

});


/* AOS */

AOS.init({
    duration:1000
});


/* smooth scroll */

document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({
            behavior:"smooth"
        });

    });
});
