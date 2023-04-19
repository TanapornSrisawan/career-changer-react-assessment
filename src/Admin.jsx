import React from "react";
import Layout from "./Layout";
import { useState } from "react"
import { useEffect } from "react";

const Admin = (props) => {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [position, setPosition] = useState('');

    const createUser = () => {
        if (name !== " " && lastname !== "" && position !== "") {
            const newEmployee = {
                name: name,
                lastname: lastname,
                position: position
            };
            props.setEmployees([...props.employees, newEmployee]);
        }
    };

    const deleteUser = (index) => {
        const deleteList = [...props.employees];
        deleteList.splice(index, 1)
        props.setEmployees(deleteList)

    }

    return (
        <>
            <div>
                <label>Create User Here</label>
                <input
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                    value={name}
                    type="text"
                    placeholder="Name"
                />
                <input
                    onChange={(event) => {
                        setLastname(event.target.value);
                    }}
                    value={lastname}
                    type="text"
                    placeholder="Last Name"
                />
                <input
                    onChange={(event) => {
                        setPosition(event.target.value);
                    }}
                    value={position}
                    type="text"
                    placeholder="Position"
                />
                <button onClick={createUser}>
                    Save
                </button>
            </div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Position</th>
                    <th>Action</th>
                </tr>
                {props.employees.map((item) => {
                    return (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.lastname}</td>
                            <td>{item.position}</td>
                            <td><button onClick={deleteUser}>Delete</button></td>
                        </tr>
                    );
                })}
            </table>
        </>

    );
}

export default Admin;





