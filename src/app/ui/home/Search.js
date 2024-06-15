import { IoIosSearch } from "react-icons/io";

const Search=()=>{
    return(
        <div className=" relative mx-2 my-3">
    <div className=" flex items-center ">  <div  className=" absolute px-3"> <IoIosSearch className=" w-6 h-6  text-black "/></div> 
        <input type="text" placeholder="Search Cars eg. Honda Elevate" name="search" className="px-12 py-4 w-full  rounded-full  border bg-[#f0eeee]  border-gray-300"/></div>
        </div>
    )
}

export default Search;