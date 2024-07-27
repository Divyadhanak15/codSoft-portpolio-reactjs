import './About.css';
import React from 'react';
import img from './img.jpg';

const About = () => {
  return (
    <div id="about">

    <div className="about-container">

    <table>
	<tbody>
		<tr>
			<td><img src={img} className='pic'/></td>
			<td>   
      <h1 style={{color:'whitesmoke ', textAlign:"center", fontFamily:"cursive"}}> "About Me"</h1>
      <p>Myself Divya Dhanak.</p>
    <p>I had completed my Schooling from New Era School.</p>
    <p>I had completed my Bachlor's in Computer Application from M.J. Kundaliya College</p>
    <p>I'm an IT Developer. I am also Pursuing my Masters in Computer Application and will graduate in mid-2025.</p>
    <p>My short term goal is to get placed in a reputed company where I can improve my skills. 
    My Long Term goal is to get a good position in a reputed company. </p></td>
		</tr>
	</tbody>
</table>
    </div>
    
  </div>
      
  );
}

export default About;
