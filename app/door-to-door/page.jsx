'use client'

import Stepper from '@/components/StepForm/Stepper'
// import StepperControl from '@/components/StepForm/StepperControl'
import StepperContext from '@/context/StepperContext';
import DropOff from '@/components/StepForm/Steps/DropOff'
import PackageDetails from '@/components/StepForm/Steps/PackageDetails'
import Payment from '@/components/StepForm/Steps/Payment'
import PickUpAddress from '@/components/StepForm/Steps/PickUpAddress'
import React, { useEffect, useState } from 'react'
import data from '../models/data';

const page = () => {
    
    const [currentStep, setCurrentStep] = useState(1)
    const [userData, setUserData] = useState([])
    const [finalData, setFinalData] = useState([])
    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(false)

    const steps = [
        "Package Details",
        "Pickup Address",
        "Drop Off Address",
        "Payment"
    ]

    const handleClick = (clickType) => {
		let newStep = currentStep;
		(clickType == "next") ? newStep++ : newStep--;
		// Check if steps are within the boundary
		if (newStep > 0 && newStep <= steps.length) {
			setCurrentStep(newStep)
		}
    }
    
    const displayStep = (step) => {
        switch(step) {
            case 1:
                return <PackageDetails />
            case 2:
                return <PickUpAddress />
            case 3:
                return <DropOff />
            case 4:
                return <Payment />
            default:
        }
    }
    const generateTrackingNumber =() =>{
        const randomPart = Math.floor(Math.random()* 10000000000000)
        return `BTSBTSAWB${randomPart}`
    }
    const newTrackingNumber = generateTrackingNumber()
    const currentDate = new Date().toLocaleDateString()
    useEffect(()=>{
    setUserData((prevData)=>({
        ...prevData,
        shipmentID: newTrackingNumber,
        pendingPayment:"Order Received Pending Payment",
        pendingPaymentDate: currentDate,
    }))
    },[])
    
    const submitData= async() =>{
       // setFinalData(userData)
        if(currentStep === steps.length - 1){
            const res = await fetch("api/track", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Accept': 'application/json'
                },
                body: JSON.stringify(
                    userData
                ),

            });
            const {msg, success} =await res.json();
            setError(msg);
            setSuccess(success)

            // if(success){
            //     setFinalData(finalData=>[...finalData,userData])
            //     setUserData('')
            // }
            // setFinalData(finalData=>[...finalData,userData])
            // setUserData('')
            if(success){
                setFinalData(userData)
                setUserData('')
            }
        }
        
        
    }

  return (
    <div className='md:w-3/4 mx-auto shadow-xl rounded-2xl pb-2'>
      {/* Stepper used for progress/steps */}
        <div className="container horizontal mt-5 mb-12">
            <Stepper 
            steps={steps}
            currentStepNumber={currentStep}
            />
        </div>  


        {/* Display Components */}
        <div className='my-10 p-10'>
            <StepperContext.Provider value={{
                userData,
                setUserData,
                finalData,
                setFinalData,
                submitData,
                error,
                success
            }}>
                {displayStep(currentStep)}
            </StepperContext.Provider>
        </div>



      {/* Navigation Controls */}
      {currentStep !== steps.length &&
      <div className='container flex justify-around mt-4 mb-8'>
        {/* back button */}
        <button 
        onClick={() => handleClick()}
        className={`outline_btn ${currentStep === 1 ? 'cursor-not-allowed':''}`}>Back</button>
        {/* next button */}
        <button 
        onClick={() => {handleClick("next"); submitData()}}
        className='blue_btn'>
            {currentStep === steps.length - 1  ? 'Confirm': 'Next'}
        </button>
        
    </div>
    }

    </div>
  )
}

export default page
