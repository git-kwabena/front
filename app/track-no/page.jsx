'use client'

import React, { useEffect, useState } from 'react'
import {useRouter, useSearchParams} from 'next/navigation'
import data from "../models/data"
import Image from 'next/image'


import Link from 'next/link'

const Track = () => {
    const[shipments, setShipments] = useState([])
    const [filteredShipments, setFilteredShipments] = useState([])
    useEffect(()=>{
        //fetch shipment details from api
        const getShipments = async () => {
        fetch('api/track',{
            method:'GET',
            headers:{
                "Content-Type": "application/json"
            }
        })
        .then(response =>response.json())
        .then(data=>{
            if(data.success){
                setShipments(data.shipments)
                setFilteredShipments(data.shipments)
            }else{
                console.error('Failed to fetch shipment details:', data)
            }
        })
        .catch(error=>{
            console.error('An error occurred:', error)
        })
        }
        getShipments()
    }, [])

    
    const searchParams = useSearchParams()
    const search = searchParams.get('search')
    /// Function to filter data based on search query
    // const filterData = (searchTerm) => {
    //     //return data.filter(
    
    //     return shipments.filter( 
    //         (item) => 
    //         item.shipmentID.toLowerCase().includes(searchTerm.toLowerCase())  
    //     )
        
    // }
    useEffect(() => {
        // Filter the shipments based on the search term
        const filteredData = shipments.filter(item =>
            item.shipmentID.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredShipments(filteredData);
    }, [search, shipments]);
    const searchResults = filteredShipments
    
  return (
    <div>
        
        {searchResults.length === 0  ? (
            (
                // <div className='flex items-center justify-center  h-screen'>
                //     <div className='flex flex-col justify-center items-center'>
                //         <Image
                //         src='/assets/img/ohh_shipment_rate.png'
                //         width={200}
                //         height={200}
                //         className='items-center'
                //         />
                //     <p className='pt-3'>Tracking Number:  {search}</p>
                //     <p className='pt-3'>Not Found</p>
                //     <p className='pt-3'>Check the number or</p>
                //     <Link href="/contact"
                //     className="rounded-lg bg-blue-200 py-2 px-2 text-center shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
                //     >Contact Us</Link>
                //     </div>
                //     </div>
                <div className='min-h-screen'></div>
            
            )

        ) : (<>
        
            {
            searchResults.map((item) => {
            if(search === item.shipmentID  ) {
            return(<>
                 
            <div key={item._id}>
        <h2 className='mx-auto px-10'>Search Results for Tracking Number: {search}</h2>
      <section className='block py-11'>
        <div className='mx-auto px-4'>
            <div className='flex flex-row mx-4'>
                <div className='relative w-[100%] min-h-[1px]'>
                    <div className='flex p-2'>
                        <div className='pr-2'> 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
                        </svg>

                        </div>
                        <h4>On route</h4>

                    </div>
                    <div className='flex p-2'>
                        <label>
                            Shipment ID:
                            <b> {item.shipmentID}</b>
                        </label>

                    </div>
                    <div className='md:flex md:flex-row'>
                    
                    <div className='relative w-[100%] min-h-[1px]'>
                        <div className='border border-slate-300 px-6 pb-5 mb-5'>
                            <div className='border-b-2 py-2'>
                                <h1 className='font-bold'>SENDER / ORIGIN</h1>
                            </div>
                            <div className=''>
                            <div className='flex  justify-normal border-b-2 py-6 '>
                                <div className='pr-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
 
                                </div>
                                <div><p>Origin Country</p>
                                <h4>{item.senderCountry}</h4>
                                </div>
                            </div>
                            <div className='flex justify-normal border-b-2 py-6 '>
                            <div className='pr-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
 
                                </div>
                                <div><p>{item.senderCity}</p>
                                <h4>Accra</h4>
                                </div>
                            </div>
                            <div className='flex justify-normal border-b-2 py-6 '>
                                <div className='pr-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                </svg>

                                </div>
                                <div><p>Shipping Date</p>
                                <h4>{item.shippingDate}</h4>
                                </div>
                            </div>
                            <div className='flex justify-normal border-b-2 py-6 '>
                                <div className='pr-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
 
                                </div>
                                <div><p>Shipping Time</p>
                                <h4>{item.shippingTime}</h4>
                                </div>
                            </div>
                            <div className='flex justify-normal border-b-2 py-6 '>
                                <div className='pr-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>

                                </div>
                                <div><p>Contact Name</p>
                                <h4>{item.contactName}</h4>
                                </div>
                            </div>
                            <div className='flex justify-normal border-b-2 py-6 '>
                                <div className='pr-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
 
                                </div>
                                <div><p>Contact Address</p>
                                <h4>{item.contactAddress}</h4>
                                </div>
                            </div>
                            <div className='flex justify-normal border-b-2 py-6 '>
                                <div className='pr-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
 
                                </div>
                                <div><p>Shipping Quantity</p>
                                <h4>{item.shippingQuantity}</h4>
                                </div>
                            </div>
                            <div className='flex justify-normal border-b-2 py-6 '>
                                <div className='pr-2'>
                                    
                                </div>
                                <div><p>Type of Product</p>
                                <h4>{item.productType}</h4>
                                </div>
                            </div>
                            <div className='flex justify-normal border-b-2 py-6 '>
                                <div className='pr-2'>
                                    
                                </div>
                                <div><p>Total Weight (lbs)</p>
                                <h4>{item.totalWeight}</h4>
                                </div>
                            </div>
                            </div>
                            
                        </div>
                
                    <div className='relative w-[100%] min-h-[1px]'>
                        <div className='border border-slate-300 px-6 pb-5 mb-5'>
                            <div className='border-b-2 py-2'>
                                <h1 className='font-bold'>RECIPIENT / DESTINATION</h1>
                            </div>
                            <div className='flex justify-normal border-b-2 py-6 '>
                            <div className='pr-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
 
                            </div>
                                <div><p>Delivery Country</p>
                                <h4>{item.deliveryCountry}</h4>
                                </div>
                            </div>
                            <div className='flex justify-normal border-b-2 py-6 '>
                            <div className='pr-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
 
                                </div>
                                <div><p>Delivery City</p>
                                <h4>{item.deliveryCity}</h4>
                                </div>
                            </div>
                            <div className='flex justify-normal border-b-2 py-6 '>
                                <div className='pr-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                </svg>

                                </div>
                                <div><p>Delivery Date</p>
                                <h4>{item.deliveryDate}</h4>
                                </div>
                            </div>
                            <div className='flex justify-normal border-b-2 py-6 '>
                                <div className='pr-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                </div>
                                <div><p>Delivery time</p>
                                <h4>{item.deliveryTime}</h4>
                                </div>
                            </div>
                            <div className='flex justify-normal border-b-2 py-6 '>
                                <div className='pr-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
 
                                </div>
                                <div><p>Contact Name</p>
                                <h4>{item.deliveryContactName}</h4>
                                </div>
                            </div>
                            <div className='flex justify-normal border-b-2 py-6 '>
                                <div className='pr-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
 
                                </div>
                                <div><p>Contact Address</p>
                                <h4>{item.deliveryContactAddress}</h4>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    </div>
                    <div className='md:pl-8 relative w-[100%] min-h-[1px]'>
                    <div className='border border-slate-300 px-6 pb-5 mb-5'>
                            <div className='py-2'>
                                <h1 className='font-bold'>SHIPPING HISTORY</h1>
                            </div>
                        {item.onRouteUS && (   
                        <div className='relative py-3 px-5 border-l-2 border-l-green-600'>
                            <div className='flex flex-wrap -mx-4'>
                                <div className='relative w-[100%] min-h-[1px] px-4'>
                                    <p className='text-base leading-none mt-2 text-left '>{item.onRouteUSDate}</p>
                                    <h6 className='font-extrabold'>{item.onRouteUS}</h6>
                                    {/* <button className='rounded-md border-gray border-2 p-1'>Comments</button> */}
                                </div>
                                <div className='relative w-[100%] min-h-[1px] px-4'>
                                    <p className='text-base leading-none mt-2 text-right '>{item.onRouteUSTime}</p>
                                </div>
                            </div>
                        </div>)
                        }
                        {item.approvedUS && (
                        <div className='relative py-3 my-4 px-5 border-l-2 border-l-green-600'>
                            <div className='flex flex-wrap -mx-4'>
                                <div className='relative w-[100%] min-h-[1px] px-4'>
                                    <p className='text-base leading-none mt-2 text-left '>{item.approvedUSDate}</p>
                                    <h6 className='font-extrabold'>{item.approvedUS}</h6>
                                    {/* <button className='rounded-md border-gray border-2 p-1'>Comments</button> */}
                                </div>
                                <div className='relative w-[100%] min-h-[1px] px-4'>
                                    <p className='text-base leading-none mt-2 text-right '>{item.approvedUSTime}</p>
                                </div>
                            </div>
                        </div>
                        )
                        }
                        {item.collectionUS && (
                        <div className='relative py-3 my-4 px-5 border-l-2 border-l-green-600'>
                            <div className='flex flex-wrap -mx-4'>
                                <div className='relative w-[100%] min-h-[1px] px-4'>
                                    <p className='text-base leading-none mt-2 text-left '>{item.collectionUSDate}</p>
                                    <h6 className='font-extrabold'>{item.collectionUS}</h6>
                                    {/* <button className='rounded-md border-gray border-2 p-1'>Comments</button> */}
                                </div>
                                <div className='relative w-[100%] min-h-[1px] px-4'>
                                    <p className='text-base leading-none mt-2 text-right '>{item.collectionUSTime}</p>
                                </div>
                            </div>
                        </div>)
                        }
                        {item.heldAtUS && (
                        <div className='relative py-3 my-4 px-5 border-l-2 border-l-green-600'>
                            <div className='flex flex-wrap -mx-4'>
                                <div className='relative w-[100%] min-h-[1px] px-4'>
                                    <p className='text-base leading-none mt-2 text-left '>{item.heldAtUSDate}</p>
                                    <h6 className='font-extrabold'>{item.heldAtUS}</h6>
                                    {/* <button className='rounded-md border-gray border-2 p-1'>Comments</button> */}
                                </div>
                                <div className='relative w-[100%] min-h-[1px] px-4'>
                                    <p className='text-base leading-none mt-2 text-right '>{item.heldAtUSTime}</p>
                                </div>
                            </div>
                        </div>)}
                        {item.inWarehouseUS &&(
                        <div className='relative py-3 my-4 px-5 border-l-2 border-l-green-600'>
                            <div className='flex flex-wrap -mx-4'>
                                <div className='relative w-[100%] min-h-[1px] px-4'>
                                    <p className='text-base leading-none mt-2 text-left '>{item.inWarehouseUSDate}</p>
                                    <h6 className='font-extrabold'>{item.inWarehouseUS}</h6>
                                    {/* <button className='rounded-md border-gray border-2 p-1'>Comments</button> */}
                                </div>
                                <div className='relative w-[100%] min-h-[1px] px-4'>
                                    <p className='text-base leading-none mt-2 text-right '>{item.inWarehouseUSTime}</p>
                                </div>
                            </div>
                        </div>)}
                        {item.onRouteUK &&(
                        <div className='relative py-3 my-4 px-5 border-l-2 border-l-green-600'>
                            <div className='flex flex-wrap -mx-4'>
                                <div className='relative w-[100%] min-h-[1px] px-4'>
                                    <p className='text-base leading-none mt-2 text-left '>{item.onRouteUKDate}</p>
                                    <h6 className='font-extrabold'>{item.onRouteUK}</h6>
                                    {/* <button className='rounded-md border-gray border-2 p-1'>Comments</button> */}
                                </div>
                                <div className='relative w-[100%] min-h-[1px] px-4'>
                                    <p className='text-base leading-none mt-2 text-right '>{item.onRouteUKTime}</p>
                                </div>
                            </div>
                        </div>)}
                        {item.approvedUK &&(
                        <div className='relative py-3 my-4 px-5 border-l-2 border-l-green-600'>
                            <div className='flex flex-wrap -mx-4'>
                                <div className='relative w-[100%] min-h-[1px] px-4'>
                                    <p className='text-base leading-none mt-2 text-left '>{item.approvedUKDate}</p>
                                    <h6 className='font-extrabold'>{item.approvedUK}</h6>
                                    {/* <button className='rounded-md border-gray border-2 p-1'>Comments</button> */}
                                </div>
                                <div className='relative w-[100%] min-h-[1px] px-4'>
                                    <p className='text-base leading-none mt-2 text-right '>{item.approvedUKTime}</p>
                                </div>
                            </div>
                        </div>)}
                        {item.heldAtUK &&(
                        <div className='relative py-3 my-4 px-5 border-l-2 border-l-green-600'>
                            <div className='flex flex-wrap -mx-4'>
                                <div className='relative w-[100%] min-h-[1px] px-4'>
                                    <p className='text-base leading-none mt-2 text-left '>{item.heldAtUKDate}</p>
                                    <h6 className='font-extrabold'>{item.heldAtUK}</h6>
                                    {/* <button className='rounded-md border-gray border-2 p-1'>Comments</button> */}
                                </div>
                                <div className='relative w-[100%] min-h-[1px] px-4'>
                                    <p className='text-base leading-none mt-2 text-right '>{item.heldAtUKTime}</p>
                                </div>
                            </div>
                        </div>)}
                        {item.onRouteGhana &&(
                        <div className='relative py-3 my-4 px-5 border-l-2 border-l-green-600'>
                            <div className='flex flex-wrap -mx-4'>
                                <div className='relative w-[100%] min-h-[1px] px-4'>
                                    <p className='text-base leading-none mt-2 text-left '>{item.onRouteGhanaDate}</p>
                                    <h6 className='font-extrabold'>{item.onRouteGhana}</h6>
                                    {/* <button className='rounded-md border-gray border-2 p-1'>Comments</button> */}
                                </div>
                                <div className='relative w-[100%] min-h-[1px] px-4'>
                                    <p className='text-base leading-none mt-2 text-right '>{item.onRouteGhanaTime}</p>
                                </div>
                            </div>
                        </div>)}
                        {item.paymentReceived &&(
                        <div className='relative py-3 my-4 px-5 border-l-2 border-l-green-600'>
                            <div className='flex flex-wrap -mx-4'>
                                <div className='relative w-[100%] min-h-[1px] px-4'>
                                    <p className='text-base leading-none mt-2 text-left '>{item.paymentReceivedDate}</p>
                                    <h6 className='font-extrabold'>{item.paymentReceived}</h6>
                                    {/* <button className='rounded-md border-gray border-2 p-1'>Comments</button> */}
                                </div>
                                <div className='relative w-[100%] min-h-[1px] px-4'>
                                    <p className='text-base leading-none mt-2 text-right '>{item.paymentReceivedTime}</p>
                                </div>
                            </div>
                        </div>)}
                        {item.pendingPayment &&(
                        <div className='relative py-3 my-4 px-5 border-l-2 border-l-green-600'>
                            <div className='flex flex-wrap -mx-4'>
                                <div className='relative w-[100%] min-h-[1px] px-4'>
                                    <p className='text-base leading-none mt-2 text-left '>{item.pendingPaymentDate}</p>
                                    <h6 className='font-extrabold'>{item.pendingPayment}</h6>
                                    {/* <button className='rounded-md border-gray border-2 p-1'>Comments</button> */}
                                </div>
                                <div className='relative w-[100%] min-h-[1px] px-4'>
                                    <p className='text-base leading-none mt-2 text-right '>{item.pendingPaymentTime}</p>
                                </div>
                            </div>
                        </div>)}
                        </div>
                    </div>
                    </div>
                </div>
                
            </div>
        </div>
      </section>
            </div>
            </>
      )} else {
        return(
            <div className='flex items-center justify-center  h-screen'>
                    <div className='flex flex-col justify-center items-center'>
                        <Image
                        src='/assets/img/ohh_shipment_rate.png'
                        alt='ERRor Image'
                        width={200}
                        height={200}
                        className='items-center'
                        />
                    <p className='pt-3'>Tracking Number:  {search}</p>
                    <p className='pt-3'>Not Found</p>
                    <p className='pt-3'>Check the number or</p>
                    <Link href="/contact"
                    className="rounded-lg bg-blue-200 py-2 px-2 text-center shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
                    >Contact Us</Link>
                    </div>
                    </div>
        )
      }

       })
        }
        </>
        )
       
       }
        
    </div>
  )
}

export default Track
