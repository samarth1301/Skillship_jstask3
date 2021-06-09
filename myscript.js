function del(){
    let num=document.getElementById('num').value;
    document.getElementById('num').value='';
    let arr=[11,22,34,42,50,63,71,85,94,103];
    document.getElementById('buttons').innerHTML='';
    for(i=0;i<arr.length;i++){
        if(arr[i]%num==0){
            var btn=document.createElement('button');
            btn.innerHTML=arr[i];
            document.getElementById('buttons').appendChild(btn);
        }
    }
}