import React,{useContext} from 'react'
import StepperContext from '@/context/StepperContext'
import Link from 'next/link'
const Payment = () => {
  const { error, success, finalData} = useContext(StepperContext)
  const shippingCost = 35
  const insurance = 2
  return (
    <div>
    {/* {finalData.map((data) =>( */}
      <div>
      <div>



 

 <div className="flex flex-wrap -mx-4 py-1">
 <div className="w-1/2"><b>No. of Items:</b></div>
 <div className="w-1/2">{finalData.shippingQuantity}</div>
 </div>
 <div className="flex flex-wrap -mx-4 py-1">
 <div className="w-1/2"><b>Volumetric/Cubic Weight:</b></div>
 <div className="w-1/2">0.00 Lbs / 0.00 Kg</div>
 </div>

 <div className="flex flex-wrap -mx-4 py-1">
 <div className="w-1/2"><b> Actual Weight: </b></div>
 <div className="w-1/2">{finalData.totalWeight} Kg</div>
 </div>
 <br/>

 <div className="flex flex-wrap -mx-4 py-1">
 <div className="w-1/2"><b> Using Volumetric/Cubic Weight: </b></div>
 <div className="w-1/2"> 0.00 Lbs / 0.00 Kg</div>
 </div>

 <div className="flex flex-wrap -mx-4 py-1">
 <div className="w-1/2">
 <b> Total Volume: </b>
 </div>
 <div className="w-1/2"> 0.00 Cu.cm </div>
 </div>

 <div className="flex flex-wrap -mx-4 py-1">
 <div className="w-1/2">
 <b> Total Volume: </b>
 </div>
 <div className="w-1/2"> 0.00 Cu.in </div>
 </div>

 <div className="flex flex-wrap -mx-4 py-1">
 <div className="w-1/2">
 <b> Total Item Cost:  </b>
 </div>
 <div className="w-1/2"></div>

 </div>

 
 <div className="flex flex-wrap -mx-4 py-1">
 <div className="w-1/2">
 <b>
 Int'l Shipping Cost:
 </b>
 </div>
 <div className="w-1/2">${shippingCost}</div>
 </div>

 <div className="flex flex-wrap -mx-4 py-1">
 <div className="w-1/2"><b>Insurance:</b></div>
 <div className="w-1/2">${insurance}</div>
 </div>
 
 
 
 
 


 <div className="flex flex-wrap -mx-4 py-1">
 <div className="w-1/2"><b>Total Amount:</b><br/>
 <small>(In US Dollar ${insurance + shippingCost})</small>
 </div>
 <div className="w-1/2">${insurance + shippingCost}</div>
 </div>

 
 
 <div className="flex flex-wrap -mx-4 py-1">
 <div className="w-1/2"><b>Payable:-</b><br/>
 
 <div>
 (In US Dollar)
 </div>
 
 </div>
 <div className="w-1/2" ><div>${insurance + shippingCost}</div></div>
 </div>
 <div className="flex flex-wrap -mx-4 py-1">
 <div className="w-1/4">
 <b> Tracking Number:  </b>
 </div>
 <div className="w-3/4">{finalData.shipmentID} </div>
 </div>

 <div className="flex flex-wrap -mx-4">&nbsp;&nbsp;&nbsp;&nbsp;
 <strong className="text-red-600">If actual weight wasn’t provided, you may be billed or refunded any differences in price or shipping upon review</strong>
 
 </div>
 <div className="flex flex-wrap -mx-4">&nbsp;&nbsp;&nbsp;&nbsp;
 <strong className="text-blue-500"> Please Note down your TRACKING NUMBER and contact us for payment </strong>
 
 </div>

 
</div>
      </div>
        {/* ))} */}
      {
                error && error.map((e, index)=> (
					<div key={index}>
                    <div className="p-5 bg-slate-100 flex flex-col">
                    <div className={`${success? "text-green-800": 'text-red-500'} px-5 py-3`}>{e}</div>
                    </div>
					</div>
                ))
      } 
      <div className='flex items-center justify-center p-4'>
      <Link href="/contact"
             className="relative w-3/4 md:w-1/4 cursor-default rounded-lg bg-blue-200 py-2 pl-3 pr-10 text-center shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
             >
             Proceed to Contact
      </Link>
      </div>
    </div>
  )
}

export default Payment
