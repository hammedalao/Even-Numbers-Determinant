//Even Number Determinant
function isEven(num){
    if(num<0){
        num = mum*-1;
    }
    while (num >= 2)
        num-=2;
    var res = (!num ==1 || num == 0);
    return res
}