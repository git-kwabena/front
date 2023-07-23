import { NextResponse } from "next/server";
import connectDB from "@/app/lib/mongodb"
import Contact from "@/app/models/contact";
import mongoose from "mongoose";


export async function POST(req){
    const {fullName, email,message} = await req.json();

    try{
        await connectDB();
        await Contact.create({fullName, email, message})

        return NextResponse.json({
            msg: ["Message sent successfully"],
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