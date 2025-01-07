import axios from 'axios';
const API_URL = 'http://localhost:3000/api';
export const authService = {
    async registro(datos: { email: string; nombre: string; password: string }) {
        const response = await axios.post(`${API_URL}/usuarios/registro`, datos);
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('usuario', JSON.stringify(response.data.usuario));
        }
        return response.data;
    },
    async login(datos: { email: string; password: string }) {
        const response = await axios.post(`${API_URL}/usuarios/login`, datos);
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('usuario', JSON.stringify(response.data.usuario));
        }
        return response.data;
    },
    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('usuario');
    },
    obtenerToken() {
        return localStorage.getItem('token');
    },
    obtenerUsuario() {
        const usuario = localStorage.getItem('usuario');
        return usuario ? JSON.parse(usuario) : null;
    },
};