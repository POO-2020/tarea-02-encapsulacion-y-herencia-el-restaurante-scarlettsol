import Tiempo from './tiempo.js';
import Fecha from './fecha.js';
import Cliente from './cliente.js';
import ElementoPedido from './elemento-pedido.js';
import Precio from './precio.js';

export default class Pedido {
  /**
   *
   * @param {Fecha} fecha La fecha del día.
   * @param {Tiempo} hora Hora del día.
   * @param {Cliente} cliente Cliente al que se le está vendiendo.
   */
  constructor({ fecha, hora, cliente }) {
    this._fecha = fecha;
    this._hora = hora;
    this._cliente = cliente;
    this._elementosPedidos = new Array();
    this._numeroPedido = numeroPedido;
  }

  getResumen() {
    return `${this._fecha.getFecha()} ${this._hora.getFormato12()} - ${this.getNumeroElementos()} elementos con ${this.getNumeroProductos()} productos - total: ${new Precio(
      this.getCostoTotal()
    ).getPrecio()} `;
  }

  getNumeroElementos() {
    return this._elementosPedidos.length;
  }

  getNumeroProductos() {
    let totalProductos = 0;

    this._elementosPedidos.forEach(elemento => {
      totalProductos = totalProductos + elemento._cantidad;
    });

    return totalProductos;
  }

  getCostoTotal() {
    let costoTotal = 0;

    this._elementosPedidos.forEach(elemento => {
      costoTotal =
        costoTotal + elemento._cantidad * elemento._producto._precio._valor;
    });

    return costoTotal;
  }

  agregarElemento(elemento) {
    this._elementosPedidos.push(elemento);
  }

  listarElementos() {
    this._elementosPedidos.forEach(elemento => {
      console.log(elemento.getDescripcion());
    });
  }

  getNumeroPedido() {
    return `Pedido n°${this._numeroPedido}`
  }

  esIgualA(pedido) {
    if(pedido.getNumeroPedido() == this._numeroPedido) {
      return true
    } else {return false}
  }
}
