'use client'
const Signup =()=>{

    const handleChange=()=>{
        
    }
    return(
        <div className=" flex justify-center  text-black bg-white my-10 ">
        <div className="   w-[1100px]">
            <h1 className=" font-bold text-xl mb-4 m-2">Signup Form</h1>
        <form className="shadow-md rounded-sm p-5">
      
        <input type="file" placeholder="Upload Your Photo" name="file" onChange={(e)=>handleChange(e.target.value)} className="px-3 m-4 py-1 border border-gray-300  w-full hover:border-blue-200  text-xl"   />
        <input type="text" placeholder="Enter Your Name" name="name" onChange={(e)=>handleChange(e.target.value)} className="px-3 m-4 py-1  border border-gray-300  w-full hover:border-blue-200  text-xl"   />
        <input type="email" placeholder="Enter Your Email" name="eamil" onChange={(e)=>handleChange(e.target.value)} className="px-3 m-4 py-1 border border-gray-300  w-full hover:border-blue-200  text-xl"   />
        <input type="password" placeholder="Enter Your Password" name="password" onChange={(e)=>handleChange(e.target.value)} className="px-3 m-4     py-1 border border-gray-300  w-full hover:border-blue-200  text-xl"   />
        <div className=" flex  mt-3 m-2"><div className="bg-[#f75d34] text-white px-4 py-2 mr-2"><button type="submit"> Signup</button></div><div className="bg-[#f75d34] text-white px-4 py-2"><button type="submit">Login</button></div></div>
        </form>
        </div>
        </div>
    )
}

export default Signup