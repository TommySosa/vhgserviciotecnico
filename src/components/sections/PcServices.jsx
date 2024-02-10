import React from 'react'
import { Card } from '../ui/card'
import ReplaceIcon from "../icons/replace";
import CleanIcon from '../icons/clean';
import ThermalpasteIcon from '../icons/thermalpaste';
import OSIcon from '../icons/os';
export default function PcServices() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="flex flex-col items-center text-center space-y-4">
                <CleanIcon className="w-14 h-14" />
                <h3 className="font-semibold text-xl">Limpieza y mantenimiento</h3>
                <p>Eliminación de polvo y suciedad, limpieza interna y externa para un rendimiento óptimo.</p>
            </Card>
            <Card className="flex flex-col items-center text-center space-y-4">
                <ThermalpasteIcon className="w-14 h-14" />
                <h3 className="font-semibold text-xl">Cambio de pasta térmica</h3>
                <p>Renueve la pasta térmica de su procesador para mejorar la disipación de calor y evitar recalentamientos.</p>
            </Card>
            <Card className="flex flex-col items-center text-center space-y-4">
                <ReplaceIcon className="w-14 h-14" />
                <h3 className="font-semibold text-xl">Reparaciones</h3>
                <p>Reparación de componentes dañados o defectuosos para restaurar el funcionamiento adecuado.</p>
            </Card>
            <Card className="flex flex-col items-center text-center space-y-4">
                <OSIcon className="w-14 h-14" />
                <h3 className="font-semibold text-xl">Sistema operativo</h3>
                <p>Instalación de sistemas operativos nuevos o actualización para un rendimiento y seguridad óptimos.</p>
            </Card>
        </div>
    )
}
