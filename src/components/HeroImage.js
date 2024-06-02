import React, { Component } from 'react'

class HeroImage extends Component {
  render() {
    return (
      <div className='hero-img'>
        <div className='heading'>
        <h1 className='text-4xl md:text-6xl font-bold'>{this.props.heading}</h1>
            <p>{this.props.text}</p>

        </div>
        
      </div>
    )
  }
}

export default HeroImage
