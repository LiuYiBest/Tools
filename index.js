const home = process.env.HOME
const p = require('path')
const fs = require('fs')
const dbPath = p.join(home,'.todo')

module.exports.add=(title)=>{
    // 读取之前的任务
    fs.readFile(dbPath,{flat: 'a+'},(error,data)=>{
        console.log(data.toString())
    })
    //往里面添加一个title任务
}


