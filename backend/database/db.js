const mongoose=require('mongoose');
mongoose.connect('')

const userSchema=new mongoose.Schema({
    username: String,
    password: String,
})
const user= mongoose.model('user',userSchema);

module.exports={
    user
}