import '../assets/styles/Administrador.css'
import {ChangeEvent, useEffect, useState} from "react";
import {contains, dateToYY_MM_DD, objectIsVoid} from "../helpers/utilsObject";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {useNavigate} from "react-router-dom";
import {ADMINISTRADOR_ELIMINAR_USER} from "../store/administrador/types";
import {setCurrentUser, setIsEdit, setOpenModal} from "../store/administrador/actions";
import ModalActualizarUsuario from "../components/ModalActualizarUsuario";
import {Usuario} from "../interfaces/login";
import {AiOutlineSearch} from "react-icons/ai";
import {Intervalo} from "../interfaces/administrador";

const Administrador = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [intervalo, setIntervalo] = useState<Intervalo>({} as Intervalo);

    const {
        usuarioLogueado,
        dataUsuarios,
    } = useSelector((state: RootState) => state.LoginReduce);

    useEffect(() => {
        if (objectIsVoid(usuarioLogueado)) {
            navigate('/');
        }
    }, []);

    const [dataTable, setDataTable] = useState(dataUsuarios);
    useEffect(() => {
        setDataTable(dataUsuarios)
    }, []);

    const handleSearchTipoVacuna = (event: ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        const result = dataUsuarios.reduce((acc: Usuario[], item: Usuario) => {
            if (contains(item.tipoVacuna ?? '', value)) {
                acc.push(item);
            }
            return acc;
        }, []);
        setDataTable(result);
    }

    const handleSearchEstadoVacunacion = (event: ChangeEvent<HTMLSelectElement>) => {
        let value = event.target.value;
        const result = dataUsuarios.reduce((acc: Usuario[], item: Usuario) => {
            if (contains(item.estaVacunado ?? '', value === 'Elegir...' ? '' : value)) {
                acc.push(item);
            }
            return acc;
        }, []);
        setDataTable(result);
    }

    const handleSearchIntervalo = () => {
        let start = new Date(intervalo.inicio);
        let end = new Date(intervalo.fin);
        const tempData = dataUsuarios.map((item: Usuario) => {
            let date = new Date(item.fechaVacunacion ?? '');
            return {...item, fechaVacunacion: date}
        });
        const result = tempData.filter((item: any) =>
            item.fechaVacunacion.getTime() >= start.getTime() && item.fechaVacunacion.getTime() <= end.getTime()
        );
        const newResult = result.map((item: any) => {
            return {...item, fechaVacunacion: dateToYY_MM_DD(item.fechaVacunacion)}
        });
        setDataTable(newResult);
    }

    return (
        <section className="administrador">
            <div className="usuarios">
                <div className="row">
                    <div className="col">
                        <button className={"btn btn-primary"} onClick={() => {
                            dispatch(setOpenModal(true));
                        }}>
                            Registrar usuario
                        </button>
                    </div>
                </div>
                <div className="row mt-2 mb-2">
                    <div className="col-2">
                        <input className="form-control" type="text" placeholder="Tipo de vacuna..."
                               onChange={handleSearchTipoVacuna}/>
                    </div>
                    <div className="col-4">
                        <div className="input-group">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">Estado de
                                vacunación</label>
                            <select className="custom-select" id="inputGroupSelect01"
                                    onChange={handleSearchEstadoVacunacion}>
                                <option selected>Elegir...</option>
                                <option value="Si">Si</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col">
                                <input type="date" className="form-control" onChange={(e) => {
                                    setIntervalo({...intervalo, inicio: e.target.value})
                                }}/>
                            </div>
                            <div className="col">
                                <input type="date" className="form-control" onChange={(e) => {
                                    setIntervalo({...intervalo, fin: e.target.value})
                                }}/>
                            </div>
                            <div className="col">
                                <button className="btn btn-secondary" onClick={handleSearchIntervalo}>
                                    <AiOutlineSearch/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <table className='table-wrap is-striped'>
                    <thead>
                    <tr>
                        <th>Cédula</th>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Email</th>
                        <th>Tipo vacuna</th>
                        <th>Fecha vacunación</th>
                        <th>Numero dosis</th>
                        <th>Acciones</th>
                    </tr>
                    </thead>

                    <tbody>
                    {dataTable.filter(x => x.email !== usuarioLogueado.email).map((dato, index) => (
                        <tr key={index}>
                            <td>{dato.cedula}</td>
                            <td>{dato.nombres}</td>
                            <td>{dato.apellidos}</td>
                            <td>{dato.email}</td>
                            <td>{dato.tipoVacuna}</td>
                            <td>{dato.fechaVacunacion}</td>
                            <td>{dato.numeroDosis}</td>
                            <td>
                                <button className={"btn btn-success"} onClick={() => {
                                    dispatch(setCurrentUser(dato));
                                    dispatch(setIsEdit(true));
                                    dispatch(setOpenModal(true));
                                }}>
                                    Editar
                                </button>
                                {" "}
                                <button className={"btn btn-danger"} onClick={() => {
                                    dispatch({type: ADMINISTRADOR_ELIMINAR_USER, payload: dato})
                                }}>Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <ModalActualizarUsuario/>
        </section>
    )
}
export default Administrador;