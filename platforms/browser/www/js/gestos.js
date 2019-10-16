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
 
        zona.addEventListener('webkitAnimationEnd',function(e){
            zona.className = '';
        })
 
        hammertime.on('tap', function(ev){
            document.querySelector('#info').innerHTML = ev.type+'!';
            zona.className = 'tap';
        });
 
        hammertime.on('doubletap', function(ev){
            document.querySelector('#info').innerHTML = ev.type+'!';
            zona.className = 'doubletap';
        });
       
        hammertime.on('press', function(ev){
            document.querySelector('#info').innerHTML = ev.type+'!';
            zona.className = 'press';
        });
       
        hammertime.on('swipe', function(ev){
            document.querySelector('#info').innerHTML = ev.type+'!';
            var clase = undefined;
            direccion = ev.direction;
 
            if(direccion==4) clase='swipeD';
            if(direccion==2) clase='swipeI';
            console.log(ev.rotation);
            zona.className = clase;
        });
 
        hammertime.on('rotate', function(ev){
            document.querySelector('#info').innerHTML = ev.type+'!';
           
            if(ev.rotation > 10) zona.className='rotate-R';
            if(ev.rotation < 0) zona.className='rotate-L';
           
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
 