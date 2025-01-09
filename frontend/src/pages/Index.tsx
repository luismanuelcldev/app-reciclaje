import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf, Recycle } from "lucide-react";

const Index = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center">
            <Card className="max-w-3xl mx-auto p-8 text-center">
                <div className="flex justify-center mb-6">
                    <Recycle className="h-16 w-16 text-eco-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-eco-primary mb-4">
                    EcoRecicla
                </h1>
                <p className="text-xl text-eco-text-light mb-8 max-w-2xl mx-auto">
                    Tu plataforma para aprender sobre reciclaje y contribuir a un mundo más sostenible
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link to="/inicio">
                        <Button className="bg-eco-primary hover:bg-eco-secondary text-white">
                            <Leaf className="mr-2 h-4 w-4" />
                            Comenzar
                        </Button>
                    </Link>
                    <Link to="/materiales">
                        <Button variant="outline">
                            Explorar Materiales
                        </Button>
                    </Link>
                </div>
            </Card>
        </div>
    );
};

export default Index;