const mongoose = require('mongoose');

const connectDB = async (url) => {
    return await mongoose.connect(url)
    .then(() =>{ console.log('モンゴサーベーに接続しました。')})
    .catch((error) => { console.log(error)})
}

module.exports = connectDB;