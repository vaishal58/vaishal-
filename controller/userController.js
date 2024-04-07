const User = require("../models/userModel");

//Create User Data
exports.createUser = async (req, res) => {
  try {
    const add = await User.create(req.body);
    res.status(201).json({
      success: true,
      add,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Failed to create user" });
  }
};
// Get Random User
exports.getRandomUser = async (req, res) => {
  try {
    const allusers = await User.find();
    // console.log(allusers.length);
    if (allusers.length === 0) {
      return res.status(404).json({ error: "No users found" });
    } else {
      const randomnumber = Math.floor(Math.random() * allusers.length);
      console.log(randomnumber);
      const randomUser = allusers[randomnumber];
      res.status(200).json({
        success: true,
        randomUser,
      });
    }
  } catch (error) {
    console.error("Error fethcing data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
};
//Check User Existence
exports.getUserName = async (req, res) => {
  try {
    const { name } = req.body;
    const response = await User.find({ name: name }).exec();
    if (response.length === 0) {
        return res.status(200).json(false);
    } else {
        return res.status(200).json(true);
    }

  } catch (error) {
    console.error("Error :", error);
    res.status(500).json({ error: "Failed " });
  }
};
//Users Above Age
exports.getUsersByAge=async (req, res) => {
    try {
     
        const {age}=req.body
        const finduser=await User.find({ age: { $gte: age } }).exec();
        
            return res.status(200).json({
                success:true,
                finduser
            })
        }
    
    catch(error)
    {

    }
};   
//List User Names
exports.getAllUser=async(req,res)=>{
    try{
         const response=await User.find().exec();
         let user=[];
         for (let i = 0; i < response.length; i++) {
            user.push(response[i].name)
        }
        
            return res.status(200).json({
                user
            })
        
    }
    catch(error)
    {
        console.error("Error fethcing data:", error);
        res.status(500).json({ error: "Failed to fetch data" });
    }
}