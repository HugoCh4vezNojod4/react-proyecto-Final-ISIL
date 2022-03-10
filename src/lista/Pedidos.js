import React, { Component } from 'react';
import './Pedidos.css'
import PedidoList from './PedidoList.js';

class Pedidos extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listaPedidos: [],
            pedidoSeleccionado: ''
        }
    }

    componentDidMount() {
        this.leerPedidos();
    }

    leerPedidos() {
        const rutaServicio = "https://servicios.campus.pe/pedidoslista.php ";
        fetch(rutaServicio)
            .then(
                res => res.json()
            )
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        listaPedidos: result
                    })
                }
            )
    }

    dibujarTabla(datosTabla) {
        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>ID Pedido</th>
                        <th>Nombre</th>
                        <th>Fecha</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {datosTabla.map(itemPedido =>
                        <tr id={"list-pedido-" + itemPedido.idpedido}
                        onClick={()  => this.seleccionarPedido(itemPedido)}
                        key={itemPedido.idpedido}>
                            <td>{itemPedido.idpedido}</td>
                            <td>{itemPedido.nombres}</td>
                            <td>{itemPedido.fechapedido}</td>
                            <td>{itemPedido.total}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }

    seleccionarPedido(itemPedido){
        console.log(itemPedido);
        if(this.state.pedidoSeleccionado !== ''){
            document.getElementById("list-pedido-" + this.state.pedidoSeleccionado.idpedido)
            .classList.remove("active");
        }
        this.setState({ pedidoSeleccionado: itemPedido });
        document.getElementById("list-pedido-" + itemPedido.idpedido).classList.add("active");
    }

    render() {
        let contenidoTablaDetalle = <PedidoList detallePedido = {this.state.pedidoSeleccionado}/>
        let contenidoTabla = this.dibujarTabla(this.state.listaPedidos)
        return (
            <section className='padded'>
                <div className='margined-list'>
                    <div>
                        <span className="alt-font font-weight-500 text-green text-extra-medium d-block margin-20px-bottom sm-margin-10px-bottom">List of Order</span>
                        <h4 className="alt-font font-weight-600 text-extra-dark-gray">Order the first true generator on the Internet.</h4> 
                    </div>
                    <div className='d-flex justify-content-between'>
                        <div className='col-6 container'>
                            {contenidoTabla}
                        </div>                 
                        <div className='col-6 container'>
                            <span className="alt-font font-weight-500 text-green text-extra-medium d-block margin-20px-bottom sm-margin-10px-bottom">{this.state.pedidoSeleccionado.nombrse}</span>
                            {contenidoTablaDetalle}
                        </div>   
                    </div>
                </div>
            </section>
        );
    }
}

export default Pedidos;