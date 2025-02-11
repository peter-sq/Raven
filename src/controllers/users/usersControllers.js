import jwt from 'jsonwebtoken';
import db from '../../../db/knex.js';
import bcrypt from 'bcrypt';





// Register a new user
const Register = async (req, res) => {
    const { first_name, last_name, email, password, confirm_password, phone } = req.body;

 
  
    // Input validation
    if (!first_name || !last_name || !email || !password || !confirm_password || !phone) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    if (password !== confirm_password) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }
  
    try {
      // Check if email or phone already exists
      const userExist = await db('users')
        .where('email', email)
        .orWhere('phone', phone)
        .first();
  
      if (userExist) {
        return res.status(409).json({ message: 'User with that email or phone already exists' });
      }
  
      // Hash password
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
  
      // Insert new user
      const [userId] = await db('users').insert({
        first_name,
        last_name,
        email,
        phone,
        password: hashedPassword,
      });

        // Fetch created user details
        const newUser = await db('users')
        .select('id', 'first_name', 'last_name', 'email', 'phone', 'created_at')
        .where('id', userId)
        .first();
  
      // Generate JWT token
      const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      return res.status(201).json({
         message: 'User created successfully.',
         user: newUser,
         token });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error creating user' });
    }
  };


  //Handle User Login
  const Login = async (req, res) => {
    const {email, password} = req.body;

      //validate input
      if(!email || !password){
        return res.status(400).json({
            message: 'Email or Password is Required'
        })
    }
    try {
      // Check if user exists 
      const user = await db('users')
          .where('email', email)
          .first();
  
      if (!user) {
          return res.status(404).json({ message: 'User Not Found' });
      }
  
      // Check password match using bcrypt
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (!passwordMatch) {
          return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Generate JWT Token
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      // Return user details 
      const { password: _, ...userDetails } = user;
      return res.status(200).json({
          message: 'Login Successful',
          token,
          user: userDetails,
      });
  
  } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error Logging In' });
  }
  
  }

  
  export default { Register, Login };
