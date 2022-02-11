const homedir = require('os').homedir();
const home = process.env.HOME || homedir;
const p = require('path')
const fs = require('fs')
const dbPath = p.join(home,'.todo')

const db={
    read(path = dbPath){
        return new Promise((resolve,reject)=>{
            fs.readFile(dbPath,{flag: 'a+'},(error, data)=>{
                if(error) {
                    return reject(error)
                }
                    let list
                    try{
                        let list = JSON.parse(data.toString())
                    }catch (error2){
                        list = []
                    }
                    resolve(list)
            })
        })
    },

    write(list,path=dbPath){
        return new Promise((resolve, reject) => {
            const string =JSON.stringify(list)
            fs.writeFile(dbPath,string+'\n',(error)=>{
                if(error){console.log(error)}
            })
        })
    }
}
module.exports = db
