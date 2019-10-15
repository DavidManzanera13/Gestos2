var app={
    inicio: function(){
        var btnClaro = document.querySelector('#claro');
        var btnObscuro = document.querySelector('#obscuro');
 
        btnClaro.addEventListener('click',this.ponloClaro, false);
        btnObscuro.addEventListener('click', this.ponloBobscuro, false);
    },
        ponloClaro: function(){
            document.body.className = 'claro';
        },
        ponloBobscuro: function(){
            document.body.className = 'obscuro';
        },
   
 };
 
 if('addEventListener' in document){
    document.addEventListener('DOMContentLoaded', function(){
        FastClick.attach(document.body);
        app.inicio();
    }, false);
 }
 