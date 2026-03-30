const User = require('../usermodels/userprofile')
const bycrpt = require('bcryptjs')

const signup = async(req , res) => {
    try{
        const{name, email, password} = req.body;
        const hashpass = await bycrpt.hash(password,8) ;
        const user = await User.create({
            name ,
            email,
            password : hashpass
        });
        res.json({ message: "User created", user });
        
    }
catch (err) {
        res.status(500).json({ error: err.message });
    }
};