
const fs = jest.createMockFromModule('fs');

fs.setMock =(path,error,data)=>{
    console.log('hi')
}


module.exports = fs;
