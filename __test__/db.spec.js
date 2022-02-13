const db = require('../db')
jest.mock('fs')

describe('db',()=>{
    it('read',()=>{
        expect(db.read instanceof Function).toBe(true)  //是否是函数的实例
    })
    it('read',()=>{})
})


