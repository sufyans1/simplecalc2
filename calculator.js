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
function btnDelte()
{
    var strscreen=screen.value.toString();
    const arrscreen=strscreen.split('');
    arrscreen.pop();
    strscreen=arrscreen.join("");
    screen.value=strscreen;
}
