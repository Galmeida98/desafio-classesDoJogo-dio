class jogador {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou um ataque desconhecido';
        }

        const resultado = `O ${this.tipo} ${this.nome} atacou usando ${ataque}`;
        console.log(resultado);
    }
}


const heroiMago = new jogador('João', 16, 'mago');
heroiMago.atacar();

const heroiGuerreiro = new jogador('Mário', 30, 'guerreiro');
heroiGuerreiro.atacar();

