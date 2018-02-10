/**
 * Created by yitala on 2018/2/10.
 */
/**
 * Created by yitala on 2018/2/10.
 */
var yitala = function(){
    console.log('i am the yitala func');
};

yitala.speak = function() {
    console.log('yitala speak');
};

yitala.square = function(x){
    return x*x;
};

module.exports = yitala;
console.log(module.exports);


// module.exports.speak = yitala.speak;
// module.exports.square = yitala.square;
// console.log(module.exports);


/**
 * 说明
 * 一，module是一个对象
 * {
        id: '/Users/yitala/Documents/lww_workspace/front-end/node_express_learn/app.js',
        exports: {},
        parent: [Module],
        filename: '/Users/yitala/Documents/lww_workspace/front-end/node_express_learn/app.js',
        loaded: false,
        children: [Array],
        paths: [Array] },

 * 等价的写法
 * (1). module.exports.speak = function(){ ... };
 *      module.exports.square = function(){ ... }
 * (2). exports.speak = function(){ ... };
 *      exports.square = function(){ ... }
 *  默认忽略module
 */