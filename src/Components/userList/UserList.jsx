import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserList.css";

function UserList() {
    const [listOfUSer, setListOfUSer] = useState([]);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(function (response) {
                setListOfUSer(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    return (
        <div className="cards">
            {listOfUSer.map((user, index) => (
                <div key={index} className="userCard">
                    <div className="profileCard">
                        <h4>{user.name}</h4>
                        <span>{user.email}</span> <br />
                        <span> {user.company.catchPhrase}</span>
                        <p>
                            <strong>{user.company.name}</strong>
                        </p>
                        <span><h7>Phone N°:</h7>{user.phone}</span>
                        <p>Address: {user.address.street}, {user.address.suite},{" "}
                            {user.address.city}, {user.address.zipcode}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default UserList;