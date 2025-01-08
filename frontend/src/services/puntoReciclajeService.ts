import axios from 'axios';
import { authService } from './authService';
const API_URL = 'http://localhost:3000/api/puntos-reciclaje';
export const puntoReciclajeService = {
    async obtenerTodos() {
        const response = await axios.get(API_URL);
        return response.data;
    },
    async crear(datos: {
        nombre: string;
        direccion: string;
        latitud: number;
        longitud: number;
        materiales: string[];
        horario: string;
    }) {
        const token = authService.obtenerToken();
        const response = await axios.post(API_URL, datos, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    },
};