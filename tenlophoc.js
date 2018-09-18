regex=/^[APC][0-9]{4}[GHIKLM]$/
function check(str) {
    return regex.test(str);

}
let arr=['M0318G', 'P0323A','C0318G','1234GC'];
for(let w of arr) {
    if(check(w)) {
        console.log("mã lớp" +" "  + w + " "+"hợp lệ");
    }else {
        console.log("mã lớp" +" " + w + " " +"hợp không lệ");

    }
}