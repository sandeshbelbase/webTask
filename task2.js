names=["Pratik Thapa", "Hari Kumar Karki", "Shyam Govind Sharma","Wilson Karki","Baladev Thapa"];

function sortStringArrDes(names){
arrSize=names.length;
var temp;
for(j=0; j<arrSize-1; j++){
    for(i=0; i<arrSize-1; i++){
        if (names[i].split(' ')[1] < names[i+1].split(' ')[1]){
            temp = names[i+1];
            names[i+1] = names[i];
            names[i] = temp;
            }
        }
    }
    return names;
}

console.log(sortStringArrDes(names));