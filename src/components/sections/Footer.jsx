import React from 'react'

export default function Footer() {
    return (
        <footer className="w-full h-32 bg-white text-white bg-gradient-to-r from-[#3f5efb] to-[#46fcb1]  flex justify-center items-center ">
            <div className="text-center dark:text-white">
                <p className="mb-1">Desarrollado por <b>Tomás F. Sosa</b></p>
                <a href="https://api.whatsapp.com/send?phone=3813284273" className="block dark:text-white">
                    +54 3813284273
                </a>
            </div>
        </footer>
    )
}
