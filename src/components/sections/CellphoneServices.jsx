import React from 'react'
import { Card } from '../ui/card'
import BatteryIcon from "../icons/battery";
import ComputerIcon from "../icons/computer";
import ReplaceIcon from "../icons/replace";
import SmileIcon from "../icons/smile";
export default function CellphoneServices() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="flex flex-col items-center text-center space-y-4">
                <SmileIcon className="w-14 h-14" />
                <h3 className="font-semibold text-xl">Cambio de módulo</h3>
                <p>Reemplazo de pantalla rápido y confiable para todas las principales marcas y modelos de teléfonos celulares.</p>
            </Card>
            <Card className="flex flex-col items-center text-center space-y-4">
                <BatteryIcon className="w-14 h-14" />
                <h3 className="font-semibold text-xl">Cambio de batería</h3>
                <p>Amplíe la vida útil de su teléfono con nuestro servicio de reemplazo de batería.</p>
            </Card>
            <Card className="flex flex-col items-center text-center space-y-4">
                <ReplaceIcon className="w-14 h-14" />
                <h3 className="font-semibold text-xl">Cambio de botónes</h3>
                <p>Arreglamos botones que no responden o están rotos para que su teléfono se sienta como nuevo otra vez.</p>
            </Card>
            <Card className="flex flex-col items-center text-center space-y-4">
                <ComputerIcon className="w-14 h-14" />
                <h3 className="font-semibold text-xl">Software</h3>
                <p>Mantenga su teléfono actualizado con el último sistema operativo para un rendimiento óptimo.</p>
            </Card>
        </div >
    )
}
