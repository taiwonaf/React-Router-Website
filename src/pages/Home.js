import React from 'react'

const Home = () => {
  const style= {
    color: "red"
  }
  return (
    <div className='home-main'>
  <h1>Create Professional <br /> <span style={style}>Testimonials Videos</span> Easily <br />in Your Home</h1>
      <p>We help companies and manage quality video content through a computer or smartphone </p>
      <button className='btn'>Schedule a demo</button>
    </div>
  )
}

export default Home