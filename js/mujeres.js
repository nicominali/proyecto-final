function ajax() {
    const http = new XMLHttpRequest ();
    const url = '/pages/m-segunda-pagina.html';

    
    http.onreadystatechange = function (){
        if(this.readyState === 4 && this.status === 200){
            console.log(this.response);
            document.getElementById("masRopa").innerHTML = this.responseText;
        }
    }
    http.open("GET" , url);
    http.send();
}

document.getElementById("boton").addEventListener('click' function (){
    ajax();
});
