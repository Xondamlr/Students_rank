
const uri = 'mongodb+srv://Xondamlr:WAf358ylUTRjL6xg@cluster0.qmvhkxu.mongodb.net/Rank-students'
const mongoose= require('mongoose')

module.exports = async ()=>{
    try {
        await mongoose.connect(uri, ()=>{
            console.log('MongoDB connected successfuly');
        })
    } catch (error) {
        console.log(error);
    }

}