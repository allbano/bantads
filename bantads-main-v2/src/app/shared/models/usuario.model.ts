export class Usuario {
    constructor(
        public id?: number,
        public nome?: string,
        public salario?: number,
        public endereco?: string,
        public rua?: string,
        public cidade?: string,
        public estado?: string,
        public cpf?: string,
        public telefone?: string,
        public email?: string,
        public senha?: string,
        public perfil?: string
    ){
    }
}
