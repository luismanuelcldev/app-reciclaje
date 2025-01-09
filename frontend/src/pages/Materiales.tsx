import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Recycle, Trash2 } from "lucide-react";

interface Material {
    id: number;
    nombre: string;
    descripcion: string;
    tipo: string;
    icono: JSX.Element;
    consejos: string[];
}

const Materiales = () => {
    const materiales: Material[] = [
        {
            id: 1,
            nombre: "Plástico",
            descripcion: "Los plásticos son materiales sintéticos que pueden ser reciclados para crear nuevos productos.",
            tipo: "Reciclable",
            icono: <Recycle className="w-8 h-8 text-eco-primary" />,
            consejos: [
                "Enjuaga los envases antes de reciclarlos",
                "Separa por tipo de plástico",
                "Retira tapas y etiquetas"
            ]
        },
        {
            id: 2,
            nombre: "Orgánico",
            descripcion: "Los residuos orgánicos pueden convertirse en compost para nutrir la tierra.",
            tipo: "Compostable",
            icono: <Leaf className="w-8 h-8 text-eco-primary" />,
            consejos: [
                "Separa restos de comida",
                "Evita incluir carnes y lácteos",
                "Mantén una proporción adecuada de materiales secos y húmedos"
            ]
        },
        {
            id: 3,
            nombre: "No Reciclable",
            descripcion: "Algunos materiales no pueden ser reciclados y deben ser dispuestos adecuadamente.",
            tipo: "No Reciclable",
            icono: <Trash2 className="w-8 h-8 text-eco-primary" />,
            consejos: [
                "Minimiza su uso",
                "Busca alternativas reciclables",
                "Dispón adecuadamente"
            ]
        }
    ];

    return (
        <div className="container mx-auto py-8 animate-fade-in">
            <h1 className="text-3xl font-bold text-eco-primary mb-8 text-center">
                Guía de Materiales Reciclables
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {materiales.map((material) => (
                    <Card key={material.id} className="hover:shadow-lg transition-shadow duration-300">
                        <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                            {material.icono}
                            <div>
                                <CardTitle className="text-xl font-semibold">{material.nombre}</CardTitle>
                                <Badge variant="secondary">{material.tipo}</Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-eco-text-light mb-4">{material.descripcion}</p>
                            <div className="space-y-2">
                                <h4 className="font-semibold text-eco-primary">Consejos de Reciclaje:</h4>
                                <ul className="list-disc list-inside space-y-1 text-eco-text-light">
                                    {material.consejos.map((consejo, index) => (
                                        <li key={index}>{consejo}</li>
                                    ))}
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Materiales;