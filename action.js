function toBinary(number,base){
    let result = "";
    let final = "";
    while (number != base){
        let a = number-parseInt(number / base)*base;
        switch (a) {
            default:{
                result+=a;
                break
            }
            case 10:{
                result+="A";
                break
            }
            case 11:{
                result+="B";
                break
            }case 12:{
                result+="C";
                break
            }case 13:{
                result+="D";
                break
            }case 14:{
                result+="E";
                break
            }case 15:{
                result+="F";
                break
            }
        }
        number = parseInt(number/base);
    }
    result+=parseInt(number)
    for ( let i = result.length-1 ; i >=0 ; i -- ) {
        final+=result[i];
    }
    alert(final)
}
function doMagic(n){
    let i = document.getElementById("input").value;
    let a = parseInt(i,n);
    alert("\nДесятичной: "+a
        +"\nДвоичной: "+a.toString(2)
        +"\nВосмиричной: "+a.toString(8)
        +"\nШестнадцатиричной: " + a.toString(16))
    // toBinary(parseInt(i),n);
}
function changeBase(base){
    $('#butt').attr("onclick",doMagic(base));
}