import axios from "axios";
import React from "react";
import {
    Card, CardBody, CardTitle, CardSubtitle, CardText, Button,
    Row,
    Col
} from "reactstrap";
import baseUrl from "../api/api";
import { toast } from "react-toastify";
import UpdateCourseModal from "./UpdateCourseModal";

const Course = ({ course, update }) => {

    const deleteCourse = (id) => {
        axios.delete(`${baseUrl}/course/` + id).then((response) => {
            toast.success("Course deleted successfully with id " + response.data.courseId);
            update();
        }).catch((err) => {
            toast.error("Failed to delete course");
        });
    }


    return (
        <Card>
            <CardBody>
                <CardTitle className="text-primary">Course id : {course.courseId}</CardTitle>
                <CardSubtitle className="text-secondary">Course title : {course.courseTitle}</CardSubtitle>
                <CardText>
                    Description :  {course.courseDescription}
                </CardText>
                <Row>
                    
                <Col md={3}></Col>
                <Col md={3}>
                    <UpdateCourseModal course={course} update={update} />
                </Col>
                <Col md={3}>
                    <Button color="danger" onClick={
                        () => {
                            // Delete Course from API
                            deleteCourse(course.courseId);
                        }
                    } style={
                        { marginLeft: "10px" }
                    }
                    >Delete</Button>
                </Col>
                <Col md={3}></Col>

                    
                    
                </Row>
            </CardBody>
        </Card>
    );
}

export default Course;

