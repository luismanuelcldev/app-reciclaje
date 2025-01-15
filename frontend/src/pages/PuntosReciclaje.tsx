import { useState } from "react";
import { Card } from "@/components/ui/card.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Search, MapPin } from "lucide-react";

const PuntosReciclaje = () => {
    const [busqueda, setBusqueda] = useState("");

    return (
        <div className="space-y-8">
            <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold text-eco-text">
                    Puntos de Reciclaje
                </h1>
                <p className="text-eco-text-light max-w-2xl mx-auto">
                    Encuentra los puntos de reciclaje más cercanos a tu ubicación.
                </p>
            </div>

            <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-eco-text-light" />
                <Input
                    placeholder="Buscar por ubicación..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    className="pl-10"
                />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                    <div className="flex items-start space-x-4">
                        <MapPin className="h-5 w-5 text-eco-primary mt-1" />
                        <div>
                            <h3 className="font-semibold text-eco-text">Centro de Reciclaje Municipal</h3>
                            <p className="text-sm text-eco-text-light">Av. Principal 123</p>
                            <Button variant="outline" className="mt-4">Ver en el mapa</Button>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default PuntosReciclaje;