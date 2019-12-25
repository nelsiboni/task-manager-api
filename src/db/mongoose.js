const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/task?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false', {
    useNewUrlParser: true,
    useCreateIndex: true
})