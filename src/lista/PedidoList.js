import React, { Component } from 'react';
import { BsHeart } from 'react-icons/bs'

class PedidoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listaPedidosDetalle: []
        }
    }

    componentWillReceiveProps(props) {
        console.log(props.detallePedido)
        this.leerPedidosDetalle(props.detallePedido.idpedido)
    }

    leerPedidosDetalle(idpedido) {
        const rutaServicio = "https://servicios.campus.pe/pedidosdetallebuscar.php";
        var formData = new FormData();
        formData.append("idpedido", idpedido);

        fetch(rutaServicio, {
            method: 'POST',
            body: formData
        })
            .then(
                res => res.json()
            )
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        listaPedidosDetalle: result
                    })
                }
            )
    }


    dibujarTablaDetalle(datosTabla) {
        return (
            <div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID Prod.</th>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Detalle</th>
                        <th>Precio (S/)</th>
                    </tr>
                </thead>
                <tbody>
                    {datosTabla.map(itemPedidoDetalle =>
                        <tr key={itemPedidoDetalle.idproducto}>
                            <td>{itemPedidoDetalle.idproducto}</td>
                            <td>{itemPedidoDetalle.nombre}</td>
                            <td>{itemPedidoDetalle.cantidad}</td>
                            <td>{itemPedidoDetalle.detalle}</td>
                            <td>{itemPedidoDetalle.precio}</td>
                        </tr>
                    )}
                </tbody>
            </table>            
            <div className='container' >
                <div className="row justify-content-center">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                    {datosTabla.map(itemPedidoDetalle =>
                        <div class="col-sm">
                            <div class="card">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <small className='icons'>{itemPedidoDetalle.idproducto}</small>
                                    </div>
                                    <div>
                                        <small className='icons'>{itemPedidoDetalle.nombre}</small>
                                    </div>
                                </div>                        
                                <img src={"https://servicios.campus.pe/" + itemPedidoDetalle.imagenchica} alt="" /> 
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>
            </div>
        )
    }

    render() {
        let contenidoTablaDetallePost = ''
        if (this.state.listaPedidosDetalle !== null){
            contenidoTablaDetallePost = this.dibujarTablaDetalle(this.state.listaPedidosDetalle)
        }
        return (
            <div>
                {contenidoTablaDetallePost}
            </div>
        );
    }
}

export default PedidoList;