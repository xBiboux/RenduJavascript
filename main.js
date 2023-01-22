
let i = 0;

const car = document.querySelector(".car");
const bouton1 = document.querySelector("#bouton1");
const clicked = false;

const bouton = document.querySelector("#bouton");

bouton.addEventListener("click", () => { // Pour faire apparaitre les 2 autres boutons et disparaitre le premier.
    alert("La voiture démarre.");
    document.querySelector('#bouton').classList.add('hidden');
    document.querySelector('#bouton1').classList.add('visible');
    document.querySelector('#bouton2').classList.add('visible');
    document.querySelector('#bouton1').classList.remove('hidden');
    document.querySelector('#bouton2').classList.remove('hidden');
});


bouton1.addEventListener("click", () => { // Bouton pour avancer
    onclick = () => {
        setInterval(() => {
            car.style.transform = `translateX(${i}px)`;
            i++;
        
            if (i >= window.innerWidth) { // Arrivé au bord = teleporter à gauche
                i = -800;
            }
        })
    }
});

const bouton2 = document.querySelector("#bouton2"); // Bouton pour reculer
const clicked2 = false;
bouton2.addEventListener("click", () => {
    onclick = () => {
        setInterval(() => {
            car.style.transform = `translateX(${i}px)`;
            i--;
        
            if (i <= -1400) { // Arrivé au bord = teleporter à droite
                i = 2500;
            }
        })
    }
});

const cat = document.querySelector(".cat"); // Cliquer sur le chat pour faire clignoter l'écran de toutes les couleurs
cat.addEventListener("click", () => {
    onclick = () => {
        setInterval(() => {
            document.body.style.backgroundColor = `rgb(
                ${Math.floor(Math.random() * 255)}
                ${Math.floor(Math.random() * 255)}
                ${Math.floor(Math.random() * 255)}
            )`
        }, 200);
      }
      setInterval(() => {
        cat.style.transform = `rotate(${j}deg)`; // Cliquer sur le chat pour le faire pivoter
        j++;
        });
});
let j = 0;


setInterval(() => { // Mettre le texte en arc-en-ciel
    cat.style.color = `rgb(
        ${Math.floor(Math.random() * 255)} 
        ${Math.floor(Math.random() * 255)}
        ${Math.floor(Math.random() * 255)}
        
    )`
}, 100);



