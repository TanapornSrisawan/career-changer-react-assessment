import React from "react";
import Layout from "./Layout";
import { useState } from "react"
import { useEffect } from "react";


const User = (props) => {


    return (
        <>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Position</th>
                </tr>
                {props.employees.map((item) => {
                    return (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.lastname}</td>
                            <td>{item.position}</td>
                        </tr>
                    );
                })}
            </table>
        </>

    );

}
export default User;
