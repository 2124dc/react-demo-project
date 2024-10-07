import React, { useEffect } from "react";

const Home = () => {

    useEffect(() => {
        document.title = "Home";
    }, [])

    return (
        <div className="text-center">
            <h1>Home</h1>
            <p>Welcome to my Courses App!</p>
        </div>
    );
};

export default Home;