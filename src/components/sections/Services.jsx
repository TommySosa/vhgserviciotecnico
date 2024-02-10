"use client"
import { useState } from "react";
import { Button } from "../ui/button";
import JoystickIcon from "@/components/icons/joystick"
import PcIcon from "@/components/icons/pc"
import PhoneIcon from "@/components/icons/phone"
import CellphoneServices from "./CellphoneServices";
import PcServices from "./PcServices";
import ConsoleServices from "./ConsoleServices";

export default function Services() {
    const [serviceSelected, setServiceSelected] = useState("cellphones")
    return (
        <>
            <section className="container mx-auto px-4 md:px-6 my-16 py-12">
                <div className="bg-gradient-to-r from-[#3f5efb] to-[#46fcb1]">
                    <h2 className="text-3xl font-bold text-center mb-12 text-white" id="servicios">
                        Nuestros servicios
                    </h2>
                </div>
                <div className="flex justify-center ">
                    <div className="flex flex-col sm:flex-row items-center sm:space-x-2">
                        <div className="mb-2">
                            <Button onClick={() => setServiceSelected("cellphones")}>
                                <PhoneIcon className="w-10 h-10 mx-2" />
                                Celulares
                            </Button>
                        </div>
                        <div className="mb-2">
                            <Button onClick={() => setServiceSelected("pc")}>
                                <PcIcon className="w-10 h-10 mx-2" />
                                PC
                            </Button>
                        </div>
                        <div className="mb-2">
                            <Button onClick={() => setServiceSelected("consoles")}>
                                <JoystickIcon className="w-10 h-10 mx-2" />
                                Consolas
                            </Button>
                        </div>
                    </div>
                </div>
                {
                    serviceSelected === "cellphones" && <CellphoneServices />
                }
                {
                    serviceSelected === "pc" && <PcServices />
                }
                {
                    serviceSelected === "consoles" && <ConsoleServices />
                }
            </section>
        </>
    )
}