let timer = null;
let tempObj = null;

for(var input of document.getElementsByClassName('aqui'))
{
    input.addEventListener('input', function(){
        
        tempObj = this;

        clearTimeout(timer);
        timer = setTimeout(function(){
            console.log(tempObj.value, tempObj);
        }, 500);
    })
}