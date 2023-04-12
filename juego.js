import Jugador from './jugador.js';

export default class Juego{
    constructor(nombre1, nombre2){
        this.jugador1 = new Jugador(nombre1);
        this.jugador2 = new Jugador(nombre2);
        this.turno = 0;
        this.target = this.jugador1;
    }

    changeTargetPlayer(){
        this.setTurno(this.getTurno() + 1);
        this.resetTirada();
        if(this.turno % 2 == 0){
            return this.target = this.jugador1;
        }
        return this.target = this.jugador2;
    }

    resetTirada(){
        this.target.tirada.setTirada(0);
    }

    getJugador1(){
        return this.jugador1;
    }

    getJugador2(){
        return this.jugador2;
    }   

    setTurno(turno){
        this.turno = turno;
    }

    getTurno(){
        return this.turno;
    }

    getRealTurno(){
        let elemento = this.getTurno();
        return elemento + 1;
    }
}