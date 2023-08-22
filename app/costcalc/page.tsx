'use client'

import { Listbox,Transition } from '@headlessui/react';
import Link from 'next/link';
import React, {useState, useEffect ,Fragment} from 'react'

const countries = [
  { name: 'Afghanistan' },
  { name: 'Albania' },
  { name: 'Algeria' },
  { name: 'Andorra' },
  { name: 'Angola' },
  { name: 'Antigua and Barbuda' },
  { name: 'Argentina' },
  { name: 'Armenia' },
  { name: 'Australia' },
  { name: 'Austria' },
  { name: 'Azerbaijan' },
  { name: 'Bahamas' },
  { name: 'Bahrain' },
  { name: 'Bangladesh' },
  { name: 'Barbados' },
  { name: 'Belarus' },
  { name: 'Belgium' },
  { name: 'Belize' },
  { name: 'Benin' },
  { name: 'Bhutan' },
  { name: 'Bolivia' },
  { name: 'Bosnia and Herzegovina' },
  { name: 'Botswana' },
  { name: 'Brazil' },
  { name: 'Brunei' },
  { name: 'Bulgaria' },
  { name: 'Burkina Faso' },
  { name: 'Burundi' },
  { name: 'Cabo Verde' },
  { name: 'Cambodia' },
  { name: 'Cameroon' },
  { name: 'Canada' },
  { name: 'Central African Republic' },
  { name: 'Chad' },
  { name: 'Chile' },
  { name: 'China' },
  { name: 'Colombia' },
  { name: 'Comoros' },
  { name: 'Congo (Democratic Republic)' },
  { name: 'Costa Rica' },
  { name: 'Croatia' },
  { name: 'Cuba' },
  { name: 'Cyprus' },
  { name: 'Czech Republic' },
  { name: 'Denmark' },
  { name: 'Djibouti' },
  { name: 'Dominica' },
  { name: 'Dominican Republic' },
  { name: 'East Timor (Timor-Leste)' },
  { name: 'Ecuador' },
  { name: 'Egypt' },
  { name: 'El Salvador' },
  { name: 'Equatorial Guinea' },
  { name: 'Eritrea' },
  { name: 'Estonia' },
  { name: 'Eswatini (formerly Swaziland)' },
  { name: 'Ethiopia' },
  { name: 'Fiji' },
  { name: 'Finland' },
  { name: 'France' },
  { name: 'Gabon' },
  { name: 'Gambia' },
  { name: 'Georgia' },
  { name: 'Germany' },
  { name: 'Ghana' },
  { name: 'Greece' },
  { name: 'Grenada' },
  { name: 'Guatemala' },
  { name: 'Guinea' },
  { name: 'Guinea-Bissau' },
  { name: 'Guyana' },
  { name: 'Haiti' },
  { name: 'Honduras' },
  { name: 'Hungary' },
  { name: 'Iceland' },
  { name: 'India' },
  { name: 'Indonesia' },
  { name: 'Iran' },
  { name: 'Iraq' },
  { name: 'Ireland' },
  { name: 'Israel' },
  { name: 'Italy' },
  { name: 'Ivory Coast (Côte d\'Ivoire)' },
  { name: 'Jamaica' },
  { name: 'Japan' },
  { name: 'Jordan' },
  { name: 'Kazakhstan' },
  { name: 'Kenya' },
  { name: 'Kiribati' },
  { name: 'Korea (North)' },
  { name: 'Korea (South)' },
  { name: 'Kosovo' },
  { name: 'Kuwait' },
  { name: 'Kyrgyzstan' },
  { name: 'Laos' },
  { name: 'Latvia' },
  { name: 'Lebanon' },
  { name: 'Lesotho' },
  { name: 'Liberia' },
  { name: 'Libya' },
  { name: 'Liechtenstein' },
  { name: 'Lithuania' },
  { name: 'Luxembourg' },
  { name: 'Madagascar' },
  { name: 'Malawi' },
  { name: 'Malaysia' },
  { name: 'Maldives' },
  { name: 'Mali' },
  { name: 'Malta' },
  { name: 'Marshall Islands' },
  { name: 'Mauritania' },
  { name: 'Mauritius' },
  { name: 'Mexico' },
  { name: 'Micronesia' },
  { name: 'Moldova' },
  { name: 'Monaco' },
  { name: 'Mongolia' },
  { name: 'Montenegro' },
  { name: 'Morocco' },
  { name: 'Mozambique' },
  { name: 'Myanmar (Burma)' },
  { name: 'Namibia' },
  { name: 'Nauru' },
  { name: 'Nepal' },
  { name: 'Netherlands' },
  { name: 'New Zealand' },
  { name: 'Nicaragua' },
  { name: 'Niger' },
  { name: 'Nigeria' },
  { name: 'North Macedonia' },
  { name: 'Norway' },
  { name: 'Oman' },
  { name: 'Pakistan' },
  { name: 'Palau' },
  { name: 'Panama' },
  { name: 'Papua New Guinea' },
  { name: 'Paraguay' },
  { name: 'Peru' },
  { name: 'Philippines' },
  { name: 'Poland' },
  { name: 'Portugal' },
  { name: 'Qatar' },
  { name: 'Romania' },
  { name: 'Russia' },
  { name: 'Rwanda' },
  { name: 'Saint Kitts and Nevis' },
  { name: 'Saint Lucia' },
  { name: 'Saint Vincent and the Grenadines' },
  { name: 'Samoa' },
  { name: 'San Marino' },
  { name: 'Sao Tome and Principe' },
  { name: 'Saudi Arabia' },
  { name: 'Senegal' },
  { name: 'Serbia' },
  { name: 'Seychelles' },
  { name: 'Sierra Leone' },
  { name: 'Singapore' },
  { name: 'Slovakia' },
  { name: 'Slovenia' },
  { name: 'Solomon Islands' },
  { name: 'Somalia' },
  { name: 'South Africa' },
  { name: 'South Sudan' },
  { name: 'Spain' },
  { name: 'Sri Lanka' },
  { name: 'Sudan' },
  { name: 'Suriname' },
  { name: 'Sweden' },
  { name: 'Switzerland' },
  { name: 'Syria' },
  { name: 'Taiwan' },
  { name: 'Tajikistan' },
  { name: 'Tanzania' },
  { name: 'Thailand' },
  { name: 'Togo' },
  { name: 'Tonga' },
  { name: 'Trinidad and Tobago' },
  { name: 'Tunisia' },
  { name: 'Turkey' },
  { name: 'Turkmenistan' },
  { name: 'Tuvalu' },
  { name: 'Uganda' },
  { name: 'Ukraine' },
  { name: 'United Arab Emirates (UAE)' },
  { name: 'United Kingdom (UK)' },
  { name: 'United States of America (USA)' },
  { name: 'Uruguay' },
  { name: 'Uzbekistan' },
  { name: 'Vanuatu' },
  { name: 'Vatican City (Holy See)' },
  { name: 'Venezuela' },
  { name: 'Vietnam' },
  { name: 'Yemen' },
  { name: 'Zambia' },
  { name: 'Zimbabwe' }
]




const CostCalc = () => {
    const [originZip, setOriginZip] = useState('');
    const [destinationZip, setDestinationZip] = useState('');
    const [originCity, setOriginCity] = useState('')
    const [originState, setOriginState] = useState('')
    const [originCountry, setOriginCountry] = useState(countries[185]);
    const [destinationCountry, setDestinationCountry] = useState(countries[185]);
    const [destinationState, setDestinationState]= useState('')
    const [destinationCity, setDestinationCity]= useState('')
    const [plannedDate, setPlannedDate] = useState('');
    const [plannedTime, setPlannedTime] = useState('');
    const [isOriginValid, setIsOriginValid] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [isDestinationValid, setIsDestinationValid] = useState(false)
    const [parcel, setParcel] = useState({
      weight: 0,
      dimension: {
          length: 0,
          width: 0,
          height: 0
      }
  });

    const APIURL = `https://api.palmconnectivity.com/public/zipcode/info?apiKey=${process.env.NEXT_PUBLIC_ZIP_CODE_API}&zipcode=${originZip}`
    const APIURL2 = `https://api.palmconnectivity.com/public/zipcode/info?apiKey=${process.env.NEXT_PUBLIC_ZIP_CODE_API}&zipcode=${destinationZip}`

    useEffect(()=>{
      // Validate zip code format
      const zipCodeRegex = /^\d{5}$/;
      if (zipCodeRegex.test(originZip)) {
          fetchData().then((response)=>{
              if(response.ok){
                  response.json().then((r)=>{
                      if( Number(r.data.zipcode) === Number(originZip) ){
                          setIsOriginValid(true)
                          setOriginCity(r.data.city)
                          setOriginState(r.data.state_name)
                      }else{
                        setIsDestinationValid(false)
                      }
                      
                  })
              }else{
                setIsDestinationValid(false)
              }
          })
      }
  }, [])

  useEffect(()=>{
    // Validate zip code format
    const zipCodeRegex = /^\d{5}$/;
    if (zipCodeRegex.test(destinationZip)) {
        fetchData2().then((response)=>{
            if(response.ok){
                response.json().then((r)=>{
                    if(Number(r.data.zipcode) === Number(destinationZip)){
                        setIsDestinationValid(true)
                        setDestinationCity(r.data.city)
                        setDestinationState(r.data.state_name)
                    }else{
                      setIsDestinationValid(false)
                    }
                    
                })
            }else{
              setIsDestinationValid(false)
            }
            
            
        })
    }
}, [])

  
  const fetchData = async () => {
      return await fetch(APIURL)
  };
  const fetchData2 = async () => {
    return await fetch(APIURL2)
  };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        calculateShippingCost();
        const formValues = { originZip, destinationZip, destinationCountry, originCountry, parcel, plannedDate, plannedTime };
        console.log(formValues);
        setSubmitted((submitted)=> !submitted)
    };

    const calculateShippingCost = () => {
      let baseCost;

      if (originCountry.name === 'Ghana' && destinationCountry.name === 'United States of America (USA)') {
          baseCost = 200;
      } else if (destinationCountry.name === 'United States of America (USA)') {
          baseCost = 100;
      }else if(destinationCountry.name === 'Canada'){
          baseCost = 150;
      } 
      else {
          baseCost = 200;
      }

      let weightCost = parcel.weight * 2;

      let sizeCost = (parcel.dimension.length * parcel.dimension.width * parcel.dimension.height) * 0.5;

      return baseCost + weightCost + sizeCost;
  };


  return (
    <section className="flex min-h-full flex-col justify-center px-5 py-10">
    <div className='flex flex-col justify-center '>
      <h1 className='text-xl font-semibold '>SHIPPING COST CALCULATOR</h1>
    
      <div>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 ">            
              <div className='relative z-30'>
                What country are you shipping from?
                <Listbox value={originCountry} onChange={setOriginCountry}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{originCountry.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                  </svg>
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {countries.map((country, countryIdx) => (
                <Listbox.Option
                  key={countryIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-blue-500 text-white' : 'text-gray-900'
                    }`
                  }
                  value={country}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {country.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                          </svg>
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
                </div>
                { originCountry.name === 'United States of America (USA)' ? (
                <label className="flex flex-col">
                What is the Zip Code?
                <div className='relative'>
                <input type="text" value={originZip} onChange={(e) => setOriginZip(e.target.value)} className="p-2 border-2 w-full rounded-md"/>
                { isOriginValid ? (
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                </span>) : (
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                  </span>
                
                )
                }
                </div>
                </label>) :
                (
                  <div></div>
                )
                }

                <div className='relative z-10'>
                What country are you shipping to?
                <Listbox value={destinationCountry} onChange={setDestinationCountry}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{destinationCountry.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                  </svg>
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {countries.map((country, countryIdx) => (
                <Listbox.Option
                  key={countryIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-blue-500 text-white' : 'text-gray-900'
                    }`
                  }
                  value={country}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {country.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                          </svg>
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
                </div>
           
            <label className="flex flex-col ">
                What is the Zip Code?
                <div className='relative'>
                <input type="text" value={destinationZip} onChange={(e) => setDestinationZip(e.target.value)} className=" p-2 border-2 w-full rounded-md"/>
                { isDestinationValid ? (
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                </span>) : (
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                  </span>
                
                )
                }
                </div>
            </label>
            <label className="flex flex-col">
                Weight (kg):
                <div className='relative'>
                <input type="number" value={parcel.weight} onChange={(e) => setParcel({...parcel, weight: parseFloat(e.target.value)})} className=" p-2 border-2 w-full rounded-md"/>
                </div>
            </label>
            <label className="flex flex-col">
                Length (cm):
                <div className='relative'>
                <input type="number" value={parcel.dimension.length} onChange={(e) => setParcel({...parcel, dimension:{...parcel.dimension, length: parseFloat(e.target.value)}})} className=" p-2 border-2  rounded-md"/>
                </div>
            </label>
            <label className="flex flex-col">
                Width (cm):
                <div className='relative'>
                <input type="number" value={parcel.dimension.width} onChange={(e) => setParcel({...parcel, dimension:{...parcel.dimension, width: parseFloat(e.target.value)}})} className=" p-2 border-2  rounded-md"/>
                </div>
            </label>
            <label className="flex flex-col">
                Height (cm):
                <div className='relative'>
                <input type="number" value={parcel.dimension.height} onChange={(e) => setParcel({...parcel, dimension:{...parcel.dimension, height: parseFloat(e.target.value)}})} className=" p-2 border-2  rounded-md"/>
                </div>
            </label>
            
            <label className="flex flex-col">
                Planned Date:
                <input type="date" value={plannedDate} onChange={(e) => setPlannedDate(e.target.value)} className="p-2 border-2 rounded-md"/>
            </label>
            <label className="flex flex-col">
                Planned Time:
                <input type="time" value={plannedTime} onChange={(e) => setPlannedTime(e.target.value)} className="p-2 border-2 rounded-md"/>
            </label>
            <div className=' flex flex-col justify-center items-center'>
            <input type="submit" value="Calculate" className=" p-2 mt-4 w-2/4 bg-blue-600 text-white  cursor-pointer hover:bg-blue-500 rounded-full"/>
            </div>
        </form>
        </div>
      </div>
      {submitted &&
      <div className='flex flex-col pt-28 min-h-full justify-center'>
        <Transition
        show= {submitted}
        enter="transition-opacity duration-75"
        enterFrom='opacity-0'
        enterTo="opacity-100"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        
        >
          <div className='flex flex-col items-center mx-auto'>
            <p className='font-extrabold text-lg md:text-2xl'>SHIPPING COST:</p>
            <p className='text-center'>The cost of shipping from {originCountry.name === 'United States of America (USA)' ? (
              <p className='text-base md:text-lg font-semibold'>
              {originCity}, {originState}. {originCountry.name}. 
              </p>
            ): (
            <p className='text-base md:text-lg font-semibold'>
              {originCountry.name}
            </p>
            )} <p>to</p> 
            <p  className='text-base md:text-lg font-semibold'>{destinationCity}, {destinationState}. {destinationCountry.name}</p>
             <p>with</p> Weight:{parcel.weight},  Height:{parcel.dimension.height},  
              Length:{parcel.dimension.length} and Width:{parcel.dimension.width} is
             </p>
             <p className='text-2xl'>${calculateShippingCost().toFixed(2)}</p>
             <Link href="/contact"
             className="relative w-3/4 md:w-1/4 cursor-default rounded-lg bg-blue-200 py-2 pl-3 pr-10 text-center shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
             >
             Contact us to get a Tracking Number
             </Link>
          </div>
        </Transition>
      </div>
      }
    </section>
  )
}

export default CostCalc
