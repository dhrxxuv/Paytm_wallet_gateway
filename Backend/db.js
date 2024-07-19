const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:Betn1cs21137@cluster0.ohkmpfo.mongodb.net/paytm")

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
});

const accountSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    balance:{
        type:Number,
        require:true
    }
})

const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account',accountSchema)

module.exports = {
	User,
    Account
};