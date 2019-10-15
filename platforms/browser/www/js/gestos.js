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

app.inicio();
