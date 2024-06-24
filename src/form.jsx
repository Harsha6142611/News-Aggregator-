import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Feedback = () => {
    const [user, setUser] = useState({
        Name: '', Rate_your_experience: '', Easy_to_navigate: '', Helpful_content: '', Suggestions: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { Name, Rate_your_experience, Easy_to_navigate, Helpful_content, Suggestions } = user;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Name, Rate_your_experience, Easy_to_navigate, Helpful_content, Suggestions
            })
        };

        const res = await fetch('https://login-4e5bf-default-rtdb.firebaseio.com/UserData.json', options);
        if (res) {
            alert("Message Sent");
            setUser({
                Name: '', Rate_your_experience: '', Easy_to_navigate: '', Helpful_content: '', Suggestions: ''
            });
        } else {
            alert("Error Occurred");
        }
    };

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header bg-primary text-white text-center">
                            <h3>Feedback Form</h3>
                        </div>
                        <div className="card-body">
                            <form method="POST" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="Name" className="form-label">Your Name</label>
                                    <input type="text" className="form-control" id="Name" name="Name" placeholder="Your Name" value={user.Name} autoComplete="off" required onChange={handleInputChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Rate_your_experience" className="form-label">Rate Your Experience out of 10</label>
                                    <input type="text" className="form-control" id="Rate_your_experience" name="Rate_your_experience" placeholder="Rate your experience out of 10" value={user.Rate_your_experience} autoComplete="off" required onChange={handleInputChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Easy_to_navigate" className="form-label">Was the website easy to navigate?</label>
                                    <input type="text" className="form-control" id="Easy_to_navigate" name="Easy_to_navigate" placeholder="Did you find the website easy to navigate?" value={user.Easy_to_navigate} autoComplete="off" required onChange={handleInputChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Helpful_content" className="form-label">Did you find the website useful?</label>
                                    <input type="text" className="form-control" id="Helpful_content" name="Helpful_content" placeholder="Did you find the website useful?" value={user.Helpful_content} autoComplete="off" required onChange={handleInputChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Suggestions" className="form-label">Enter your suggestions here</label>
                                    <textarea className="form-control" id="Suggestions" name="Suggestions" rows="3" placeholder="Enter your suggestions here" value={user.Suggestions} autoComplete="off" required onChange={handleInputChange}></textarea>
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
