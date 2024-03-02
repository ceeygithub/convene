import React from 'react';
// import { Link } from 'react-router-dom';
import ProfileCSS from '.././styles/Profile.module.css';


// const UserProfile = () => {
//     return (
//         <div className='container'>
//             <menu id="user" className={ProfileCSS.menu} > 
//                 <div className="user-profile">
//                     <div className="profile-pic">
//                         <img src="https://images.unsplash.com/photo-1549669944-ca3e8b576248?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="username here" />
//                     </div>

//                     <div className="user-info">
//                         <div className="username">
//                             <p><strong> Laura Egan</strong> </p>
//                         </div>
//                         <ul className="profile-menu">
//                             <li>
                               
//                                 <Link to="/directory " className="glyphicon glyphicon-list-alt" title="Directory Phonebook">Directory</Link>
//                             </li>
//                             <li>
                             
//                                 <Link to="/help?topic=index" className="glyphicon glyphicon-question-sign" title="Help">Help</Link>
//                                 </li>
//                             <li>
                                
//                                 <Link to="#" className="glyphicon glyphicon-cog" title="Settings">Settings</Link>
//                                 </li>
//                             <li>
//                                 <a href="/login"><span className="glyphicon glyphicon-log-out" title="Log Out / End Session"></span></a>
//                                 <Link to="/login" span className="glyphicon glyphicon-log-out" title="Log Out / End Session">logout</Link>
//                                 </li>
//                         </ul>
//                     </div>
//                 </div>

//                 <ul className="admin-menu">
//                     <li>   <Link to="#">Profile</Link> </li>
//                     <li> <Link to="#">Profile</Link></li>
//                     <li> <Link to="#">Profile</Link></li>
//                     <li> <Link to="#">Profile</Link></li>
//                 </ul>
//             </menu>

//             <main>
//                 <section>
//                     <h2>Little about me</h2>

//                     <p><strong>Designer is a person who makes designs for objects.</strong> <br /> ... More formally, a designer is an agent that "specifies the structural properties of a design object". In practice, anyone who creates tangible or intangible objects, products,
//                         processes, laws, games, graphics, services, and experiences is referred to as a designer.</p>
//                     <br />
//                     <br />
//                     <h2>What is Lorem Ipsum?</h2>

//                     <ol>
//                         <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
//                         <li>Aliquam tincidunt mauris eu risus.</li>
//                     </ol>
//                     <br />
//                     <br />
//                     <h2>Photographs</h2>
//                     <br />
//                     <div className="row">
//                         <div className="col-md-4">
//                             <div className="card-content">
//                                 <div className="card-img">
//                                     <img src="https://placeimg.com/640/480/nature?t=1558481156602" alt="" />
//                                     <span><h4>Heading</h4></span>
//                                 </div>
//                                 <div className="card-desc">
//                                     <h3>Heading</h3>
//                                     <p>The words nature and natural are used for all the things that are normally not made by humans. Things like weather, organisms, landforms, celestial bodies and much more are part of nature. ...</p>
                                  
//                                     <Link to="#" className="btn-card">Read more</Link>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-4">
//                             <div className="{ProfileCSS[card - content]}">
//                                 <div className="card-img">
//                                     <img src="https://placeimg.com/640/480/nature?t=1558481196666" alt="" />
//                                     <span><h4>Heading2</h4></span>
//                                 </div>
//                                 <div className="card-desc">
//                                     <h3>Heading2</h3>
//                                     <p>The words nature and natural are used for all the things that are normally not made by humans. Things like weather, organisms, landforms, celestial bodies and much more are part of nature. ...</p>
                                    

//                                     <Link to="#" className="btn-card">Read more</Link>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-4">
//                             <div className="card-content">
//                                 <div className="card-img">
//                                     <img src="https://placeimg.com/640/480/nature?t=1558481287512" alt="" />
//                                     <span><h4>Heading3</h4></span>
//                                 </div>
//                                 <div className="card-desc">
//                                     <h3>Heading3</h3>
//                                     <p>The words nature and natural are used for all the things that are normally not made by humans. Things like weather, organisms, landforms, celestial bodies and much more are part of nature. ...</p>

//                                     <Link to="#" className="btn-card">Read more</Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </main>
//         </div>
//     );
// };

// export default UserProfile;
const UserProfile = () => {
    return (
        <>
            <div className={ProfileCSS.menuContainer} > 
            <div class="menu-filter">
                <button data-filter="*">All</button>
                <button data-filter=".appetizer">Appetizers</button>
                <button data-filter=".main-course">Main Course</button>
                <button data-filter=".dessert">Desserts</button>
            </div>

                <div className={ProfileCSS.menuColumn }>
                <div class="menu-item appetizer">
                    <div class="card">
                        <img src="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Appetizer 1" class="card-img-top"/>
                            <div class="card-body">
                                <h5 class="card-title">Appetizer 1</h5>
                                <p class="card-text">Description of the appetizer.</p>
                            </div>
                    </div>
                </div>

                <div class="menu-item main-course">
                    <div class="card">
                        <img src="https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Main Course 1" class="card-img-top"/>
                            <div class="card-body">
                                <h5 class="card-title">Main Course 1</h5>
                                <p class="card-text">Description of the main course.</p>
                            </div>
                    </div>
                </div>

                <div class="menu-item dessert">
                    <div class="card">
                        <img src="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Dessert 1" class="card-img-top"/>
                            <div class="card-body">
                                <h5 class="card-title">Dessert 1</h5>
                                <p class="card-text">Description of the dessert.</p>
                            </div>
                    </div>
                </div>
                <div class="menu-item dessert">
                    <div class="card">
                        <img src="https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Dessert 1" class="card-img-top"/>
                            <div class="card-body">
                                <h5 class="card-title">Dessert 1</h5>
                                <p class="card-text">Description of the dessert.</p>
                            </div>
                    </div>
                </div>
             

            </div>
        </div>
</>
    );
};

export default UserProfile;
