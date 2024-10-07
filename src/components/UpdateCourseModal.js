import React, { useState } from "react";
import {
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input
} from "reactstrap";
import axios from "axios";
import baseUrl from "../api/api";
import { toast } from "react-toastify";

const UpdateCourseModal = ({ course, update }) => {
    const [modal, setModal] = useState(false);
    const [updatedCourse, setUpdatedCourse] = useState(course);

    const toggle = () => setModal(!modal);

    const handleForm = (e) => {
        e.preventDefault();
        axios.put(`${baseUrl}/course/` + updatedCourse.courseId, updatedCourse)
            .then((response) => {
                toast.success("Course updated successfully");
                update();
                toggle();
            })
            .catch((err) => {
                toast.error("Failed to update course");
            });
    };

    return (
        <div>
            <Button color="warning" onClick={toggle}>Update</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Update Course</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleForm}>
                        <FormGroup>
                            <label htmlFor="courseId">Course Id:</label>
                            <Input type="text" id="courseId" name="courseId" value={updatedCourse.courseId} readOnly />
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="courseTitle">Course Title:</label>
                            <Input type="text" id="courseTitle" name="courseTitle" value={updatedCourse.courseTitle}
                                onChange={(e) => setUpdatedCourse({ ...updatedCourse, courseTitle: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="courseDescription">Course Description:</label>
                            <Input type="textarea" id="courseDescription" name="courseDescription" value={updatedCourse.courseDescription}
                                onChange={(e) => setUpdatedCourse({ ...updatedCourse, courseDescription: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <Button color="success" type="submit" >Update</Button>
                            <Button color="secondary" style={
                                { marginLeft: "10px" }
                            } onClick={toggle}>Cancel</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
};

export default UpdateCourseModal;