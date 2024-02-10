import React from 'react'
import Whatsapp from '../icons/whatsapp'

export default function Header() {
    return (
        <header className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url(header3.jpg)" }}>
            <nav className="fixed z-50 top-0 left-0 right-0 bg-transparent p-4">
                <div className="flex justify-center flex-wrap">
                    <a className="text-white text-lg mx-4 my-2 hover:underline" href="#servicios">Servicios</a>
                    <a className="text-white text-lg mx-4 my-2 hover:underline" href="#trabajos">Trabajos realizados</a>
                    <a className="text-white text-lg mx-4 my-2 hover:underline" href="#productos">Productos</a>
                    <a className="text-white text-lg mx-4 my-2 hover:underline" href="#contacto">Contacto</a>
                </div>
            </nav>
            <div className="flex h-full flex-col justify-center items-center text-center p-4">
                <h1 className="text-5xl font-bold text-white">V.H.G Servicio Técnico</h1>
                <p className="text-2xl text-white mt-4">Rápido, confiable y accesible</p>
                <div className="flex flex-col md:flex-row items-center">
                    <a href="https://api.whatsapp.com/send?phone=3816610058" target="_blank" className="bg-green-500 text-white px-8 py-1 md:mt-8 mx-2 text-lg rounded-md w-full md:w-auto flex items-center">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Whatsapp />
                            </div>
                            <div className="ml-2">Contactarse</div>
                        </div>
                    </a>
                </div>
            </div>
        </header>
    )
}
