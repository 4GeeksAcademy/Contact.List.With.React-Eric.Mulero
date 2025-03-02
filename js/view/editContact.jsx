import React, { useState, useRef, useEffect, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext.js";

const editContact = () => {
    const { store, actions } = useContext(Context)
    let navigate = useNavigate();

    return (

        <div className="container">
            <h1 className="text-center">Actualizar contacto</h1>

            <form className="container">
                <div className="mb-3">
                    <label for="formGroupExampleInput1" className="form-label">Nombre completo</label>
                    <input type="text" className="form-control" id="formGroupExampleInput1" placeholder="Inserta nombre" onChange={(e) => setName(e.target.value)} value={name} />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label">Email</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Insertar email" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput3" className="form-label">Telf</label>
                    <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="Telf movil" onChange={(e) => setPhone(e.target.value)} value={phone} />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput4" className="form-label">Direccion</label>
                    <input type="text" className="form-control" id="formGroupExampleInput4" placeholder="Direccion completa" onChange={(e) => setAddress(e.target.value)} value={address} />
                </div>
                <div className="mb-3">
                    <button type="button" className="btn btn-primary">Actualizar contacto</button>
                </div>
            </form>

            <Link to="/"><a>volver a Contact</a></Link>
        </div>
    )
}
export default editContact;