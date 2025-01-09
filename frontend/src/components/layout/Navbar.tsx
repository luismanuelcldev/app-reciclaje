import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Recycle } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { texto: "Inicio", ruta: "/inicio" },
        { texto: "Materiales", ruta: "/materiales" },
        { texto: "Puntos de Reciclaje", ruta: "/puntos-reciclaje" },
        { texto: "Foro", ruta: "/foro" },
    ];

    return (
        <nav className="bg-white shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex items-center space-x-2">
                        <Recycle className="h-8 w-8 text-eco-primary" />
                        <span className="text-xl font-bold text-eco-text">EcoRecicla</span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item) => (
                            <Link
                                key={item.ruta}
                                to={item.ruta}
                                className="text-eco-text-light hover:text-eco-primary transition-colors"
                            >
                                {item.texto}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="/login">
                            <Button variant="ghost">Iniciar Sesión</Button>
                        </Link>
                        <Link to="/registro">
                            <Button className="bg-eco-primary hover:bg-eco-secondary text-white">
                                Registrarse
                            </Button>
                        </Link>
                    </div>

                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Menú"
                    >
                        {isOpen ? (
                            <X className="h-6 w-6 text-eco-text" />
                        ) : (
                            <Menu className="h-6 w-6 text-eco-text" />
                        )}
                    </button>
                </div>

                {isOpen && (
                    <div className="md:hidden py-4">
                        {menuItems.map((item) => (
                            <Link
                                key={item.ruta}
                                to={item.ruta}
                                className="block py-2 text-eco-text-light hover:text-eco-primary"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.texto}
                            </Link>
                        ))}
                        <div className="pt-4 space-y-2">
                            <Link to="/login" className="block">
                                <Button variant="ghost" className="w-full">
                                    Iniciar Sesión
                                </Button>
                            </Link>
                            <Link to="/registro" className="block">
                                <Button className="w-full bg-eco-primary hover:bg-eco-secondary text-white">
                                    Registrarse
                                </Button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;