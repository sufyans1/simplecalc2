var screen=document.getElementById('screen');

function btnClick(value)
{
    screen.value+=value;
}
function btnClear()
{
    screen.value="";
}
function btnResult(value)
{
    screen.value=eval(screen.value);
}
