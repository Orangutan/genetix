window.onload = function() {
    var paper = new Raphael(document.getElementById('canvas_container'), 500, 500);
    
    // for(var i = 0; i < 5; i+=1) {
    //     var multiplier = i*5;
    //     paper.circle(250 + (2*multiplier), 100 + multiplier, 50 - multiplier);
    // }
    
    
    // var gene = [[0,1,1,0],
    //             [1,1,1,1],
    //             [0,0,0,0],
    //             [1,0,0,1]];

    for(var i = 0; i <= 15; i +=1) {
      var hor = 0;
      var ver = 0;
      var gene = [0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1];
      
      if(i > 11) {
        ver = 40;
        hor = (i-12)*10;
      } else if(i > 7) {
        ver = 30;
        hor = (i-8)*10;
      } else if(i > 3) {
        ver = 20;
        hor = (i-4)*10;
      } else {
        hor = i*10;
        ver = 10;
      }
      
      var matrix = paper.rect(hor, ver, 10, 10);
      matrix.attr({'stroke-width': 0})
      
      if(gene[i]){
        matrix.attr({fill: 'black'});
      }
    }
    
    // for(var i = 1; i <= 4; i +=1) {
    //   var hor = i*10;
    //
    //   paper.rect(hor, 20, 10, 10);
    // }
    //
    // for(var i = 1; i <= 4; i +=1) {
    //   var hor = i*10;
    //
    //   paper.rect(hor, 30, 10, 10);
    // }
    //
    // for(var i = 1; i <= 4; i +=1) {
    //   var hor = i*10;
    //
    //   paper.rect(hor, 40, 10, 10);
    // }
    
    
}