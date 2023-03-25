var arrNumber = [];


document.getElementById('btnNhap').onclick=function(){
    //input mang cho san vs input new value
    var newEle = +document.getElementById('nhap-so').value;
    
    //output
    var output = '';

    arrNumber.push(newEle);
    output = arrNumber;
    // document.getElementById('ket-qua-bai1').innerHTML = output;
    // C2
    document.getElementById('arrNumber').innerHTML = arrNumber;

}





//Bai1
document.getElementById('btnBai1').onclick=function(){
    //input mang arrNumber
    //output
    var tong = 0;
    for(var i = 0; i< arrNumber.length; i++){
        if(arrNumber[i]>0){
            tong += arrNumber[i];
        }
    }


    document.querySelector('#ket-qua-bai1').innerHTML = ` tổng các số dương : ${tong} `;
}

//Bai2
document.getElementById('btnBai2').onclick=function(){
    //input mang arrNumber
    //output
    var count = 0;
    for(var i = 0; i< arrNumber.length; i++){
        if(arrNumber[i]>0){
            count++;
        }
    }


    document.querySelector('#ket-qua-bai2').innerHTML = ` số dương : ${count} `;
}


//Bai3
document.getElementById('btnBai3').onclick=function(){
    //input mang arrNumber
    //output
    var min = arrNumber[0];

    for(var i = 1; i< arrNumber.length; i++){
        if(arrNumber[i]<min){
            min = arrNumber[i];
        }
    }


    document.querySelector('#ket-qua-bai3').innerHTML = ` số nhỏ nhất : ${min} `;
}



//Bai4
document.getElementById('btnBai4').onclick=function(){
    //input mang arrNumber
    //output
    var check =false;
    
    for(var i = 0; i<arrNumber.length; i++){
        if(arrNumber[i]>0){
            check = true;
            var min= arrNumber[i];
            break;
        }
    }
    
    if(check === true){
        for(var i = 0; i<arrNumber.length; i++){
            if(arrNumber[i]>0 && arrNumber[i]<min){
                    min = arrNumber[i];
            }
        }
         document.querySelector('#ket-qua-bai4').innerHTML = ` số nhỏ nhất : ${min} `;




    }else{
        document.querySelector('#ket-qua-bai4').innerHTML = ` mảng không có số dương `;
    }
   

    


    
}


//Bai5
document.getElementById('btnBai5').onclick=function(){
    //input mang arrNumber
    //output
    var check =-1;
    
    for(var i = 0 ; i< arrNumber.length; i++){
        if(arrNumber[i]%2 === 0){
            check = arrNumber[i];
        }
    }
      
    document.querySelector('#ket-qua-bai5').innerHTML = ` Số chẵn cuối cùng: ${check} `;
    
}

//Bai6
document.getElementById('btnBai6').onclick=function(){
    //input mang arrNumber + 2 vi tri
    var viTri1 = +document.querySelector('#nhap-so1').value;
    var viTri2 = +document.querySelector('#nhap-so2').value;
    //output
    var output = doicho(viTri1, viTri2);
    
    
      
    document.querySelector('#ket-qua-bai6').innerHTML = ` Số chẵn cuối cùng: ${output} `;
    
}

function doicho(vt1 , vt2){
    var tam = arrNumber[vt1];
    arrNumber[vt1] = arrNumber[vt2];
    arrNumber[vt2] = tam;
    // console.log(arrNumber);
    return arrNumber;
}

//bai 7
document.querySelector('#btnBai7').onclick = function(){
    var arrSorted = _.sortBy(arrNumber);
    document.querySelector('#ket-qua-bai7').innerHTML = `Mảng sau khi sắp xếp:  ${arrSorted}`;
}


//bai 8
document.querySelector('#btnBai8').onclick = function(){
    var check;
    var soNT;
    for(var i = 0; i< arrNumber.length; i++){
        if(arrNumber[i]>1){
            check = soNguyenTo(arrNumber[i]);
            if(check === true){
                soNT = arrNumber[i];
                break;
            }
        }
        
    }




    document.querySelector('#ket-qua-bai8').innerHTML = `số nguyên tố đầu tiên: ${soNT}`;
}


function soNguyenTo(socheck){
    var check =true;
    for(var i = 2; i< Math.sqrt(socheck); i++){
        if(socheck % i === 0){
            check = false;
            return check;
        }
    }
    return check;
}

//bai 9

document.getElementById('btnSoThuc').onclick=function(){
    //input mang cho san vs input new value
    var newEle = +document.getElementById('nhap-so-thuc').value;
    
    //output
    var output = '';

    arrNumber.push(newEle);
    output = arrNumber;
    // document.getElementById('ket-qua-bai1').innerHTML = output;
    // C2
    document.getElementById('ket-qua-sothuc').innerHTML = arrNumber;

}






document.querySelector('#btnBai9').onclick = function(){
    //
    var count = 0;
    for(var i = 0; i< arrNumber.length; i++){
        if(Number.isInteger(arrNumber[i])){

            count++;
        }
    }


    document.querySelector('#ket-qua-bai9').innerHTML = `số nguyên: ${count}`;
}


document.querySelector('#btnBai10').onclick = function(){
    //
    var countAm = 0;
    var countDuong = 0;
    for(var i = 0; i< arrNumber.length; i++){
        if(Number.isInteger(arrNumber[i])){
            if(arrNumber[i]>=0){
                countDuong++;
            }else{
                countAm ++;
            }
        }
    }

    if(countAm > countDuong){
        document.querySelector('#ket-qua-bai10').innerHTML = `số nguyên âm > số nguyên dương`;
    }
    else if(countAm < countDuong){
        document.querySelector('#ket-qua-bai10').innerHTML = `số nguyên âm < số nguyên dương`;
    }
    else{
        document.querySelector('#ket-qua-bai10').innerHTML = `số nguyên âm = số nguyên dương`;
    }


    
}



