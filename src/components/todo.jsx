
import { useState } from "react"
import classes from "./todo.module.css"

const Todo =(props)=>{
 


    const [email,setEmail]=useState("")

const noSambit= (e)=>{
    e.preventDefault()
}

const emailStete=(e)=>{
setEmail(e.target.value);
}

const seivUser=()=>{
    const UserEmail={
    email,
    id: Math.random().toString()
    }
    props.save(UserEmail)
    setEmail("")
}
    return(
<form  onSubmit={noSambit}className={classes.todo}> 
    <h1>FORM</h1>
<input onChange={emailStete} value={email} type="text" />
<div>
<button onClick={seivUser} >add</button>
</div>
</form>
    )
}
export default Todo;        