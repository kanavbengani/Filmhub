var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb+srv://kbengani:filmhub1234@cluster0.c1rgu.mongodb.net/filmhub?retryWrites=true&w=majority');
var conn = mongoose.connection;
var path = require('path');

var Grid = require('gridfs-stream');
var fs = require('fs');

Grid.mongo = mongoose.mongo;

conn.once('open', function () {
    console.log('- Connection Open -');
    var gfs = Grid(conn.db);

    var fs_write_stream = fs.createWriteStream(path.join(__dirname, '../assets/write/text.txt'));

    var readstream = gfs.createReadStream({
        'filename': "emptyText.txt",
    })

    readstream.pipe(fs_write_stream);
    fs_write_stream.on('close', function () {
        console.log('File has been written fully!');
    });
});