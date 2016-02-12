window.onload = function() {
  var paper = new Raphael(document.getElementById('canvas_container'), 500, 500);

  var monkey = {
    genome: [[0,1,1,0],
             [1,1,1,1],
             [0,0,0,0],
             [1,0,0,1]],
    size: 2,
    speed: 2,
    stamina: 3
  }

  var whale = {
    genome: [[1,1,1,1],
             [1,0,0,1],
             [1,0,0,1],
             [1,0,0,1]],
    size: 3,
    speed: 1,
    stamina: 2
  }

  var piranha = {
    genome: [[0,1,1,0],
             [1,1,1,1],
             [1,1,1,1],
             [1,0,0,1]],
    size: 1,
    speed: 3,
    stamina: 1
  }

  var cuckoo = {
    genome: [[0,1,1,0],
             [1,1,1,1],
             [0,1,1,0],
             [0,1,1,0]],
    size: 1,
    speed: 2,
    stamina:2
  }

  var setRow = function(row, verticalStart, cellSize) {
    return _.map(row, function(cell, index) {
      var horizontalStart = cellSize * index;
      var dot = paper.rect(horizontalStart, verticalStart, cellSize, cellSize)
                     .attr({'stroke-width': 0});
      if (cell == 1) { dot.attr({fill: 'black'}); }
      return dot
    })
  }

  var newCreature = function(attack, defence, body) {

    var size = body.size;
    var speed = body.speed;
    var stamina = body.stamina;
    var cellSize = 6+(size*4);

    var creatureMatrix = paper.set()

    // drawing top
    _.each(attack.genome, function(row, i) {
      vPos = cellSize * i
      _.each(row = setRow(row, vPos, cellSize), function(cell){ creatureMatrix.push(cell) } );
    })
    //drawing bottom
    _.each(defence.genome.reverse(), function(row, i) {
      vPos = (cellSize*4) + (cellSize * i)
      _.each(setRow(row.reverse(), vPos, cellSize), function(cell){ creatureMatrix.push(cell) } );
    })
    creatureMatrix.translate(100,100)
  }

  var cmw = newCreature(cuckoo, monkey, whale);

}
