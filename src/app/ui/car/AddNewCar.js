'use client'
const AddNewCar=()=>{

    const handleChange =()=>{

    }

return(
    <div   className=" flex flex-col bg-[#faebd7] items-center px-20  ">
        <h2 className=" text-center font-bold text-2xl mb-4">Add To Car </h2>
    <form className=" flex flex-col w-[700px]   shadow-md p-6 gap-4"> <input type="text" placeholder="Enter Make" name="make" onChange={handleChange} className="px-2 py-2  border  border-gray-400"/>
    <input type="text" placeholder="Enter Model" name="model" onChange={handleChange} className="px-2 py-2  border  border-gray-400"/>
    <input type="date" placeholder="Enter Year" name="year" onChange={handleChange} className="px-2 py-2  border  border-gray-400"/>
    <input type="text" placeholder="Enter Color" name="color" onChange={handleChange} className="px-2 py-2  border  border-gray-400"/>
    <input type="number" placeholder="Enter Mileage" name="mileage" onChange={handleChange} className="px-2 py-2  border  border-gray-400"/>
    <input type="text" placeholder="Enter Price" name="price" onChange={handleChange} className="px-2 py-2  border  border-gray-400"/>
    <input type="text" placeholder="Enter Fuel Type" name="fuelType" onChange={handleChange} className="px-2 py-2  border  border-gray-400"/>
    <input type="text" placeholder="Enter Transmission" name="transmission" onChange={handleChange} className="px-2 py-2  border  border-gray-400"/>
    <input type="text" placeholder="Enter Engine" name="engine" onChange={handleChange} className="px-2 py-2  border  border-gray-400"/>
    <input type="number" placeholder="Enter Horse power" name="horsepower" onChange={handleChange} className="px-2 py-2  border  border-gray-400"/>
    <select className="px-2 py-2  border  border-gray-400">
        <option>Select Features </option>
        <option>Bluetooth</option>
        <option>Backup Camera</option>
        <option>Keyless Entry</option>
    </select>
    <input type="number" placeholder="Enter owners" name="owners" onChange={handleChange} className="px-2 py-2  border  border-gray-400"/>
    <input type="file" placeholder="Enter File" name="owners" onChange={handleChange} className="px-2 py-2  border  border-gray-400"/>
</form>
    </div>
)
}

export default AddNewCar;