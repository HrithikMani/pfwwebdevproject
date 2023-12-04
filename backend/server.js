const express = require('express');
const app = express();
const PORT = 3000;
const cors= require("cors")
const pool = require("./db")
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

app.use(cors())
app.use(bodyParser.json());


app.get('/', async (req, res) => {
    try{
        const result = await pool.query('SELECT * FROM users');
        res.json(result.rows);
    }catch(error){
        console.error('Error executing query:', error);
        res.status(500).send('Internal Server Error');
    }


  });

  
app.post('/login', async (req, res) => {
  console.log("received a login request")

  try{
    console.log(req.body)
    var q = "SELECT * FROM users Where email='"+req.body.email+"' AND password='"+req.body.password+"';"; 
    console.log(q)  
    const result = await pool.query(q);
    if(result.rowCount == 0){
      res.json({"res":0});
    }else{
      res.json({"res":1,"data":result.rows});
      
    }
      
  }catch(error){
      console.error('Error executing query:', error);
      res.status(500).send('Internal Server Error');
  }
});


app.post('/register', async (req, res) => {
  console.log("received a register")




  try{
    console.log("Registering new user : "+JSON.stringify(req.body))
    var q = "INSERT INTO users(username,email,role,password,firstname,lastname) VALUES('"+ req.body.firstname + req.body.lastname  +"','"+ req.body.email+"',0,'"+ req.body.password +"','"+ req.body.firstname +"','"+ req.body.lastname +"');";
    console.log(q)  
    const result = await pool.query(q);
    if(result.rowCount == 1){
      res.json({"res":1});
    }else{
      res.json({"res":0});
    }
      
  }catch(error){
      console.error('Error executing query:', error);
      res.status(500).send('Internal Server Error');
  }

  



});


app.put("/login", async(req,res)=>{
  console.log("updating details for :"+ JSON.stringify(req.body));
  
  var q = "UPDATE users SET firstname='"+req.body.firstname+"',lastname='"+req.body.lastname+"',password='"+req.body.password+"',email='"+req.body.email+"' WHERE id="+req.body.id;
  console.log(q);
  const result = await pool.query(q);
  if(result.rowCount == 1){
    res.json({"res":1});
  }else{
    res.json({"res":0});
  }
    

})

app.get("/login/:id", async(req,res)=>{
  console.log("Fetching user values for user id :"+ JSON.stringify(req.params.id));
  var q = "SELECT * FROM users where id = "+ req.params.id;
  console.log(q);
  const result = await pool.query(q);
  try{
  res.json(result.rows);
  }catch(error){
    console.error('Error executing query:', error);
    res.status(500).send('Internal Server Error');
  }
})



const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'profilepicture/'); // Set the destination folder for uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Set the filename (use the current timestamp to make it unique)
  },
});
const upload = multer({ storage });

app.use('/profilepicture', express.static('profilepicture'));

app.post('/uploadprofile', upload.single('file'), async(req, res) => {
  try {
   if(req.file){
      console.log("Fetching user values for user id :"+ JSON.stringify(req.params.id));
      var q = "SELECT * FROM users where id = "+ req.params.id;
      console.log(q);
   }

  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/jobs', async (req, res) => {
  try {
    // Retrieve jobs from PostgreSQL database and sort by posted_date
    const result = await pool.query('SELECT * FROM jobs ORDER BY posted_date DESC');
    const sortedJobs = result.rows;

    res.json(sortedJobs);
  } catch (error) {
    console.error('Error retrieving jobs:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
