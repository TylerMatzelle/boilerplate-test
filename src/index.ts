let wall_length = 96;
let beams =0;

if(wall_length > 100){
    beams = beams +1;
}

else if(wall_length < 2){
    beams = beams - 1;
}

else{
    beams = beams * 9;
}

beams = (wall_length > 100) ? beams + 1 : beams - 1;

let condition:boolean = true;
let result = ("false") ? true : false;