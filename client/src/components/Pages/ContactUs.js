import React from "react";

const ContactUs = () => (
<div className="form mt-5">
<h1>Contact Us</h1>

{/* <p>
Leave us a message:
</p> */}
<form>
<div className="form-group">
<label>Full Name</label>
<input type="name" className="form-control" id="nameForm" placeholder="Enter your Name"></input>
</div>

<div className="form-group">
<label>Email Address</label>
<input type="email" className="form-control" id="emailForm" placeholder="Enter your Email ID"></input>
<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
</div>

<div className="form-group">
<label>Message:</label>
{/* <input type="message" className="form-control" id="emailForm" placeholder="Enter your Email ID"></input> */}
<div className="comment mt-3">
<textarea rows="4" cols="50" className="form-control" name="comment" form="usrform"></textarea>
</div>
</div>
<button type="submit" className="btn btn-primary">Submit</button>

</form>


</div>
);
export default ContactUs;