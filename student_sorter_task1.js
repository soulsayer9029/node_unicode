
const studentSorter=(arr)=>{
    const a=[]
    arr.forEach((item)=>{
        let b=item.split(" ")
        b[2]=parseInt(b[2])
        b[3]=parseInt(b[3])
        let c={
            name:b[0]+" "+b[1],
            Score:{
                maths:b[2],
                english:b[3]
            },
            total:b[2]+b[3]
            
    }
        a.push(c)

    })
    a.sort((x,y)=>{
        return y.total-x.total
    })
    a.forEach((item)=>{
        delete item.total
    })
    return a
}
arr=["Rashmil Panchani 99 97","Parag Vaid 95 93","Siddarth Sanghvi 98 100"]
console.log(studentSorter(arr))

module.exports=studentSorter