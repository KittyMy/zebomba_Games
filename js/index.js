let container = document.querySelector('.container'),
    go = document.getElementById('go'),
    path = document.getElementById("path1"),
    pathLen = path.getTotalLength(),
    woman = document.getElementById('woman_sm'),
    rating = document.getElementById('rating'),
    closeRate = document.querySelector('.close');

//Массив дистанции(точки на карте)
const arr = [
    0, 100, 177, 260, 330, 420, 485, 560, 665,
    747, 850, 915, 970, 1068, 1125, 1230, 1320, 
    1410, 1485, 1560, 1635, 1730, 1805, 1880, 1975, 
    2085, 2180, 2260, 2325, 2395, 2465, 2530, 2590,
    2650, 2725, 2800, 2865, 2920, 2995, 3065, 3120, 
    3170, 3230, 3290, 3345, 3420, 3485, 3550, 3645,
    3730, 3825, 3875, 3965
];

rating.onclick = function() {
    document.body.classList.add('openModal');

    let main = document.getElementById('listing');    

    data.rating.map(item => {
        let isActive = data.friends.find(el => el.id === item.id) ? "active" : "";
        
        main.innerHTML += `
                <div class="once ${isActive}">
                    <span id="place">${item.id}</span> 
                    <span id="name">${item.name} ${item.lastName}</span> 
                    <span id="exp">${item.points}</span>
                </div>
            `;
    });
};

closeRate.onclick = function() {
    document.body.classList.remove('openModal');
};

//Функция для плавной ходьбы
let prev = 0;
let pos;
function positionCar() {     
    let dist = arr.shift();
    let diff = dist - prev,
        i = 0;
    let intervalId = setInterval(()=>{
        if(i > diff){
            prev = dist;
            return clearInterval(intervalId);
        };
        pos = path.getPointAtLength(prev + i);
            woman.setAttribute("transform", `translate(${pos.x},${pos.y})`);
            
        i+= 5;    
    }, 40);
    
}

woman.addEventListener('mouseover', function() {

    woman.animate([
        {transform: 'translateY(-13)'},
        {transform: 'translateY(320px) translateX(16px)'}
    ]), {
        duration: 1000,
        iterations: Infinity
    };
    // let style = window.getComputedStyle(this);
    // let matrix = style.transform;
    // woman.setAttribute("transform", `translate(${pos.x},${pos.y})`);
    // console.log(pos); 
    
    // this.setAttribute("transform", `translate(${pos.x},${pos.y + 5})`);
});

go.addEventListener('click', positionCar);
positionCar();