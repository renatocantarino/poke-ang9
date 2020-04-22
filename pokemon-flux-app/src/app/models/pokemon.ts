export class Pokemon {
    id: string;
    nome: number;
    categoria: string;
    peso: string;
    habilidades: string;
    image: string;



    public constructor(init?: Partial<Pokemon>) {
        Object.assign(this, init);
    }
}
