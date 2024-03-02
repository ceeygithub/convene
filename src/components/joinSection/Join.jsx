import React from 'react'
import  joinSectionCss from './Join.module.css'; 
import UpvoteImage from '../../assets/convene2.jpg';
// import Button from './components/button/Button' 
import Button from '../button/Button'

const joinSection = () => {
  return (
 <section className={ joinSectionCss.container} >
<div  className={ joinSectionCss.left} >
  <h2>Join Meetup</h2>
  <p>Here at Convene, individuals come together to connect with like-minded individuals, discover new interests, receive support, embrace new challenges, and pursue shared passions. Joining our community is free, and we invite you to embark on a journey of collaboration and personal growth with us.</p>
  <Button  fullWidth>sign Up</Button>
</div>
<img src={UpvoteImage} alt="Upvoting hands" />
 </section>
  )
}

export default joinSection


