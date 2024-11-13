export interface Colaborador {
    idColaborador: number;
    nome : string;
    email : string;
    departamento: string;
    status: boolean;
}

export interface ApiResponse {
    dados : Colaborador[];
    mensagem : string;
    status: boolean;
}