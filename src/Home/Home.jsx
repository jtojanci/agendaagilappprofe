import './Home.css'
import basedatos from "../utils/basedatos.json"


export function Home(){

    console.log(basedatos.length)
    console.log(basedatos[0])

    return( //Zona que se usará para renderizar

        <>

        <section className="container mt-5">
            <div className="row">
                
                <div className="col-12 col-md-6">
                <h4 className='fuente'>Servicios a un clic</h4>
                    <h2 className="text-muted">HOLA <span className='fuente'>{basedatos[0].nombreUsuario}</span></h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus dolorem cum similique blanditiis, magni sit numquam odit quos totam, commodi natus iste. Necessitatibus eveniet quas dicta eaque iste fugit labore consequuntur. Alias, sit cupiditate sunt reprehenderit reiciendis veritatis dignissimos minima. Architecto odit deserunt expedita atque consectetur culpa qui, laborum id.</p>

                </div>
                <div className="col-12 col-md-6">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Tu grupo familiar</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <div className="row">
                        <div className="col-12 col-md-2 mt-4">
                            <i class="bi bi-person-fill-add fs-1 fuente"></i>
                        </div>
                        <div className="col-12 col-md-10 mt-2">
                            <br />
                            <h5>MEDICO DE FAMILIA</h5>
                            <h6>{basedatos[0].medicoDeFamilia}</h6>
                        </div>
                        
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-12 col-md-2 mt-3">
                            <i class="bi bi-person-circle fs-1 fuente"></i>
                        </div>
                        <div className="col-12 col-md-10 mt-1">
                            <br />
                            <h5>TIPO DE AFILIADO</h5>
                            <h6>COTIZANTE</h6>
                            <h6>GRUPO DE INGRESOS: {basedatos[0].grupoDeIngreso}</h6>
                            <h6>Ver más</h6>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-12 col-md-2 mt-3">
                        <i class="bi bi-briefcase-fill fs-1 fuente"></i>
                        </div>
                        <div className="col-12 col-md-10 mt-1">
                            <br />
                            <h5>ESTADO DE AFILIACIÓN</h5>
                            <h6>TIENE DERECHO A COBERTURA INTEGRAL</h6>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-12 col-md-2 mt-4">
                        <i class="bi bi-hospital-fill fs-1 fuente"></i>
                        </div>
                        <div className="col-12 col-md-10 mt-3">
                            <br />
                            <h4>IPS Actual</h4>
                            <h5>{basedatos[0].ips}</h5>
                        </div>
                        
                    </div>
                    <hr />
                </div>
            </div>
        </section>
        <hr />

        <section className="container">
            <div className="row">
                <div className="col 12 col-md5">
                    <h5>{basedatos[0].nombreUsuario}, estás son tus póximas citas</h5>
                </div>
            </div>
        </section>
        <section className="container my-5">
            <div className="row row-cols-1
            row-cols-md-3">
                {
                    basedatos[0].citasMedicas.map(function(cita){
                        return(
                            <div className="col">
                                <div className="card h-100 shadow px-2">
                                    <h3>{cita.especialidad}</h3>
                                    <h4>Fecha: {cita.fecha}</h4>
                                    <h4>{cita.direccion}</h4>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </section>
        </>
    )
}