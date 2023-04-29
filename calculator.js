var screen =document.getElementById('screen');

function btnClick(value)
{
    screen.value+=value;
}
function btnClear()
{
    screen.value=" ";
}
function btnResult()
{   
     screen.value=eval(screen.value);
}
   
