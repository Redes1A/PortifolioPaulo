function bhaskara(){
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;
    let x1 = document.getElementById('x1');
    let x2 = document.getElementById('x2');

    let delta = (b * b) - (4 * a * c);

    x1.value = (- b + Math.sqrt(delta)) / (2 * a);
    x2.value = (- b - Math.sqrt(delta)) / (2 * a);

}












