import React, { useEffect, useState } from 'react'
import "../css/Profile.css"
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
function MyProfileRecruiter() {
    const handleUpload = ()=>{
       document.getElementById("fileInput").click();
    }
  
    const handleResumeUpload = async()=>{
        document.getElementById("fileResume").click();
    }

   const [firstname,setFirstname] = useState("")
   const [lastname,setLastname] = useState("")
   
   const [email,setEmail] = useState("")
   const [password,setPassword] = useState("")

   const [msg,setMsg] = useState("hi")
   const [isValid,setIsValid] = useState(true)

    const [profilepic,setProfilepic] = useState(null)
    const [resume,setResume] = useState(null)

    const [pic,setPic] = useState("")

    useEffect(() => {
     
        axios.get("http://localhost:3000/login/"+localStorage.getItem("id")).then((data)=>{
            var res = data.data[0];
            setEmail(res.email);
            setPassword(res.password);
            setFirstname(res.firstname);
            setLastname(res.lastname);
            setPic("http://localhost:3000/profilepicture/"+res.profilepic);          
        })
     
      }, []);
     
    const handleUpdate = (e) =>{
        e.preventDefault();
        var data = {
            "firstname":firstname,
            "lastname":lastname,
            "email":email,
            "password":password,
            "id":localStorage.getItem("id")
        }
        axios.put("http://localhost:3000/login/",data).then((data)=>{
          
                setMsg("Updated values");
                setIsValid(false);
           
        })
    }
    const handleprofilepicture = async(e)=> {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    

        setProfilepic(e.target.files[0]);
        const formData = new FormData();
        formData.append('file', profilepic);
        formData.append('id', localStorage.getItem("id"));
        
        setPic("https://static.vecteezy.com/system/resources/previews/012/188/624/non_2x/loading-bar-sketch-with-a-large-quote-hand-drawn-download-bar-filled-with-square-shapes-doodle-illustration-isolated-on-white-background-vector.jpg");
        fetch("http://localhost:3000/uploadprofile",{method:"POST",body:formData}).then(response => response.json()).then(data=>{
            setPic("http://localhost:3000/profilepictureuploads/"+data.message)
        }).catch((data)=>{
            console.log(data);
        })

    }
   

    return (
    <div>
      <div className="logoProfileHeader">
        <h1>Talent Acquisition Hub</h1>
    </div>

    <div class="sidebar">
        
         
       
            <Link to="/login"><span href="#"><i class="fa-solid fa-circle-xmark sideIcon"></i>Logout</span></Link>
    </div>
    <div className="content jcontent">
        <div className='container-fluid'>
            <div className='row'>
            <div className='col-8'>
                
                    <div className='row jobDescHeader'>
                        <div className='col'>
                            <h1>My Profile</h1>
                        </div>
                    </div>

                    <div className={`successMsg ${isValid ? 'hide' : 'show'}`}>{msg}</div>
                    <div className='row jobUpdateOuter'>
                        
                    <form class="form-group">
                         <input value={firstname}  onChange={(e)=> setFirstname(e.target.value)} required  type="text" placeholder="First Name" className='form-control'/>
                         <input required type="text" placeholder="Last Name"  className='form-control' value={lastname}  onChange={(e)=> setLastname(e.target.value)} />
                         <input required type="text" placeholder="Email ID"  className='form-control' value={email}  onChange={(e)=> setEmail(e.target.value)} />
                          <input required type="password" placeholder="Password"  className='form-control' value={password}  onChange={(e)=> setPassword(e.target.value)} />
                         <button onClick={handleUpdate} type="submit" className="btn btn-primary">Update</button>
                    </form>

                    </div>

                    <div className='row jobDescHeader'>
                        <div className='col'>
                            <h1>My Resume</h1>
                        </div>
                    </div>

                    <div className='row jobUpdateOuter'>
                    <h4>Resume.pdf</h4>

                    <form class="form-group">
                         <input type="file" id="fileResume"  class="file-input" className='hide' onChange={(e)=> setProfilepic(e.target.files[0])}/>
                         <button onClick={handleResumeUpload} type="submit" className="btn btn-primary uploadResume">Upload Resume</button>
                    </form>

                    </div>

            </div>
            <div className='col-4'>
                <div className="jobDescImg">
                    <img className="picLogo" src={pic} width={200} height={200}/>
                </div>
             
                <div className='row jobDescSection jobdescapplybtnouter'>
                        <div className='col'>
                            <input type="file" id="fileInput" class="file-input" className='hide' onChange={(handleprofilepicture)}/>
                            <button onClick={handleUpload} type="file" className='btn btn-success'>Upload Picture</button>
                       
                        </div>
                       
                </div>
            </div>
            </div>
          

        </div>

    </div>
    </div>
  )
}

export default MyProfileRecruiter
