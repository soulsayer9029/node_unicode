const path=require('path')
const express=require('express')
const getJoke=require(path.join(__dirname,'../Jokes_task/jokes_task2.js'))
const hbs = require('hbs')
const app=express()

const viewsPath=path.join(__dirname,'../Jokes_task/templates/views')

const partialsPath=path.join(__dirname,'../Jokes_task/templates/partials')

app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

app.get('',(req,res)=>{

    res.render('index',{
        title:'Home'
    })
    // getJoke('any',(error,joke)=>{
    //     if(error){
    //         return res.send({
    //             error:'There are connectivity issues please try again'
    //         })
    //     }
    //     res.send(joke)
    // })
})
app.get('/programming',(req,res)=>{
    getJoke('programming',(error,joke)=>{
        if(error){
            res.render('programming',{
                title:'Programming',
                output: 'There are connectivity issues please try again',
                id:'null',
                type:'null',
                joke:'null',
                category:'null'
                
            })
        }else{
            res.render('programming',{
                title:'Programming',
                id:joke.id,
                type:joke.type,
                joke:joke.joke,
                category:joke.category
                
            
        })
    }
})
})  

app.get('/dark',(req,res)=>{
    getJoke('dark',(error,joke)=>{
        if(error){
            res.render('Dark',{
                title:'Dark',
                output: 'There are connectivity issues please try again',
                id:'null',
                type:'null',
                joke:'null',
                category:'null'
                
            })
        }else{
            res.render('dark',{
                title:'Dark',
                id:joke.id,
                type:joke.type,
                joke:joke.joke,
                category:joke.category
                
            
        })
    }
})
})

app.get('/pun',(req,res)=>{
    getJoke('pun',(error,joke)=>{
        if(error){
            res.render('pun',{
                title:'Pun',
                output: 'There are connectivity issues please try again',
                id:'null',
                type:'null',
                joke:'null',
                category:'null'
                
            })
        }else{
            res.render('pun',{
                title:'Pun',
                id:joke.id,
                type:joke.type,
                joke:joke.joke,
                category:joke.category
                
            
        })
    }
})
})
app.get('/Miscellaneous',(req,res)=>{
    getJoke('Miscellaneous',(error,joke)=>{
        if(error){
            res.render('misc',{
                title:'Miscellaneous',
                output: 'There are connectivity issues please try again',
                id:'null',
                type:'null',
                joke:'null',
                category:'null'
                
            })
        }else{
            res.render('misc',{
                title:'Miscellaneous',
                id:joke.id,
                type:joke.type,
                joke:joke.joke,
                category:joke.category
                
            
        })
    }
})
})
app.get('*',(req,res)=>{
    res.send('<h1>Error 404</h1><h3>Page not Found</h3>')
})
//creating the server 
app.listen(3000,()=>{
    console.log('web server has started')
})