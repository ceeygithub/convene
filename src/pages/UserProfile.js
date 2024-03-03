
 import React from 'react';
// import  {  useNavigate } from 'react-router-dom';
import {Link}  from 'react-router-dom';
import UserProfileCss from '.././styles/UserProfile.module.css';
// import Button from '../components/button/Button'


const UserProfile = () => {
    return (
        <div className='container'>
          
            <main>
                <section>
                    <h2>Little about me</h2>

                    <p><strong>Designer is a person who makes designs for objects.</strong> <br /> ... More formally, a designer is an agent that "specifies the structural properties of a design object". In practice, anyone who creates tangible or intangible objects, products,
                        processes, laws, games, graphics, services, and experiences is referred to as a designer.</p>
                    <br />
                    <br />
                    <h2>What is Lorem Ipsum?</h2>

                    <ol>
                        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                        <li>Aliquam tincidunt mauris eu risus.</li>
                    </ol>
                    <br />
                    <br />
                    <h2>Photographs</h2>
                    <br />
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card-content">
                                <div className="card-img">
                                    <img src="https://placeimg.com/640/480/nature?t=1558481156602" alt="" />
                                    <span><h4>Heading</h4></span>
                                </div>
                                <div className="card-desc">
                                    <h3>Heading</h3>
                                    <p>The words nature and natural are used for all the things that are normally not made by humans. Things like weather, organisms, landforms, celestial bodies and much more are part of nature. ...</p>
                                  
                                    <Link to="#" className="btn-card">Read more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="{UserProfile[card - content]}">
                                <div className="card-img">
                                    <img src="https://placeimg.com/640/480/nature?t=1558481196666" alt="" />
                                    <span><h4>Heading2</h4></span>
                                </div>
                                <div className="card-desc">
                                    <h3>Heading2</h3>
                                    <p>The words nature and natural are used for all the things that are normally not made by humans. Things like weather, organisms, landforms, celestial bodies and much more are part of nature. ...</p>
                                    

                                    <Link to="#" className="btn-card">Read more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card-content">
                                <div className="card-img">
                                    <img src="https://placeimg.com/640/480/nature?t=1558481287512" alt="" />
                                    <span><h4>Heading3</h4></span>
                                </div>
                                <div className="card-desc">
                                    <h3>Heading3</h3>
                                    <p>The words nature and natural are used for all the things that are normally not made by humans. Things like weather, organisms, landforms, celestial bodies and much more are part of nature. ...</p>

                                    <Link to="#" className="btn-card">Read more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

 export default UserProfile;