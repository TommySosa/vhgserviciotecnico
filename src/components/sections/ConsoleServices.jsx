import React from 'react';
import { Card } from '../ui/card';
import CleanIcon from "../icons/clean";
import ThermalpasteIcon from '../icons/thermalpaste';

export default function ConsoleServices() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            <Card className="flex flex-col items-center text-center space-y-4">
                <CleanIcon className="w-14 h-14" />
                <h3 className="font-semibold text-xl">Limpieza</h3>
                <p>Eliminación de polvo y suciedad para mejorar el rendimiento y la durabilidad de tu consola.</p>
            </Card>
            <Card className="flex flex-col items-center text-center space-y-4">
                <ThermalpasteIcon className="w-14 h-14" />
                <h3 className="font-semibold text-xl">Cambio de pasta térmica</h3>
                <p>Aplicación de nueva pasta térmica para mejorar la disipación de calor y evitar problemas de sobrecalentamiento en tu consola.</p>
            </Card>
        </div>
    );
}
