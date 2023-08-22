
import React, {useContext, useState} from 'react'
import StepperContext from '@/context/StepperContext'


const DropOff = () => {
  const {userData, setUserData,finalData } = useContext(StepperContext)
  
  // const [values, setValues] = useState({
  //   deliveryCountry: "",
  //   deliveryCity: "",
  //   deliveryDate: "",
  //   deliveryTime: "",
  //   deliveryContactName:"",
  //   deliveryContactAddress:"",
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
                Delivery Country:
                <div className='relative'>
                <input type="text" 
                onChange={handleChange}
                value ={userData["deliveryCountry"] || ""}
                name= "deliveryCountry"
                placeholder='Delivery Country'
                className=" p-2 my-3 border-2 w-3/4 rounded-md shadow-md"/>
                </div>
      </label>
      <label className="flex flex-col ">
                Delivery City:
                <div className='relative'>
                <input type="text" 
                onChange={handleChange}
                value ={userData["deliveryCity"] || ""}
                name= "deliveryCity"
                placeholder='Delivery City'
                className=" p-2 my-3 border-2 w-3/4 rounded-md shadow-md"/>
                </div>
      </label>
      </div>
      <div className=''>
      <label className="flex flex-col ">
                Contact:
                <div className='relative'>
                <input type="text" 
                onChange={handleChange}
                value ={userData["deliveryContact"] || ""}
                name= "deliveryContact"
                placeholder='Name'
                className=" p-2 my-3 border-2 w-3/4 rounded-md shadow-md"/>
                </div>
      </label>
      <label className="flex flex-col ">
                Address:
                <div className='relative'>
                <input type="text" 
                onChange={handleChange}
                value ={userData["deliveryAddress"] || ""}
                name= "deliveryAddress"
                placeholder='Address'
                className=" p-2 my-3 border-2 w-3/4 rounded-md shadow-md"/>
                </div>
      </label>
      </div>
      </form>
    </div>
    </section>
  )
}

export default DropOff
