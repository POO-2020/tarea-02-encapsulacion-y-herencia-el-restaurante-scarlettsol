import Pedido from './pedido.js';
import Producto from './producto.js';
import Direccion from './direccion.js';

export default class Restaurante {
  /**
   * @param {string} nombre
   * @param {number} telefono
   * @param {Direccion} dirección
   * @param {Array} productos
   * @param {Array} pedido
   */
  constructor({nombre, telefono, dirección, productos, pedido}) {
    this._nombre = nombre;
    this._telefono = telefono;
    this._dirección = dirección;
    this._productos = new Array();
    this._pedido = new Array();
  }

  registrarProductos(producto) {
    this._productos.push(producto);
  }

  listarProductos() {
    this._productos.forEach(producto => {
      console.log(`${producto.getDescripcion()}`);
    });
  }

  registrarPedido(pedido) {
    this._pedidos.push(pedido);

  }

  listarPedido() {
    this._pedidos.forEach(pedido => {
      console.log(`${pedido.getDescripcion()}`);
    });
  }

  buscarPedido(pedido) {
    let resultado;
    
    this._pedidos.forEach(p => {
      if (p.esIgualA(pedido)) {
        resultado = p;
      }
    });
    
    return resultado;
  }

  eliminarPedido(pedido) {
    let indice = this.buscarPedido(pedido)

    if (indice < 0){
      return false;
  }
  this._pedido.splice(indice, 1);

  return true;
  }

  actualizarPedido(pedido) {
    let indice = this.buscarIndice(pedido);

    if(indice < 0) {
      return false;
    }

    this._pedido.splice(pedido);

    return true;
  }
}