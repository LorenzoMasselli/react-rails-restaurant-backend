import './Logout.css'

const Logout =({setCurrUser})=>{
    const logout=async (setCurrUser)=>{
        try {
            const response=await fetch("http://localhost:3000/logout",{
                method: "delete",
                headers: {
                    "content-type": "application/json",
                    "authorization": localStorage.getItem("token")
                },
            })
            const data=await response.json()
            if(!response.ok) throw data.error
            localStorage.removeItem("token")
            setCurrUser(null)
        } catch (error) {
            console.log("error", error)
        }
    }
    const handleClick=e=>{
        e.preventDefault()
         logout(setCurrUser)
    }
    return (
        <div className='logout'>
            <input type="button" value='Logout' onClick={handleClick} className='logout-button'/>
        </div>
    )
}
export default Logout