import Restaurante from './resturante.js';
import Producto from './producto.js';
import Precio from './precio.js';
import ElementoPedido from './elemento-pedido.js';
import Pedido from './pedido.js';
import Fecha from './fecha.js';
import Tiempo from './tiempo.js';
import Cliente from './cliente.js';
import Direccion from './direccion.js';

class Main {
  constructor() {
    this._fecha = new Fecha(15, 6, 2005);

    this._tiempo1 = new Tiempo({ hora: 10, minuto: 25, periodo: 'am' });
    this._tiempo2 = new Tiempo({ hora: 10, minuto: 25, periodo: 'pm' });

    this._direccion = new Direccion(
      'Av. Universidad',
      333,
      0,
      'Las Víboras',
      28040,
      'Colima',
      'Colima'
    );

    this._precio = new Precio(2500.5);

    this._producto = new Producto('Pizza Hawaiana', this._precio);
    this._elemento = new ElementoPedido(2, this._producto);
    this._elemento2 = new ElementoPedido(1, this._producto);
    this._elemento3 = new ElementoPedido(3, this._producto);

    this._cliente = new Cliente('Juan Pérez Díaz', this._direccion, 3124563256);

    this._pedido = new Pedido(this._fecha, this._tiempo1, this._cliente);
    this._pedido.agregarElemento(this._elemento);
    this._pedido.agregarElemento(this._elemento2);
    this._pedido.agregarElemento(this._elemento3);
  }

  probarFecha() {
    console.log(this._fecha.getAños());
    console.log(this._fecha.getMeses());
    console.log(this._fecha.getSemanas());
    console.log(this._fecha.getDias());
    console.log(this._fecha.getFecha());
    console.log(this._fecha.getDiaFecha());
  }

  probarTiempo() {
    console.log(this._tiempo1.getFormato12());
    console.log(this._tiempo2.getFormato12());
    console.log(this._tiempo1.getFormato24());
    console.log(this._tiempo2.getFormato24());
  }

  probarDireccion() {
    console.log(this._direccion.getFormatoCorto());
    console.log(this._direccion.getFormatoExtendido());
  }

  probarPrecio() {
    console.log(this._precio.getPrecio());
  }

  probarProducto() {
    console.log(this._producto.getDescripcion());
  }

  probarCliente() {
    console.log(this._cliente.getPerfil());
  }

  probarElementoPedido() {
    console.log(this._elemento.getDescripcion());
  }

  probarPedido() {
    console.log(this._pedido.getResumen());
    console.log(this._pedido.getNumeroElementos());
    console.log(this._pedido.getNumeroProductos());
    console.log(this._pedido.getCostoTotal());
    this._pedido.listarElementos();
  }
}

let app = new Main();

app.probarFecha();
app.probarTiempo();
app.probarDireccion();
app.probarPrecio();
app.probarProducto();
app.probarElementoPedido();
app.probarCliente();
app.probarPedido();
