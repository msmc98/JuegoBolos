import Tirada from './tirada.js';

export default class Jugador {
  constructor(nombre) {
    this.nombre = nombre;
    this.puntuacion = 0;
    this.tiradas = [];
    this.tirada = new Tirada();
  }

    addTirada() {
        let lanzada = this.lanzarBola()
        if(lanzada != undefined){
            this.tiradas.push(lanzada);
            this.sumarPuntos();
            return this.tiradas[this.tiradas.length - 1]
        }
    }

    getPuntuacion() {
        return this.puntuacion;
    }

    getNombre() {
        return this.nombre;
    }

    getTiradas() {
        return this.tiradas;
    }

    lanzarBola(){
        return this.tirada.lanzarBola()
    }

    sumarPuntos(){
        this.puntuacion = 0;
        this.tiradas.forEach(tirada => {
            this.puntuacion += tirada;
        });
    }



}







