var n = document.getElementById('n');
var e = document.getElementById('e');
var s = document.getElementById('s');
var w = document.getElementById('w');

n.addEventListener('click', function(){
  console.log('go north');
})

s.addEventListener('click', function(){
  console.log('go south');
})

e.addEventListener('click', function(){
  console.log('go south');
})

w.addEventListener('click', function(){
  console.log('go west');
})

function moveNorth(){
  console.log("Go North");
}

function moveEast(){
  console.log("Go East");
}

function moveSouth(){
  console.log("Go South")
}

function moveWest() {
  console.log("Go West");
}



//GRID
var grid = function(x, y){
  var totalCells = x * y;
  var cells = [];
  var unvisited = [];

  for(var i = 0; i < y; i++){
      cells[i] = [];
      unvisited[i] = [];
      for (var j = 0; j < x; j++) {
        cells[i][j] = [0, 0, 0, 0];
        unvisited[i][j] = true;
      }
  }

  var currentCell = [Math.floor(Math.random() * y), Math.floor(Math.random() * x)];
  var path = [currentCell];

  // unvisited[currentCell[0]][currentCell[1]] = false;

  var visited = 1;

  while(visited < totalCells){
    var possible = [[currentCell[0]-1, currentCell[1], 0, 2], // y value of neighbor (top) cell is inside the grid
                    [currentCell[0], currentCell[1]+1, 1, 3], // x value of neighbor cell (right) is inside the grid
                    [currentCell[0]+1, currentCell[1], 2, 0], // y value of the neighbor cell (below) is inside the grid
                    [currentCell[0], currentCell[1]-1, 3, 1]]; // x value of neighbor cell (left) is inside the grid
  var neighbors = [];
    for(var l = 0; l < 4; l++){
      if(possible[l][0] > -1 &&
        possible[l][0] < y &&
        possible[l][1] > -1 &&
        possible[l][1] < x &&
        unvisited[possible[l][0]] [possible[l][1]]){
          neighbors.push(possible[l]);
        }
    }

    if(neighbors.length){
        var next = neighbors[ Math.floor(Math.random() * neighbors.length) ];

        cells[ currentCell[0] ] [ currentCell[1] ] [next[2] ] = 1;
        cells[ next[0] ] [ next[1] ] [ next[3] ] = 1;
        unvisited[ next[0] ] [ next[1] ] = false;

        visited++;
        currentCell = [ next[0], next[1] ];
        path.push(currentCell);
    }else{
      currentCell = path.pop();
    }

  }
  return cells;

}(4, 4);

var table = document.getElementById('table');

var form = document.createElement('form');

var label1 = document.createElement('label');
label1.textContent = "Your Name";
label1.setAttribute('for', 'name');
var input1 = document.createElement('input');
input1.type = 'text';
input1.placeholder = "Your Name";

var label2 = document.createElement('label');
label2.textContent = "Your Email";
label2.setAttribute('for', 'email');
var input2 = document.createElement('input');
input2.id = 'email';
input2.type = 'emial';
input2.placeholder = "Your Email";
var submit = document.createElement('input');
submit.id = 'submit';
submit.type = 'submit';
submit.value = 'submit';


label1.appendChild(input1);
label2.appendChild(input2);
form.appendChild(label1);
form.appendChild(label2);
form.appendChild(submit);
table.appendChild(form);

var formI1 = document.getElementById('name');
var formI2 = document.getElementById('email');
var formBtn = document.getElementById('submit');

formBtn.addEventListener('click', function(evt){
  alert(input1.value + ' : ' + input2.value);
});


//alert('formI1' + 'formI2');
