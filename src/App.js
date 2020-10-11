import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import image1 from './assets/img/image1.png'
import image2 from './assets/img/image2.jpg'
import image3 from './assets/img/image3.jpg'
import image4 from './assets/img/image4.jpg'
import Jumbotron from 'react-bootstrap/Jumbotron'

const App = () => {
  const [calCount, setCalCount] = useState()

  return (
    <div>
      <Jumbotron className='jumbo'>
        <h1>Meal Plan Site</h1>
        <div className='cal-input'>
          <input className='cal-field' type='text' onvalue={calCount}
            placeholder="What's your calorie goal?"
            onChange={event => setCalCount(event.target.value)}/>
        </div>
        <Button variant='outline-light' className="btn" as="input" type="submit" value="Submit" />{' '}
      </Jumbotron>
      <Carousel controls={false} interval={5000} pause={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Feature one</h3>
          <p>Descirbe Feature</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second feature</h3>
          <p>Describe feature</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third feature</h3>
          <p>
            Describe feature
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image4}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Fourth feature</h3>
          <p>
            Describe feature
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
export default App;
