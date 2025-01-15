import { Card } from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";
import { User, Settings } from "lucide-react";

const Perfil = () => {
    const usuario = {
        nombre: "Usuario de Ejemplo",
        email: "usuario@gmail.com",
        fechaRegistro: "Enero 2024"
    };

    return (
        <div className="space-y-8">
            <Card className="p-6">
                <div className="flex items-center space-x-4">
                    <div className="h-20 w-20 rounded-full bg-eco-primary/10 flex items-center justify-center">
                        <User className="h-10 w-10 text-eco-primary" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-eco-text">
                            {usuario.nombre}
                        </h1>
                        <p className="text-eco-text-light">{usuario.email}</p>
                        <p className="text-sm text-eco-text-light">
                            Miembro desde {usuario.fechaRegistro}
                        </p>
                    </div>
                    <Button variant="outline" className="ml-auto">
                        <Settings className="h-4 w-4 mr-2" />
                        Editar Perfil
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default Perfil;