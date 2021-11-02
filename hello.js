let details = {
    sex: "male",
    first_name: "Fatai",
    last_name: "Kareem",
    getFullName: function (anotherfunction){
        console.log(anotherfunction(this))
    }
}

details.getFullName((obj) => {
    let fullname = obj.first_name + " " + obj.last_name
    if(obj.sex === "male"){
      fullname = "Mr" + " " + fullname
    } else {
      fullname = "Mrs" + " " + fullname
    }
    return fullname
})
