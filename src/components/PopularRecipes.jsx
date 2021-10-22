import React from 'react'
import { Card } from 'react-bootstrap';
import backArrow from '../back.svg';
import nextArrow from '../next.svg';

export default function PopularRecipes() {


    return (
        <div className='recipes-sect bottom-100' id='recipes'> 
        <div className='flex-row'>
        <div className='uppercase'>
            <h1 className='sub-title'>popular</h1>
            <div className='line-behind'> 
            <h1 className='title'>recipes</h1>
            <hr/>
            </div>
            <button className='rose-btn uppercase'>see all</button>
        </div>

        <div className='uppercase'>
            <h1 className='sub-title'>DO YOU WANT TO SHARE YOUR OWN RECIPE?</h1>
            <button className='rose-btn uppercase'>send it now</button>
        </div> 

        </div>


        <div className='cards-scroll'>
        
        <Card className='big-card' style={{ width: '370px' }}>
            <div variant="top" className='card-big-image'>
            <div className='overlay-img'>
                <div className='overlay-servings'>
                <h1 style={{ fontSize: '50px' }}>4</h1>
                <h2 style={{ fontSize: '22px' }}>Servings</h2>
                </div>
                </div>
                <img className='card-arrow' src='./icons/go-btn.svg' alt='check more' />
            </div>
            <Card.Body className='card-body'>
            <Card.Text>
                <h2 className='uppercase card-sub-title'>Difficulty</h2>
            </Card.Text>
            <Card.Title className='uppercase'><h1 className='main-card-title'>CHARRED BROCCOLI & CHEAT’S VEGGIE ROMESCO TOAST</h1></Card.Title>
            <Card.Text>
            Make a speedy version of romesco sauce with its famous almond and red pepper flavours. Serve on sourdough and add broccoli for a colourful, veget…
            </Card.Text>
        </Card.Body>
        </Card>

        <Card className='md-card' style={{ width: '240px' }}>
            <div variant="top" className='card-md-image'>
            <div className='overlay-img'>
                <div className='overlay-servings'>
                <h1 className='sub-title'>2</h1>
                <h2 style={{ color: '#FFFFFF' }} className='card-sub-title'>Servings</h2>
                </div>
                </div>
                <img className='card-arrow' src='./icons/go-btn.svg' alt='check more' />
            </div>
            <Card.Body className='card-body'>
            <Card.Text>
                <h2 className='uppercase card-sub-title'>Difficulty</h2>
            </Card.Text>
            <Card.Title className='uppercase'><h1 className='main-card-title'>PINEAPPLE FRUIT SALAD WITH FRESH CREAM</h1></Card.Title>
            <Card.Text>
            The pineapple juice is the star of the dressing and what gives it such a refreshing and sweet taste. Pineapple juice is kno
            </Card.Text>
        </Card.Body>
        </Card>

        <Card className='md-card' style={{ width: '240px', alignSelf: 'flex-end' }}>
            <div variant="top" className='card-md-image cheese-bg-image'>
            <div className='overlay-img'>
                <div className='overlay-servings'>
                <h1 className='sub-title'>2</h1>
                <h2 style={{ color: '#FFFFFF' }} className='card-sub-title'>Servings</h2>
                </div>
                </div>
                <img className='card-arrow' src='./icons/go-btn.svg' alt='check more' />
            </div>
            <Card.Body className='card-body'>
            <Card.Text>
                <h2 className='uppercase card-sub-title'>Difficulty</h2>
            </Card.Text>
            <Card.Title className='uppercase'><h1 className='main-card-title'>CHEESE, SPINACH & MUSHROOM STUFFED CHI…</h1></Card.Title>
            <Card.Text>
            Amp up this dinner party classic by stuffing three types of cheese, spinach and mushroom into the chicken…
            </Card.Text>
        </Card.Body>
        </Card>

        <Card className='md-card' style={{ width: '240px' }}>
            <div variant="top" className='card-md-image couscous-bg-image'>
            <div className='overlay-img'>
                <div className='overlay-servings'>
                <h1 className='sub-title'>8</h1>
                <h2 style={{ color: '#FFFFFF' }} className='card-sub-title'>Servings</h2>
                </div>
                </div>
                <img className='card-arrow' src='./icons/go-btn.svg' alt='check more' />
            </div>
            <Card.Body className='card-body'>
            <Card.Text>
                <h2 className='uppercase card-sub-title'>Difficulty</h2>
            </Card.Text>
            <Card.Title className='uppercase'><h1 className='main-card-title'>FETA AND PEACH COUSCOUS</h1></Card.Title>
            <Card.Text>
            Grab just four ingredients to make this easy, light lunch and enjoy a taste of summer. The combination of peaches, feta...
            </Card.Text>
        </Card.Body>
        </Card>

        <Card className='md-card' style={{ width: '240px' }}>
            <div style={{ backgroundPosition: 'right top'}} variant="top" className='card-md-image couscous-bg-image'>
            <div className='overlay-img'>
                <div className='overlay-servings'>
                <h1 className='sub-title'>8</h1>
                <h2 style={{ color: '#FFFFFF' }} className='card-sub-title'>Servings</h2>
                </div>
                </div>
                <img className='card-arrow' src='./icons/go-btn.svg' alt='check more' />
            </div>
            <Card.Body className='card-body'>
            <Card.Text>
                <h2 className='uppercase card-sub-title'>Difficulty</h2>
            </Card.Text>
            <Card.Title className='uppercase'><h1 className='main-card-title'>FETA AND PEACH COUSCOUS</h1></Card.Title>
            <Card.Text>
            Grab just four ingredients to make this easy, light lunch and enjoy a taste of summer. The combination of peaches, feta...
            </Card.Text>
        </Card.Body>
        </Card>

        </div>
        
        <div style={{ justifyContent: 'flex-end', gap: '20px'}} className='flex-row' >
            <img src={backArrow} alt='back arrow' />
            <img src={nextArrow} alt='next arrow' />           
        </div>
        </div>
    )
}
