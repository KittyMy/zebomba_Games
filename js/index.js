let container = document.querySelector('.container'),
    go = document.getElementById('go'),
    woman = document.getElementById('woman_sm');

// const arr = [
//     0, 524, 450, 363, 282, 296, 314, 387, 350, 311, 375, 426, 470, 504,
//     545, 593, 679, 633, 659, 629, 558, 548, 
//     626, 698, 797, 888, 984, 1057, 1120, 1134, 1076, 1015,
//     958, 894, 897, 969, 983, 926, 853, 796, 755, 694, 680,
//     720, 762, 788, 820, 870, 845, 926, 993, 1040, 1058
// ];
const arr = [0, 300, 400];
    // container.onclick = function(e) {
        // console.log(e.clientX, 'Eto X');
        // console.log(e.clientY, 'Eto Y');
    
        // console.log(e.clientX);
        // console.log(e.clientY);
        
        // woman.getBoundingClientRect().x = e.clientX;
        // woman.style.bottom = e.clientY;
    // };

    function positionCar() {
        // var scrollY = window.scrollY || window.pageYOffset;
        // var maxScrollY = document.documentElement.scrollHeight - window.innerHeight;

        var path = document.getElementById("path1");
        var woman = document.getElementById('woman');
      
        var pathLen = path.getTotalLength();

        var dist = arr.shift();
        console.log(dist);
        
        var pos = path.getPointAtLength(dist);
        console.log(pos);
        // console.log(pos.x);
        // console.log(pos.y);

        woman.setAttribute("transform", "translate(" + pos.x + "," + pos.y + ")");

      }
      
    //   window.addEventListener("scroll", positionCar);

    go.addEventListener('click', positionCar);
      
      positionCar();