import React, {useState, useContext} from 'react'
import StepperContext from '@/context/StepperContext'

const PickUpAddress = () => {
  const {userData, setUserData} = useContext(StepperContext)
  // const [values, setValues] = useState({
  //   senderCountry:"",
  //   senderCity:"",
  //   shippingDate:"",
  //   shippingTime:"",
  //   contactName:"",
  //   contactAddress:"",
    
  // })
  const handleChange = (e) => {
    const {name, value} = e.target
    setUserData({...userData, [name]:value})
  }
  return (
    <section className="flex min-h-full flex-col justify-center px-5 py-10">
    <div className='flex flex-col justify-center'>
      <form className="flex flex-col space-y-4  ">
      <div className=''>
      <label className="flex flex-col">
                Country:
                <div className='relative'>
                <input type="text" 
                onChange={handleChange}
                value ={userData["senderCountry"] || ""}
                name= "senderCountry"
                placeholder='Country'
                className=" p-2 my-3 border-2 w-3/4 rounded-md shadow-md"/>
                </div>
      </label>
      <label className="flex flex-col ">
                City:
                <div className='relative'>
                <input type="text" 
                onChange={handleChange}
                value ={userData["senderCity"] || ""}
                name= "senderCity"
                placeholder='City'
                className=" p-2 my-3 border-2 w-3/4 rounded-md shadow-md"/>
                </div>
      </label>
      </div>
      <div className=''>
      <label className="flex flex-col">
                Contact Name:
                <div className='relative'>
                <input type="text" 
                onChange={handleChange}
                value ={userData["contactName"] || ""}
                name= "contactName"
                placeholder='Name'
                className=" p-2 my-3 border-2 w-3/4 rounded-md shadow-md"/>
                </div>
      </label>
      <label className="flex flex-col">
                Address:
                <div className='relative'>
                <input type="text" 
                onChange={handleChange}
                value ={userData["contactAddress"] || ""}
                name= "contactAddress"
                placeholder='Address'
                className=" p-2 my-3 border-2 w-3/4 rounded-md shadow-md"/>
                </div>
      </label>
      <label className="flex flex-col">
                Date:
                <div className='relative'>
                <input type="date" 
                onChange={handleChange}
                value ={userData["shippingDate"] || ""}
                name= "shippingDate"
                placeholder='Date'
                className=" p-2 my-3 border-2 w-3/4 rounded-md shadow-md"/>
                </div>
      </label>
      </div>
      </form>
    </div>
    </section>
  )
}

export default PickUpAddress
