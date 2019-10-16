var app = {
    inicio: function(){
        this.iniciaBotones();
        this.iniciaFastClick();
        this.iniciaHammer();
    },
 
    iniciaFastClick: function(){
        FastClick.attach(document.body);
    },
 
    iniciaBotones: function(){
        var btnClaro = document.querySelector('#claro');
        var btnObscuro = document.querySelector('#obscuro');
 
        btnClaro.addEventListener('click',this.ponloClaro, false);
        btnObscuro.addEventListener('click',this.ponloBobscuro, false);
       
    },
 
    iniciaHammer: function() {
        var zona = document.getElementById('zona-gestos');
        var hammertime = new Hammer(zona);
 
        hammertime.get('pinch').set({enable: true});
        hammertime.get('rotate').set({enable: true});
 
        hammertime.on('tap doubletap pan swipe press pinch rotate', function(ev){
            document.querySelector('#info').innerHTML = ev.type+'!';
        });
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
        app.inicio();
    }, false);
 }
 
