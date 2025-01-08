import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export interface PublicacionDTO {
    titulo: string;
    contenido: string;
    categoria: string;
}

export const foroService = {
    async obtenerPublicaciones() {
        const response = await axios.get(`${API_URL}/publicaciones`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    },

    async crearPublicacion(publicacion: PublicacionDTO) {
        const response = await axios.post(`${API_URL}/publicaciones`, publicacion, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    },

    async agregarComentario(publicacionId: string, contenido: string) {
        const response = await axios.post(
            `${API_URL}/publicaciones/${publicacionId}/comentarios`,
            { contenido },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }
        );
        return response.data;
    }
};