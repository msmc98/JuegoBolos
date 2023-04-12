export default class Tirada {
    constructor() {
        this.puntos = 0;
        this.maxTiradas = 2;
        this.tirada = 0;
        this.jugadasRestantes = 10;
    }

    getPuntos() {
        return this.puntos;
    }

    getTirada() {
        return this.tirada;
    }

    subirTirada(){
        this.tirada++;
    }

    lanzarBola(){
    this.subirTirada();
    if(this.getTirada() < 3 ){
            return this.getTirada() == 1
            ? this.puntos = Math.floor((Math.random() * 10)+1)
            : this.puntos = Math.floor((Math.random() * (10 - this.puntos)));  
        }
        return ;
    }

    setTirada(tirada){
        this.tirada = tirada;
    }

    decrementarJugadasRestantes(){
        return --this.jugadasRestantes;
    }
}