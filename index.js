let a = ['ajay','sankar','dany']

let b ={}

a.forEach((res,index)=>{
    b = {...b,[Number(index)]:[]}
})
a.forEach((res)=>{
  b[0]
})
console.log("b",b);
