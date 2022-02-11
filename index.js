
const  db =requeire('./db.js')

module.exports.add=async (title)=>{
    // 读取之前的任务
    const list = await db.read()
    //往里面添加一个title任务
    list.push()
    //存储任务到文件

}


