import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './Categorias.css'

class Categorias extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listaCategorias: [],
            nombreInsert: '',
            descripcionInsert: '',
            idcategoriaUpdate: '',
            nombreUpdate: '',
            descripcionUpdate: ''
        }
    }

    componentDidMount() {
        this.leerCategorias();
    }

    leerCategorias() {
        const rutaServicio = "https://servicios.campus.pe/serviciocategorias.php";
        fetch(rutaServicio)
            .then(
                res => res.json()
            )
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        listaCategorias: result
                    })
                }
            )
    }

    dibujarCards(datosCards) {
        return (
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {datosCards.map(itemCategoria =>
                <div className="col" key={itemCategoria.idcategoria}>
                    <div className="card h-100">
                        <div className="card-body">
                            <div class="d-flex justify-content-between">
                                <div>
                                    <h5 className="card-title iz">{itemCategoria.nombre}</h5>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faEdit} className="botonCard icons" title='Editar'
                                    onClick={() => this.mostrarActualizar(itemCategoria)}
                                    data-bs-toggle="modal" data-bs-target="#updateModal" />
                                    <FontAwesomeIcon icon={faTimes} className="botonCard icons" title='Eliminar'
                                    onClick={() => this.categoriasDelete(itemCategoria)} />
                                </div>
                            </div>
                            <span>{itemCategoria.descripcion}</span>
                        </div>
                    </div>
                </div>
                )}
            </div>
        )
    }
    
    mostrarActualizar = (itemCategoria) => {
        console.log(itemCategoria);
        this.setState({
            idcategoriaUpdate: itemCategoria.idcategoria,
            nombreUpdate: itemCategoria.nombre,
            descripcionUpdate: itemCategoria.descripcion
        })
    }

    dibujarFormularioUpdate() {
        //Modal
        return (
            <div className="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Actualizar categoría</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={this.categoriasUpdate}>
                            <div className="modal-body">
                                <div className='mb-2'>
                                    <input type='text' className='form-control' readOnly
                                        value={this.state.idcategoriaUpdate} />
                                </div>
                                <div className='mb-2'>
                                    <input type='text' className='form-control' placeholder='Nombre'
                                        value={this.state.nombreUpdate}
                                        onChange={(e) => this.setState({ nombreUpdate: e.target.value })} />
                                </div>
                                <div className='mb-2'>
                                    <input type='text' className='form-control' placeholder='Descripción'
                                        value={this.state.descripcionUpdate}
                                        onChange={(e) => this.setState({ descripcionUpdate: e.target.value })} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Actualizar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    categoriasUpdate = (e) => {
        e.preventDefault(); //Evita que se propaguen eventos (En este caso que no se vuelva a cargar la página)

        const rutaServicio = "https://servicios.campus.pe/categoriasactualizar.php";
        var formData = new FormData();
        formData.append("idcategoria", this.state.idcategoriaUpdate);
        formData.append("nombre", this.state.nombreUpdate);
        formData.append("descripcion", this.state.descripcionUpdate);

        fetch(rutaServicio, {
            method: 'POST',
            body: formData
        })
            .then(
                () => {
                    this.leerCategorias();
                }
            )
    }

    dibujarFormularioInsert() {
        return (
            <div id='formulario-insert'>
                <input type='button' className='btn btn-primary btn-ins' value='New category' data-bs-toggle='collapse' data-bs-target='#collapseInsert' />
                <div className="collapse" id="collapseInsert">
                    <div className="card card-body margined">
                        <form onSubmit={this.categoriasInsert}>
                            <div className='mb-2'>
                                <input type='text' className='form-control' placeholder='Nombre' required value={this.state.nombreInsert} onChange={(e) => this.setState({ nombreInsert: e.target.value })} />
                            </div>
                            <div className='mb-2'>
                                <input type='text' className='form-control' placeholder='Descripcion' required value={this.state.descripcionInsert} onChange={(e) => this.setState({ descripcionInsert: e.target.value })} />
                            </div>
                            <div className='mb-2'>
                                <input type='submit' className='btn btn-primary icons' value='Guardar' data-bs-toggle='collapse' data-bs-target='#collapseInsert' />
                                <input type='button' className='btn btn-secundary icons' value='Cerrar' data-bs-toggle='collapse' data-bs-target='#collapseInsert' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    categoriasInsert = (e) => {
        e.preventDefault();//Evita que se propaguen eventos (En este caso que no se vuelva a cargar la página)
        console.log(this.state.nombreInsert);
        console.log(this.state.descripcionInsert);

        const rutaServicio = "https://servicios.campus.pe/registrarcategorias.php";
        var formData = new FormData();
        formData.append("nombre", this.state.nombreInsert);
        formData.append("descripcion", this.state.descripcionInsert);

        fetch(rutaServicio, {
            method: 'POST',
            body: formData
        })
            .then(
                res => res.text()
            )
            .then(
                (result) => {
                    console.log(result);
                    this.leerCategorias();
                    this.setState({
                        nombreInsert: '',
                        descripcionInsert: ''
                    })
                }
            )
    }

    render() {
        let contenidoCards = this.dibujarCards(this.state.listaCategorias)
        let contenidoFormularioInsert = this.dibujarFormularioInsert()
        let contenidoFormularioUpdate = this.dibujarFormularioUpdate()
        return (
            <section className='cards-categorias padded'>
                <div className='container'>
                    <span className="alt-font font-weight-500 text-green text-extra-medium d-block margin-20px-bottom sm-margin-10px-bottom">Categories</span>
                    <h4 className="alt-font font-weight-600 text-extra-dark-gray d-inline-block">Too much categories updated to us</h4> 
                    {contenidoFormularioInsert}
                    {contenidoCards}
                </div>
                {contenidoFormularioUpdate}
            </section>
        );
    }
}

export default Categorias;