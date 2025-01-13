import { Card } from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Leaf, Map, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Inicio = () => {
    const caracteristicas = [
        {
            icono: <Leaf className="h-8 w-8 text-eco-primary" />,
            titulo: "Aprende sobre Materiales",
            descripcion: "Descubre cómo reciclar diferentes tipos de materiales correctamente.",
            ruta: "/materiales",
        },
        {
            icono: <Map className="h-8 w-8 text-eco-primary" />,
            titulo: "Encuentra Puntos de Reciclaje",
            descripcion: "Localiza los puntos de reciclaje más cercanos a tu ubicación.",
            ruta: "/puntos-reciclaje",
        },
        {
            icono: <Users className="h-8 w-8 text-eco-primary" />,
            titulo: "Únete a la Comunidad",
            descripcion: "Comparte experiencias y aprende de otros en nuestro foro.",
            ruta: "/foro",
        },
    ];

    return (
        <div className="space-y-12">
            <section className="text-center space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-eco-text">
                    Bienvenido a EcoRecicla
                </h1>
                <p className="text-xl text-eco-text-light max-w-2xl mx-auto">
                    Juntos por un futuro más sostenible
                </p>
                <div className="flex justify-center gap-4">
                    <Link to="/registro">
                        <Button className="bg-eco-primary hover:bg-eco-secondary text-white">
                            Comenzar Ahora
                        </Button>
                    </Link>
                </div>
            </section>

            <section className="grid md:grid-cols-3 gap-6">
                {caracteristicas.map((caracteristica) => (
                    <Card key={caracteristica.titulo} className="p-6">
                        <div className="space-y-4">
                            {caracteristica.icono}
                            <h3 className="text-xl font-semibold text-eco-text">
                                {caracteristica.titulo}
                            </h3>
                            <p className="text-eco-text-light">
                                {caracteristica.descripcion}
                            </p>
                            <Link to={caracteristica.ruta}>
                                <Button variant="link" className="text-eco-primary p-0">
                                    Explorar
                                </Button>
                            </Link>
                        </div>
                    </Card>
                ))}
            </section>
        </div>
    );
};

export default Inicio;