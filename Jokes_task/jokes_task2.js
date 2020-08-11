const request = require('request')

const getJoke=(category,callback)=>{
    const url=`https://sv443.net/jokeapi/v2/joke/${category}`
    request({url,json:true},(error,response)=>{

        if(error){
            callback('could not connect to joke service',undefined)
        }else if(!response.body.error){
            if(response.body.type==="single"){
                const joke={
                    id:response.body.id,
                    type:response.body.type,
                    joke:response.body.joke,
                    category:response.body.category,
                }
                callback(undefined,joke)
            }else{
                const joke={
                    id:response.body.id,
                    type:response.body.type,
                    joke:`${response.body.setup}, ${response.body.delivery}`,
                    category:response.body.category,
                }
                callback(undefined,joke)
            }

        }else{
            callback("error occured please try again",undefined)
        }
    }
    
    )
}
// getJoke('any',(error,joke)=>{
//     if(joke){
//     console.log(joke)
// }else{
//     console.log(error)
// }
// })
module.exports=getJoke

