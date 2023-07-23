"use client";

import { useState } from "react";

export default function ContactForm() {
	const [error, setError] = useState([]);
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState(false)

	async function handleSubmit(e: any ) {
		e.preventDefault();
		

		

		const res = await fetch("api/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
                fullName,
                email,
                message,
            }),
		});
        
		const {msg, success} =await res.json();
        setError(msg);
        setSuccess(success)

        if(success){
            setFullName('')
            setEmail('')
            setMessage('')
        }
	}
	return (
        <>
        <div className="p-5">
		<form onSubmit={handleSubmit} className="pb-5 mx-auto">
			<div className="w-full flex flex-col my-4">
				<label className="font-bold text-gray-800" htmlFor="name">
                    Full Name
				</label>
				<input
					type="text"
					minLength={3}
					maxLength={150}
					required
					className=" p-4  border border-gray-100 shadow-md "
					autoComplete="off"
					id="name"
                    onChange={(e)=> setFullName(e.target.value)}
                    value={fullName}
				/>
			</div>
			<div className="w-full flex flex-col my-4">
				<label className="font-bold text-gray-800" htmlFor="email">
					Email
				</label>
				<input
					type="email"
					minLength={5}
					maxLength={150}
					required
					className=" p-4  border border-gray-100 shadow-md"
					autoComplete="off"
					id="email"
                    onChange={(e)=> setEmail(e.target.value)}
                    value={email}
				/>
			</div>
			<div>
				<label className="font-bold text-gray-800" htmlFor="message">
					Message
				</label>
				<textarea
					rows={4}
					required
					minLength={10}
					maxLength={500}
					name="message"
					className="w-full p-4 border border-gray-100 shadow-md"
                    onChange={(e)=> setMessage(e.target.value)}
                    value={message}
                    placeholder="Type your message"
				/>
			</div>
			<button
				type="submit"
				
				className="px-4 py-2 w-40 bg-gray-700 disabled:bg-gray-400 disabled:text-gray-100 text-white font-medium mt-4">
				Send Message
			</button>
		</form>
        
            {
                error && error.map((e, index)=> (
					<div key={index}>
                    <div className="p-5 bg-slate-100 flex flex-col">
                    <div className={`${success? "text-green-800": 'text-red-500'} px-5 py-3`}>{e}</div>
                    </div>
					</div>
                ))
            }  
        
        </div>
        </>
	);
}
