'use client'

import React, {useState} from 'react'

const CostCalculator = () => {
    const [currentZip, setCurrentZip] = useState('');
    const [destinationZip, setDestinationZip] = useState('');
    const [destinationCountry, setDestinationCountry] = useState('');
    const [plannedDate, setPlannedDate] = useState('');
    const [plannedTime, setPlannedTime] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const formValues = { currentZip, destinationZip, destinationCountry, plannedDate, plannedTime };
        console.log(formValues);
    };


  return (
    <section className="flex min-h-full flex-col  justify-between px-5 py-10">
    <div className='flex flex-col justify-center'>
      <h1 className='text-xl font-semibold '>SHIPPING COST CALCULATOR</h1>
    
      <div>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <label className="flex flex-col">
                Current Zip:
                <input type="text" value={currentZip} onChange={(e) => setCurrentZip(e.target.value)} className="p-2 border-2 rounded"/>
            </label>
            <label className="flex flex-col">
                Destination Zip:
                <input type="text" value={destinationZip} onChange={(e) => setDestinationZip(e.target.value)} className="p-2 border-2 rounded"/>
            </label>
            <label className="flex flex-col">
                Destination Country:
                <input type="text" value={destinationCountry} onChange={(e) => setDestinationCountry(e.target.value)} className="p-2 border-2 rounded"/>
            </label>
            <label className="flex flex-col">
                Planned Date:
                <input type="date" value={plannedDate} onChange={(e) => setPlannedDate(e.target.value)} className="p-2 border-2 rounded"/>
            </label>
            <label className="flex flex-col">
                Planned Time:
                <input type="time" value={plannedTime} onChange={(e) => setPlannedTime(e.target.value)} className="p-2 border-2 rounded"/>
            </label>
            <input type="submit" value="Calculate" className="p-2 mt-4 bg-blue-600 text-white  cursor-pointer hover:bg-blue-500 rounded-full"/>
        </form>
        </div>
      </div>
    </section>
  )
}

export default CostCalculator
