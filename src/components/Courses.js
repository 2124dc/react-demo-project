import React, { useState, useEffect } from "react";
import Course from "./Course";

import baseUrl from "../api/api";
import axios from "axios";
import { toast } from "react-toastify";


const Courses = () => {

    useEffect(() => {
        document.title = "Courses";
        getCourses();
    }, []);



    // Fetch data from API
    const getCourses = () => {
        axios.get(`${baseUrl}/course`)
            .then((response) => {
                setCourses(response.data);
                toast.success("Data has been loaded successfully", {
                    position: "bottom-left"
                });
            }).catch((err) => {
                console.log(err);
                toast.error("Something went wrong...!!!", {
                    position: "bottom-left"
                });
            });
    }

    // Mock data for courses
    const [courseData, setCourses] = useState([]);

    return (
        <div>
            <h1>All Courses</h1>
            <p>List of Course are as follows: </p>
            {
                courseData.length > 0 ? courseData.map((item) => (
                    <Course key={item.courseId} course={item} update={getCourses} />
                )) : "NO Courses...!!!"
            }
        </div>
    )
}

export default Courses;
