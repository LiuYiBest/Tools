const homedir = require('os').homedir();
const home = process.env.HOME || homedir;
const p = require('path')
const fs = require('fs')
const dbPath = p.join(home,'.todo')

module.exports.add=(title)=>{
    // 读取之前的任务
    fs.readFile(dbPath,{flag: 'a+'},(error, data)=>{
        console.log('11')
        if(error){console.log(error)}else{
            let list
            try{
                let list = JSON.parse(data.toString())
            }catch (error2){
                list = []
            }
            console.log(list)
            const task = {
                title:title,
                done: false
            }
            list.push(task)
            const  string =JSON.parse(list)
            fs.writeFile(dbPath,string,(error3)=>{
                if(error){console.log(error3)}
            })
        }
    })
    //往里面添加一个title任务
}


