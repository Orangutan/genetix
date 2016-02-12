window.onload = function() {
  var paper = new Raphael(document.getElementById('canvas_container'), 500, 500);

  // var monkey = [0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1];
  
  var monkey = {
    genome: [0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1],
    physique: [2,2,3]
  }
  
  var whale = {
    genome: [1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1],
    physique: [3,1,2]
  }
  
  var piranha = {
    genome: [0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1],
    physique: [1,3,1]
  }
  
  var cuckoo = {
    genome: [0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0],
    physique: [1,2,2]
  }
  
  var newCreature = function(attack, defence, body) {
    
    var size = body.physique[0];
    var speed = body.physique[2];
    var stamina = body.physique[3];
    
    var top = function(genome) {

      for(var i = 0; i <= 15; i +=1) {

        var hor = 0;
        var ver = 0;
        var sq = 6+(size*4);
        
        if(i > 11) {
          ver = sq*4;
          hor = (i-12)*sq;
        } else if(i > 7) {
          ver = sq*3;
          hor = (i-8)*sq;
        } else if(i > 3) {
          ver = sq*2;
          hor = (i-4)*sq;
        } else {
          hor = i*sq;
          ver = sq;
        }

        var matrix = paper.rect(hor, ver, sq, sq);
        matrix.attr({'stroke-width': 0})

        if(genome[i]){
          matrix.attr({fill: 'black'});
        }
      }
    }
    top(attack.genome);
    
    var bottom = function(genome) {
    
      genome.reverse();
    
      for(var i = 0; i <= 15; i +=1) {
        var hor = i*10;
        var ver = 0;
        
        var hor = 0;
        var ver = 0;
        var sq = 6+(size*4);
    
        if(i > 11) {
          ver = sq*4;
          hor = (i-12)*sq;
        } else if(i > 7) {
          ver = sq*3;
          hor = (i-8)*sq;
        } else if(i > 3) {
          ver = sq*2;
          hor = (i-4)*sq;
        } else {
          hor = i*sq;
          ver = sq;
        }
    
        var matrix = paper.rect(hor, (ver + 4*sq), sq, sq);
        matrix.attr({'stroke-width': 0})
      
        if(genome[i]){
          matrix.attr({fill: 'black'});
        }
      }
    }
    bottom(defence.genome);
    
  };
  
  newCreature(cuckoo, monkey, whale);

}