function humberger(){
    document.getElementById('humberger-top').classList.toggle('line_1');
    document.getElementById('humberger-center').classList.toggle('line_2');
    document.getElementById('humberger-bottom').classList.toggle('line_3');
    document.getElementById('humberger-menu').classList.toggle('in');
}

document.getElementById('humberger').addEventListener('click', function(){
    humberger();
});

document.getElementById('menu1').addEventListener('click', function(){
    humberger();
});
document.getElementById('menu2').addEventListener('click', function(){
    humberger();
});
document.getElementById('menu3').addEventListener('click', function(){
    humberger();
});
document.getElementById('menu4').addEventListener('click', function(){
    humberger();
});