import React from "react";
import { ListGroup } from "reactstrap";
import { NavLink } from 'react-router-dom';

const Menus = () => {
    return (
        <div>
            <ListGroup className="mt-2">
                <NavLink className={"list-group-item list-group-item-action"} tag="a" to="/">Home</NavLink>
                <NavLink className={"list-group-item list-group-item-action"} tag="a" to="/add-course">Add Course</NavLink>
                <NavLink className={"list-group-item list-group-item-action"} tag="a" to="/view-courses">View Courses</NavLink>
                <NavLink className={"list-group-item list-group-item-action"} tag="a" to="/about">About</NavLink>
                <NavLink className={"list-group-item list-group-item-action"} tag="a" to="/contact-us ">Contact Us</NavLink>

            </ListGroup>
        </div>
    );
}

export default Menus;