import {useState} from "react";
function App(){
  const [name,setname]=useState("");
  const[students,setstudent]=useState([]);
  const[error,seterror]=useState("");

  function handleSubmit(e){
e.preventDefault();

if(!name.trim())
  {
  seterror("enter name");
  return;
  }

  setstudent([...students,name.trim()])
  setname("");
  seterror("");
}
return(
    <form onSubmit={handleSubmit}>
  <h1>student management system</h1>
  <input value={name} onChange={(e)=>setname(e.target.value)} placeholder="name"/>
  <button type="submit">add</button>
<h2>student list</h2>
<ul>
  {students.map((student,index)=>(<li key={index}>{student}</li>

  )
  )
  }
  </ul>

    </form>

);
}
export default App