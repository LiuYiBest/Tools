
const fs = jest.createMockFromModule('fs');
fs.x=()=>{
    console.log('hi')
    return 'xxx'
}


module.exports = fs;
