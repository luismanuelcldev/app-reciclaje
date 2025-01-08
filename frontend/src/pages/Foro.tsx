import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, ThumbsUp, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface Post {
    id: number;
    titulo: string;
    contenido: string;
    autor: string;
    fecha: string;
    likes: number;
    comentarios: number;
    categoria: string;
}

const Foro = () => {
    const { toast } = useToast();
    const [posts] = useState<Post[]>([
        {
            id: 1,
            titulo: "Tips para comenzar a reciclar en casa",
            contenido: "Comparto algunos consejos que me han funcionado para iniciar con el reciclaje...",
            autor: "Ana García",
            fecha: "2024-01-08",
            likes: 15,
            comentarios: 5,
            categoria: "Consejos"
        },
        {
            id: 2,
            titulo: "¿Dónde reciclar electrónicos?",
            contenido: "Busco recomendaciones sobre lugares confiables para reciclar dispositivos...",
            autor: "Carlos Ruiz",
            fecha: "2024-01-07",
            likes: 8,
            comentarios: 12,
            categoria: "Preguntas"
        }
    ]);

    const handleLike = (postId: number) => {
        toast({
            title: "¡Gracias por tu voto!",
            description: "Tu apoyo ayuda a destacar contenido útil.",
        });
    };

    return (
        <div className="container mx-auto py-8 animate-fade-in">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-eco-primary">Foro de la Comunidad</h1>
                <Button className="bg-eco-primary hover:bg-eco-secondary">
                    Nueva Publicación
                </Button>
            </div>

            <div className="space-y-6">
                {posts.map((post) => (
                    <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div>
                                    <CardTitle className="text-xl font-semibold hover:text-eco-primary cursor-pointer">
                                        {post.titulo}
                                    </CardTitle>
                                    <div className="flex items-center space-x-4 text-eco-text-light text-sm mt-2">
                                        <span>{post.autor}</span>
                                        <div className="flex items-center">
                                            <Calendar className="w-4 h-4 mr-1" />
                                            {post.fecha}
                                        </div>
                                        <Badge variant="secondary">{post.categoria}</Badge>
                                    </div>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-eco-text-light mb-4">{post.contenido}</p>
                            <div className="flex items-center space-x-4 text-eco-text-light">
                                <Button
                                    variant="ghost"
                                    className="flex items-center space-x-2"
                                    onClick={() => handleLike(post.id)}
                                >
                                    <ThumbsUp className="w-4 h-4" />
                                    <span>{post.likes}</span>
                                </Button>
                                <Button variant="ghost" className="flex items-center space-x-2">
                                    <MessageCircle className="w-4 h-4" />
                                    <span>{post.comentarios}</span>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Foro;