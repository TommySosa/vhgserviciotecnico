"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

export default function Contact() {
    const [from, setFrom] = useState("")
    const [subject, setSubject] = useState("")
    const [body, setBody] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (from.trim() != "" && subject.trim() != "" && body.trim() != "") {
            try {
                const response = await fetch('/api/send', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ from, subject, body }),
                });
                if (response.ok) {
                    alert('Correo enviado correctamente');
                } else {
                    throw new Error('Error al enviar el correo');
                }
            } catch (error) {
                console.error(error);
                alert('Error al enviar el correo');
            }
        }
        else {
            alert("Llená todos los campos!")
        }
    };

    return (
        <section className="w-full py-12 flex justify-center" id="contacto">
            <div className="container px-4 md:px-6">
                <div className="bg-gradient-to-r from-[#3f5efb] to-[#46fcb1] ">
                    <h2 className="text-3xl font-bold text-center text-white mb-6">Contacto</h2>
                </div>
                <form className="grid gap-4 max-w-md mx-auto mt-8" onSubmit={handleSubmit}>
                    <Input className="max-w-lg flex-1" placeholder="Tu email" type="email" onChange={(e) => setFrom(e.target.value)} />
                    <Input className="max-w-lg flex-1 " placeholder="Asunto" type="text" onChange={(e) => setSubject(e.target.value)} />
                    <textarea
                        className="w-full h-32 p-2 rounded border focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2"
                        placeholder="Tu mensaje"
                        onChange={(e) => setBody(e.target.value)}
                    />
                    <Button type="submit">Enviar</Button>
                </form>
            </div>
        </section >
    )
}
