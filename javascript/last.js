const getData = async()=>{


    var data = await fetch("https://chatappserver-zop9.onrender.com/users")

    return data.body

}


console.log(getData())