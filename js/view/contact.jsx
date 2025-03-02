import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from 'react-router-dom'
import { Context } from "../store/appContext.js";
import cardContact from "../components/cardContact.jsx"

const contact = () => {

    const { store, actions } = useContext(Context)
    console.log(store.listcontact)


    return (

        <div className="w-75 mx-auto">
            <div className="d-flex justify-content-end">
                <Link to="/addContact">
                    <button className="btn btn-success">Añadir contacto</button>
                </Link>
            </div>
            <ul className="list-group mt-3">
                {store.listcontact && store.listcontact.length > 0 && store.listcontact.map((contact, index) => {
                    return (
                        <cardContact contact={contact} key={index} />
                    )
                })}
            </ul>
        </div>
    );
};
export default contact;