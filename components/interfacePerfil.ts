import { ReactNode } from "react";

interface HashTags{
    name: string;
    link: string;
}

interface interfacePerfil{
    nombre: string;
    fecha: string;
    titulo: string;
    listHashTags: HashTags[];
    reaccion: number;
    comentario: number;
    escrito: number;
}

export default interfacePerfil;