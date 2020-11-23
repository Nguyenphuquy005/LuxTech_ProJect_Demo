
module.exports = function (data) {
    let buff = new Buffer(data);
    let base64data = buff.toString('base64');
    return base64data;
};



// function example(data) {
//     let buff = new Buffer(data);
//     let base64data = buff.toString('base64');
//     return base64data;
// }

// const encodepass = function (data) {
//     let buff = new Buffer(data);
//     let base64data = buff.toString('base64');
//     return base64data;
// }

// console.log(encodepass(data))


