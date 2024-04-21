function cal() {
    var name = document.getElementById("name").value;
    var result = document.getElementById("result");
    var reg = document.getElementById("reg").value;
var marks = Math.random()*100;

    if(name==" " || reg==""){
        alert("Please fill below form")
    }
    if(marks=>35){
        result.innerHTML=name+"is get a second class"+marks.toFixed(2);
    }else{
        if(marks=>60){
            result.innerHTML=name+"is get a first class"+marks.toFixed(2);

    }
    }
}