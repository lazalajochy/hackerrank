//https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem?isFullScreen=true


var k = 2, c = [0,0,1,0,0,1,1,0];


  var result = jumping(k,c);

  function jumping(k,c){
      var result = 100, x = 0;
      for(var i = 0; i <= c.length; i++){
          x+=k;
          if(x > c.length - 1){
              x = x - c.length;
              c[x] == 1 ? result-=3 : result-=1;
              if(x == 0){
                  break;
              }
          }else{
              c[x] == 1 ? result-=3 : result-=1;
          }
      };
      return result;
  };