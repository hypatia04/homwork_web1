const Anh = {
    name: "Anh",
    age: 20,
    email: "ngocanh16@gmail.com" ,
}
function output(obj) {
    var lst = [];
    for (let x in obj) {
        var data = x + ": " + obj[x];
        lst.push(data); 
    }
    console.log(lst);
}

output(Anh);