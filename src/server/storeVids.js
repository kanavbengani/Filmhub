var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb+srv://kbengani:filmhub1234@cluster0.c1rgu.mongodb.net/filmhub?retryWrites=true&w=majority');
var conn = mongoose.connection;
var path = require('path');

var Grid = require('gridfs-stream');
var fs = require('fs');

var videoPath = path.join(__dirname, '../assets/read/text.txt');

Grid.mongo = mongoose.mongo;

conn.once('open', function () {
    console.log('- Connection Open -');
    var gfs = Grid(conn.db);

    var writestream = gfs.createWriteStream({
        'filename': "emptyText.txt",
    });

    fs.createReadStream(videoPath).pipe(writestream);

    writestream.on('close', function (file) {
        console.log(file.filename + ' Written to DB');
    });
});