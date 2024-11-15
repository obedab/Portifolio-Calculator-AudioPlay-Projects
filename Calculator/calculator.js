var screen=document.querySelector('#screen');
  var btn=document.querySelectorAll('.btn');
  // var power=documen.getElementById('power');

  for(item of btn){
    item.addEventListener('click',(e)=>{
      btnText=e.target.innerText;
      console.log(btnText);

      if(btnText == 'x')
      {  
        
        btnText = '*';
      }  
      if(btnText == '÷')
      {
        btnText = '/';
      } 
      if(btnText == 'AC'){
        screen.value = '';
      }
      if(btnText == 'x y'){
        btnText = '**';
      }
      
      screen.value+=btnText;
    });
  }

  function sin()
  {
      screen.value=Math.sin(screen.value);
  }
  function cos(){
      screen.value=Math.cos(screen.value);
  }
  function tan(){
      screen.value=Math.tan(screen.value);
  }
  function log(){
      screen.value=Math.log(screen.value);
  }
  function e(){
    screen.value= Math.E;
  }

  function pi(){
    screen.value= Math.PI;
  }

  function pow(x,y){
    return x**y;
  }

  
  function fact() {
    var  i,num,f;
    f=1
    num=screen.value;
    for(i = 1; i <= num; i++){
      f=f*i;
    }
    i=i-1;
    screen.value=f;
  }
 
  function sqrt(){
    screen.value=Math.sqrt(screen.value,2)
  }
  function backspc(){
    screen.value=screen.value.substr(0,screen.value.length-1);
  }
      
    



  
  
  
  
