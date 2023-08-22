import { NextResponse } from "next/server";
import connectDB from "@/app/lib/mongodb"
import Track from "@/app/models/track";
import mongoose from "mongoose";


export async function POST(req){
    const {
        productType,
        shippingQuantity,
        totalWeight,
        description,
        senderCountry,
        senderCity,
        contactName,
        contactAddress,
        shippingDate,
        deliveryCountry,
        deliveryCity,
        deliveryContact,
        deliveryAddress,
        shipmentID,
        pendingPayment,
        pendingPaymentDate
    }  = await req.json();


    try{
        await connectDB();
        await Track.create({
            productType, 
            shippingQuantity,
            totalWeight,
            description,
            senderCountry,
            senderCity,
            contactName,
            contactAddress,
            shippingDate,
            deliveryCountry,
            deliveryCity,
            deliveryContact,
            deliveryAddress,
            shipmentID,
            pendingPayment,
            pendingPaymentDate
        })

        return NextResponse.json({
            msg: ["Shipment Details received successfully please make payment"],
            success: true,
        })
    } catch(error){
        if (error instanceof mongoose.Error.ValidationError){
            let errorList = []
            for (let e in error.errors){
                errorList.push(error.errors[e].message)
            }

            return NextResponse.json({msg: errorList})
        }
        else {
            return NextResponse.json(error)
        }
    }

    
}

export async function GET (req){
    try{
        await connectDB();
        const shipments = await Track.find()
        return NextResponse.json({
            shipments,
            success:true
        })
    } catch (error){
        return NextResponse.json(error)
    }
}