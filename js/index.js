let array = new Array();
document.write('A square equation has appearance as a*x^2 + b*x + c = 0' +'<br>');
array[0] = parseFloat(prompt('Enter a'));
array[1] = parseFloat(prompt('Enter b'));
array[2] = parseFloat(prompt('Enter c'));

function calculateSquareEquationRoots(array) {
    let d = (calculateDiscriminant(array));
    if (d > 0){
        d = Math.sqrt(d);
        let x1 = (-array[1] + d)/2*array[0];
        let x2 = (-array[1] - d)/2*array[0];
        return [x1, x2];
    } else if (d === 0){
        let x1_2 = (-array[1])/2*array[0];
        return x1_2;
    } else if (d < 0){
        return "This square equation does not have real roots.";
    }

}

function calculateDiscriminant(array){
    let d = array[1] * array[1] - 4 * array[0] * array[2];
    return d;
}

let solution = calculateSquareEquationRoots(array);

if ((typeof solution)==="object"){
    document.write("This equation has two roots: x1 = " + solution[0], " and x2 = " +solution[1]);
} else if ((typeof solution)==="number") {
    document.write("The only root equals " + solution);
} else if ((typeof solution)==="string"){
    document.write(solution);
}