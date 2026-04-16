import User from '../usermodels/userprofile.js';
import bcrypt from 'bcryptjs';

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // validation
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // check existing user
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // hash password
        const hashpass = await bcrypt.hash(password, 8);

        // create user
        const user = await User.create({
            name,
            email,
            password: hashpass
        });

        res.status(201).json({
            message: "User created",
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export { signup };