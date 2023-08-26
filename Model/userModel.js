const {Schema , model} = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = Schema({
    number:{
        type: String,
        required: true
    }
},{
    timestamps: true
});

userSchema.methods.generateJWt = function(){
    const token = jwt.sign({
        _id: this._id,
        number:this.number
    },{expiresIn:"7d"})
}

module.exports.User = model('User' , userSchema);