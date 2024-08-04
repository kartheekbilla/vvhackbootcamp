// let a="kartheek"
// let b="billa"
// console.log(a+b)
//  let names="kartheekbilla"
// console.log(names.replace("billa","BILLA"))
// console.log(names.length)
// for(let i=0;i<names.length;i++)
// {   
//     console.log(names[i])
// }
// let names=["kartheek","rithin","sidhu"];
// let hii=[...names]
// console.log(hii)
// //array method
// names.push("hello");
// console.log(names)
// names.pop()
// console.log(names)
// names.shift()
// console.log(names)
// names.unshift("Byee")
// console.log(names)
// console.log(names.join('+'))
// console.log(names.concat("harshit"))
// console.log(names.indexOf("sidhu"))
// let names = ["sidh","thin","thick"]
// let map = names?.map((val) => val+"call")
// console.log(map)
const teams={
    name:'Kartheek',
    branch:'aiml',
    college:'srkr',
    team:'Team elite'
}

// for (let x in teams){
//     console.log(x = ":"+ teams[x])
// }

// for(let[key,val] of Object.entries(teams))
// {
//     console.log(key +":" + val)
// }

//to access specific key
// const {name,branch}=teams
// console.log(name,branch)


Object.keys(teams).forEach(val=>{
    console.log(val + ":" + teams[val])
 });

 Object.values(teams).forEach(val=>{
    console.log(val)
 })