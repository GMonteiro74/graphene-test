import React, { useEffect, useState } from 'react';
import { Slide } from 'react-awesome-reveal';
import { Parallax } from 'react-parallax';

export default function Community() {

    // const [offsetY, setOffsettY] = useState(0);
    // const handleScroll = () => setOffsettY(window.scrollY);

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);

    //     return() => window.removeEventListener('scroll', handleScroll);
    // })


    return (
        <Parallax style={{ padding: '20px 0', zIndex: '15'}} className='community-sect bottom-100'>

        <div className='uppercase community-title' id='community'>
            <h1 className='title'>Meet our</h1>
            <div className='line-behind'>
            <h1 className='title'>Community</h1>
            <hr/>
            </div>
            <button className='rose-btn'>KNOW MORE</button>
        </div>

        <div className='grid-container'>

        <Slide triggerOnce direction='up' delay='60'>
        <div className='grid-row'>
        <Parallax style={{ gridColumn: '2 / 3', alignSelf: 'flex-end', width: '60%' }}>
        <h2 style={{ fontSize: '22px' }}>LOREM IPSUM DOLOR SIT AMET ERNUT TEMPARTERO SERTU PER NABORE EN TORNA ENTALTO</h2>
        </Parallax>

        <Parallax bgImageStyle={{ height: '250px', width: '250px', position: 'relative' }} className='second-community community-card'>
            <img src={'./images/pic01.png'} alt='tacos' style={{ height: '225px', width: '225px' }}/>
            <img src={'./icons/instagram-btn.svg'} alt='insta' className='insta-icon' />
        </Parallax>

        <Parallax bgImageStyle={{ height: '250px', width: '250px' }} className='third-community community-card'>
            <div className='community-card-flex'>
            <div style={{ width: '75%' }}>
            <h2 style={{ fontSize: '22px' }}>@buzzfeedfood</h2>
            <p>It’s taco Tuesday! These tacos from @jesseszewc  zyk have no added sugars and are SO good 🌮. Find the recipe from the link in our bio! 📸: @taylormillerphoto</p>
            </div>
            <div className='likes-bottom-card'>
                <img src={'./icons/path80.svg'} alt='messages' />
                <h2>60</h2>
                <img src={'./icons/group126.svg'} alt='likes' />
                <h2>14,7K</h2>
            </div>
            </div>
            
        </Parallax>
        </div>
        </Slide>

        <Slide triggerOnce direction='up' delay='60'>
        <div className='grid-row'>
        <Parallax bgImageStyle={{ height: '250px', width: '250px' }} className='fourth-community community-card'>
            <div className='community-card-flex'>
            <div style={{ width: '75%' }}>
            <h2 style={{ fontSize: '22px' }}>@love_food</h2>
            <p>Waffle sticks in Copenhagen! 🇩🇰😍 Milk chocolate with sprinkles, dark chocolate with coconut and milk chocolate with peanuts! [📷: @foodwithmichel] #lovefood</p>
            </div>
            <div className='likes-bottom-card'>
                <img src={'./icons/path80.svg'} alt='messages' />
                <h2>780</h2>
                <img src={'./icons/group126.svg'} alt='likes' />
                <h2>99,7K</h2>
            </div>
            </div>
            
        </Parallax>

        
        <Parallax bgImageStyle={{ height: '250px', width: '250px', position: 'relative' }} className='fifth-community community-card'>
            <img src={'./images/pic02.png'} alt='waffles' style={{ height: '225px', width: '225px' }}/>
            <img src={'./icons/instagram-btn.svg'} alt='insta' className='insta-icon' />
        </Parallax>
        </div>
        </Slide>

        <Slide triggerOnce direction='up' delay='60'>
        <div className='grid-row'>

        <div style={{ gridColumn: ' 1 / 2', alignSelf: 'center', width: '80%' }}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure.</p>
        </div>

        <Parallax bgImageStyle={{ height: '250px', width: '250px' }} className='seventh-community community-card'>
            <div className='community-card-flex'>
            <div style={{ width: '75%' }}>
            <h2 style={{ fontSize: '22px' }}>@buzzfeedfood</h2>
            <p>Getting into long weekend mode like 🍤 #pancitpalabok (📷 @jeepneynyc)</p>
            </div>
            <div className='likes-bottom-card'>
                <img src={'./icons/path80.svg'} alt='messages' />
                <h2>152</h2>
                <img src={'./icons/group126.svg'} alt='likes' />
                <h2>18,7K</h2>
            </div>
            </div>
            
        </Parallax>

        <Parallax bgImageStyle={{ height: '250px', width: '250px', position: 'relative' }} className='eighth-community community-card'>
            <img src={'./images/pic03.png'} alt='waffles' style={{ height: '225px', width: '225px' }}/>
            <img src={'./icons/instagram-btn.svg'} alt='insta' className='insta-icon' />
        </Parallax>
        </div>
        </Slide>
        </div>
        
            
        </Parallax>
    )
}
