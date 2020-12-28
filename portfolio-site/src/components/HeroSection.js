import { Button } from './Button'
import './HeroSection.css'
import React from 'react'

function HeroSection() {

    const postData = () => {
        alert('testing')
    }

    return (
        <div className='hero-container'>
            <div className='input-areas'>
                <form>
                    <input
                    className='footer-input'
                    name='song'
                    type='song'
                    placeholder='Search Song...'
                    />
                </form>
            </div>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' 
                buttonSize='btn--large' onClick={postData}>
                    Get Started
                </Button>
            </div>
        </div>
    )
}

export default HeroSection


