let cells= document.querySelectorAll('.row > div');
let verdict= document.querySelector('h2');
var isX= true;
var isComplete= false;

for(let i=0; i<9; i++){
    cells[i].addEventListener('click', fun);
}

function fun(){

    if(isComplete){
        // alert('Refresh the page for new game!!');
        verdict.textContent= '';
        for(let i= 0; i< 9; i++){
            cells[i].textContent= '';
        }
        isX= true;
        isComplete= false;
        return;
    }
    
    var content= event.target.textContent;
    if( content != 'X' && content!= 'O'){
        // console.log(event);
        if(isX){
            event.target.textContent= 'X';
        }
        else{
            event.target.textContent= 'O';
        }
        isX= !isX;
    }

    if((cells[0].textContent == 'X' && cells[4].textContent == 'X' && cells[8].textContent == 'X') || (cells[2].textContent == 'X' && cells[4].textContent == 'X' && cells[6].textContent == 'X')){
        // alert('X Won!!');
        verdict.textContent= 'X Won!!';
        isComplete= true;
        return;
    }

    if((cells[0].textContent == 'O' && cells[4].textContent == 'O' && cells[8].textContent == 'O') || (cells[2].textContent == 'O' && cells[4].textContent == 'O' && cells[6].textContent == 'O')) {
        // alert('O Won!!');
        verdict.textContent= 'O Won!!';
        isComplete= true;
        return;
    }

    var x= [], o= [];

    for( let i=0; i< 9; i++){
        if(cells[i].textContent == 'X'){
            x.push(i);
        }
        else if(cells[i].textContent == 'O'){
            o.push(i);
        }
    }

    var xr=[0, 0, 0], xc= [0, 0, 0], yr= [0, 0, 0], yc= [0, 0, 0];

    for(let i =0; i< x.length; i++){
        var xel= x[i];
        xr[Math.floor(xel/3)]++;
        xc[xel%3]++;
    }

    // console.log(xr);

    for(let i= 0; i< 3; i++){
        if(xr[i]== 3 || xc[i] == 3){
            // alert('X Won!!');
            verdict.textContent= 'X Won!!';
            isComplete= true;
            return;
        }
    }

    for(let i=0; i< o.length; i++){
        var yel= o[i];
        yr[Math.floor(yel/3)]++;
        yc[yel%3]++;
    }

    for(let i=0; i< 3; i++){
        if(yr[i] == 3 || yc[i] == 3){
            // alert('O Won!!');
            verdict.textContent= 'O Won!!';
            isComplete= true;
            return;
        }
    }


    var count=0;
    for( let i=0; i< 9; i++){
        if(cells[i].textContent == 'X' || cells[i].textContent == 'O'){
            count++;
        }
    }

    if(count == 9){
        // alert('Tie!!');
        verdict.textContent= 'Tie!!';
        isComplete= true;
        return;
    }
}

// console.log(mat[2][1]);

