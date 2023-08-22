import React from 'react'

const StepperControl = ({handleClick, currentStep, steps}) => {
  const handleClick = (clickType) => {
		let newStep = currentStep;
		(clickType == "next") ? newStep++ : newStep--;
		// Check if steps are within the boundary
		if (newStep > 0 && newStep <= steps.length) {
			setCurrentStep(newStep)
		}
    }

  return (
    <div className='container flex justify-around mt-4 mb-8'>
        {/* back button */}
        <button 
        onClick={() => handleClick()}
        className='outline_btn'>Back</button>
        {/* next button */}
        <button 
        onClick={() => handleClick("next")}
        className='blue_btn'>Next</button>
    </div>
  )
}

export default StepperControl
