import React , {useState , useEffect} from 'react';
import axios from 'axios';
function App() {

  const[name , setName] = useState('');
  const[email , setEmail] = useState('');
  const[list , setList] = useState([]);

  const getList = async () => {
    try {
      const resp = await axios.get('http://localhost:6005/api');
      setList(resp.data.data);
        console.log(resp.data);
    } catch (error) {
      console.log(error)
    }
    
  }
 
   useEffect(() => {
     getList();
   }, [])

 const handleSubmit = async(e) => {
   e.preventDefault();
   try {
     const res = await axios.post("http://localhost:6005/api" ,{name : name , email: email});
   } catch (error) {
    console.log(error)
   }
  getList();
  setName('')
  setEmail('')
 }

  return (
    <div style={{  position: "relative" , height:'100vh'}}>
      <div style={{position: "absolute" ,top: "50%" ,left: "30%"}}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">name:</label>
        <input type="text" id="fname" name="fname" onChange={(e) => (setName(e.target.value))} value={name}/>
        <label htmlFor="lname">Email</label>
        <input type="text" id="lname" name="lname" onChange={(e) => (setEmail(e.target.value))} value={email}/>
        
        <button > Register</button>
      </form>
      <h1>registered :</h1>
      <span style={{ margin:"20px"}}>Name</span>
            <span style={{ margin:"20px"}}>Email</span>
      {
        list.map((listItem , index) => {
          return (
            <div key={index} style={{display:'flex' , margin:"20px"}}>
            <span style={{ margin:"20px"}}>{listItem.name}</span>
            <span style={{ margin:"20px"}}>{listItem.email}</span>
            </div>
          );
        })
      } 
      </div>
    </div>
  );
}

export default App;
