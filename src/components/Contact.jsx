import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>Have Some Question?</h1>
                        <hr className='border-info' />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 d-flex justify-content-center">
                        <img src="https://img.freepik.com/free-vector/character-illustration-people-with-internet-message-icons_53876-59877.jpg?w=900&t=st=1684404503~exp=1684405103~hmac=71bba31879885e1f75ab73f84660c0ff4a7344a2d7484523d09c7ea163c82cda" alt="Contact Us" height="300px" width="300px" />
                    </div>
                    <div className="col-md-6">
                        <form >
                            <div class="mb-3">
                                <label for="exampleForm" class="form-label">Full Name</label>
                                <input type="text" class="form-control border-info" id="exampleForm" placeholder="John Smith"/>
</div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control border-info" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                    <textarea class="form-control border-info" id="exampleFormControlTextarea1" rows="5"></textarea>
                                </div>
                                <button type="submit" class="btn btn-outline-info">Send Message</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
            )
}

            export default Contact
