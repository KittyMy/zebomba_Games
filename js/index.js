let container = document.querySelector('.container'),
    go = document.getElementById('go');

const arr = [
    0, 125, 200, -147, -80, 296, 314, 387, 350, 311, 375, 426, 470, 504,
    545, 593, 679, 633, 659, 629, 558, 548, 
    626, 698, 797, 888, 984, 1057, 1120, 1134, 1076, 1015,
    958, 894, 897, 969, 983, 926, 853, 796, 755, 694, 680,
    720, 762, 788, 820, 870, 845, 926, 993, 1040, 1058
];


    // container.onclick = function(e) {
        // console.log(e.clientX, 'Eto X');
        // console.log(e.clientY, 'Eto Y');
    
        // console.log(path.getPointAtLength(e.clientX), 'etoX');
        // console.log(path.getPointAtLength(e.clientY), 'etoY');
       
        // console.log(path.getPointAtLength(e));
        
        // woman.getBoundingClientRect().x = e.clientX;
        // woman.style.bottom = e.clientY;
    // };

    function positionCar() {
      
        let path = document.getElementById("path1");

        var pathLen = path.getTotalLength();

        var dist = arr.shift();
        // console.log(dist.a, 'x');
        // console.log(dist.b, 'y');

        // console.log(path.getPointAtLength(dist.a), 'ha-ha')
        // console.log(path.getPointAtLength(dist.b).y, 'ho-ho')

        // path.getPointAtLength(dist.a).x = dist.a
        
        let pos = path.getPointAtLength(dist);
        // console.log(pos, 'position');

        let woman = document.getElementById('woman_sm');
        woman.setAttribute("transform", `translate(${pos.x},${pos.y})`);

      }
    
      go.addEventListener('click', positionCar);
      positionCar();