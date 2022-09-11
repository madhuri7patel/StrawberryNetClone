const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("./src/db/conn");
const Register = require("./src/models/registers");
const { json } = require("express");
const { log } = require("console");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "./public" );
const template_path = path.join(__dirname, "./templates/views" );
const partials_path = path.join(__dirname, "./templates/partials" );

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);


app.get("/", (req, res) => {
    res.render("index")
});

app.get("/register", (req, res) =>{
    res.render("register");
})

app.get("/login", (req, res) =>{
    res.render("login");
})

app.get("/welcomeuser", (req, res) =>{
    res.render("welcomeuser");
})

app.get("/welcomeuser", (req, res) =>{
    res.render("loggedin");
})


// create a new user in our database
app.post("/register", async (req, res) =>{
    try {

      const password = req.body.password;
      const cpassword = req.body.confirmpassword;

      if(password === cpassword){
        
        const registerEmployee = new Register({
                firstname: req.body.firstname,
                lastname:req.body.lastname,
                email:req.body.email,
                gender:req.body.gender,
                phone:req.body.phone,
                age:req.body.age,
                password:req.body.password,
                confirmpassword:req.body.confirmpassword    
        })

        console.log("the success part" + registerEmployee);

        const token = await registerEmployee.generateAuthToken();
        console.log("the token part" + token);

        const registered = await registerEmployee.save();
        console.log("the page part" + registered);

        res.status(201).render("welcomeuser");

      }else{
          res.status(201).render("invalid")
      }
        
    } catch (error) {
        res.status(400).send(error);
        console.log("the error part page ");
    }
})


// login check

app.post("/login", async(req, res) =>{
   try {
    
        const email = req.body.email;
        const password = req.body.password;

        const useremail = await Register.findOne({email:email});

        const isMatch = await bcrypt.compare(password, useremail.password);

        const token = await useremail.generateAuthToken();
        console.log("the token part" + token);
       
        if(isMatch){
            res.status(201).render("loggedin");
        }else{
            res.status(201).render("invalid")
        }
    
   } catch (error) {
       res.status(400).render("invalid")
   }
})



// const bcrypt = require("bcryptjs");

// const securePassword = async (password) =>{

//     const passwordHash = await bcrypt.hash(password, 10);
//     console.log(passwordHash);

//     const passwordmatch = await bcrypt.compare("yogesh@123", passwordHash);
//     console.log(passwordmatch);

// }

// securePassword("Yodix@123");


// const jwt = require("jsonwebtoken");

// const createToken = async() => {
//     const token = await jwt.sign({_id:"5fb86aaf569ea945f8bcd2e1"}, "mynameisvinodbahadurthapayoutuber", {
//         expiresIn:"2 seconds"
//     });
//     console.log(token);

//     const userVer = await jwt.verify(token, "mynameisvinodbahadurthapayoutuber");
//     console.log(userVer);
// }


// createToken();


app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})

