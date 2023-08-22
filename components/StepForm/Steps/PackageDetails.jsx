import React, {useState, useContext} from 'react'
import StepperContext from '@/context/StepperContext'

const PackageDetails = () => {
  const {userData, setUserData} = useContext(StepperContext)
  // const [values, setValues] = useState({
  //   shippingQuantity:"",
  //   productType: "",
  //   totalWeight: 28,
  // })

  const handleChange = (e) => {
    const {name, value} = e.target
    setUserData({...userData, [name]:value})
  }
  return (
    <section className="flex min-h-full flex-col px-4 py-10">
    <div className='flex flex-col'>
      <form className="flex flex-col space-y-4  ">
      <div className=''>
      <label className="flex flex-col">
                Product Type / Name
                <div className='relative'>
                <input type="text" 
                onChange={handleChange}
                value ={userData["productType"] || ""}
                name= "productType"
                placeholder='Product'
                required 
                className=" p-2 my-3 border-2 w-3/4 rounded-md shadow-md"/>
                </div>
      </label>
      <label className="flex flex-col ">
                Quantity 
                <div className='relative'>
                <input type="number" 
                onChange={handleChange}
                value ={userData["shippingQuantity"] || ""}
                name= "shippingQuantity"
                placeholder='Quantity'
                required
                className=" p-2 my-3 border-2 w-3/4 rounded-md shadow-md"/>
                </div>
      </label>
      </div>
      <div className=''>
      <label className="flex flex-col">
                Total Weight (kg):
                <div className='relative'>
                <input type="number" 
                onChange={handleChange}
                value ={userData["totalWeight"] || ""}
                name= "totalWeight"
                placeholder='Weight'
                required
                className=" p-2 my-3 border-2 w-3/4 rounded-md shadow-md"/>
                </div>
      </label>
      <label className="flex flex-col">
                Product Description:
                <div className='relative'>
                <textarea
					        rows={4}
					        required
					        minLength={10}
					        maxLength={500}
					        name="description"
					        className="w-3/4 p-2 border-2 shadow-md rounded-md"
                  onChange={handleChange}
                  value={userData["description"] || ""}
                  placeholder="Type your message"
				/>
                </div>
      </label>

      </div>
      </form>
    </div>
    </section>
  )
}

export default PackageDetails
