import React from 'react';
import { Slide } from 'react-awesome-reveal';

export default function Menu() {

    return (
        <div className='menu-container bottom-100' id='menu'>
            <div style={{ textAlign: 'center' }} className='uppercase'>
            <div className='line-behind'>            
            <h1 className='title'>OUR MENU</h1>
            <hr/>
            </div>
            <button className='rose-btn uppercase'>know more</button>
            </div>

            <div className='flex-row'>

            
            <Slide triggerOnce direction='down' duration='1200' >
                <div className='menu-tab'>
                <h1 className='title uppercase'>Starters</h1>
                <div className='menu-dish'>
                <h2 style={{ fontSize: '14px'}}>QUINOA CROQUETTAS</h2>
                <p>Quinoa and cheddar croquettas with aji rocotto & pineapple salsa (v)</p>
                <h2 className='price-border' style={{ fontSize: '14px'}}>£4.95</h2>
                </div>

                <div className='menu-dish'>
                <h2 style={{ fontSize: '14px'}}>CHIFA CHICHARRONES</h2>
                <p>Slow cooked, crispy pork belly with sweet soy sauce</p>
                <h2 className='price-border' style={{ fontSize: '14px'}}>£6.95</h2>
                </div>

                <div className='menu-dish'>
                <h2 style={{ fontSize: '14px'}}>CALAMARES</h2>
                <p>Crispy baby squid with pickled jalapeño miso salsa</p>
                <h2 className='price-border' style={{ fontSize: '14px'}}>£6.95</h2>
                </div>

                </div>
            </Slide>
            <Slide triggerOnce direction='up' duration='1200' >
                <div className='menu-tab'>

                <h1 style={{ width: '50%', alignSelf: 'flex-start', paddingLeft: '40px'}} className='title uppercase'>MAIN COURSES</h1>
                <div className='menu-dish'>
                <h2 style={{ fontSize: '14px'}}>EL CLASICO</h2>
                <p>Sea bass ceviche with aji limo tiger’s milk, sweet potato purée, choclo corn, red onion, coriander & plantain (gf)</p>
                <h2 className='price-border' style={{ fontSize: '14px'}}>£8.95</h2>
                </div>

                <div className='menu-dish'>
                <h2 style={{ fontSize: '14px'}}>TIRADITO CALLAO</h2>
                <p>Cobia tiradito with coriander tiger’s milk, black tobika, crème fraiche & sweet potato crunchies</p>
                <h2 className='price-border' style={{ fontSize: '14px'}}>£8.95</h2>
                </div>

                </div>
            </Slide>
            
            <Slide triggerOnce direction='up' duration='500'>
                <div style={{ alignSelf: 'center' }} className='menu-tab'>

                <h1 style={{ alignSelf: 'flex-start' }} className='title uppercase'>sides</h1>
                <div className='menu-dish'>
                <h2 style={{ fontSize: '14px'}}>SUPER POLLO</h2>
                <p>Marinated corn fed chicken pieces with rocotto salsa</p>
                <h2 className='price-border' style={{ fontSize: '14px'}}>£4.95</h2>
                </div>

                <div className='menu-dish'>
                <h2 style={{ fontSize: '14px'}}>PATATAS FRITAS</h2>
                <p>Sweet potato fries with aji rocotto mayonnaise (v) </p>
                <h2 className='price-border' style={{ fontSize: '14px'}}>£3.95</h2>
                </div>

                </div>
            </Slide>
            <Slide triggerOnce direction='down' duration='1200' >    
                <div style={{ alignSelf: 'flex-start', paddingTop: '40px' }} className='menu-tab'>

                <h1 className='title uppercase'>DESSERTS</h1>
                <div className='menu-dish'>
                <h2 style={{ fontSize: '14px'}}>ICECREAM</h2>
                <p>Lorem ipsum dolor sit amet salerma petrum sea</p>
                <h2 className='price-border' style={{ fontSize: '14px'}}>£3.95</h2>
                </div>

                <div className='menu-dish'>
                <h2 style={{ fontSize: '14px'}}>TIRAMISU</h2>
                <p>Lorem ipsum dolor sit amet salerma petrum sea</p>
                <h2 className='price-border' style={{ fontSize: '14px'}}>£3.95</h2>
                </div>

                <div className='menu-dish'>
                <h2 style={{ fontSize: '14px'}}>CHOCOLATE BROWNIE</h2>
                <p>Lorem ipsum dolor sit amet salerma petrum sea</p>
                <h2 className='price-border' style={{ fontSize: '14px'}}>£3.95</h2>
                </div>

                </div>
                </Slide>
            </div>
        </div>
    )
}
