import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import baseUrl from "../api/api";
import { toast } from "react-toastify";

const AddCourse = () => {
    useEffect(() => {
        document.title = "Add Course";
    }, []);

    const [course, setCourse] = useState(() => { });

    const handleForm = (e) => {
        e.preventDefault();
        console.log("Form Submitted called", course);
        course !== undefined && (course.courseDescription !== undefined && course.courseTitle !== undefined) ? saveCourse(course) : toast.warning("Please fill the form");
    }

    //save data on server
    const saveCourse = async (course) => {
        axios.post(`${baseUrl}/course`, course).then((response) => {
            console.log(response);
            toast.success("Course saved successfully");
        }).catch((err) => {
            console.error(err);
            toast.error("Error saving course data");
        });
    }

    return (
        <Fragment>
            <h2 className="text-center text-primary">Add Course</h2>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <Label for="courseTitle">Course Name : </Label>
                    <Input type="text" id="courseTitle" name="courseTitle" placeholder="Course Name"
                        onChange={(e) => {
                            setCourse({ ...course, courseTitle: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="courseDescription">Course Description : </Label>
                    <Input type="textarea" id="courseDescription" name="courseDescription" placeholder="Course Description"
                        style={{ height: 100 }}
                        onChange={(e) => {
                            setCourse({ ...course, courseDescription: e.target.value });
                        }}
                    />
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success">Add</Button>
                    <Button type="reset" color="warning" className="m-2">Clear</Button>
                </Container>
            </Form>
        </Fragment>
    );
}

export default AddCourse;