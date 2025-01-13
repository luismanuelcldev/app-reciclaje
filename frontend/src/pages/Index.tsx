import { Card, CardContent, CardHeader } from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Link } from "react-router-dom";
import { Leaf, Recycle } from "lucide-react";

const Index = () => {
    return (
        <div className="min-h-screen bg-eco-bg flex flex-col items-center justify-center p-4">
            <Card className="w-full max-w-4xl bg-eco-card shadow-xl">
                <CardHeader className="space-y-6 text-center">
                    <div className="flex justify-center">
                        <div className="p-4 rounded-full bg-eco-primary/10">
                            <Recycle className="h-16 w-16 text-eco-primary animate-pulse" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-eco-primary tracking-tight">
                        EcoRecicla
                    </h1>
                    <p className="text-xl text-eco-text-light max-w-2xl mx-auto leading-relaxed">
                        Tu plataforma para aprender sobre reciclaje y contribuir a un mundo más sostenible
                    </p>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-6 pb-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/">
                            <Button size="lg" className="bg-eco-primary hover:bg-eco-secondary text-white font-semibold transition-all">
                                <Leaf className="mr-2 h-5 w-5" />
                                Comenzar
                            </Button>
                        </Link>
                        <Link to="/materiales">
                            <Button size="lg" variant="outline" className="border-eco-primary text-eco-primary hover:bg-eco-primary/10">
                                Explorar Materiales
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-8 text-sm text-eco-text-light">
                        ¡Únete a nuestra comunidad y aprende a reciclar de manera efectiva!
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Index;