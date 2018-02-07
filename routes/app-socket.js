function init(io){
    io.on('connection', function(socket) {
        console.log('connection触发了');
        socket.on('speak', function (msg) {
            console.log('链接上了socket',msg);
            io.emit('userspeck',msg)
        })

        // socket.on('speak', function (msg) {
        //     console.log('链接上了socket',msg);
        // })
    })
}

module.exports = {
    init
};
