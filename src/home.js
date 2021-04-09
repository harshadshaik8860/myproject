import React from 'react';
import {Carousel} from 'react-bootstrap';


const Home = () => {


    return (
<section>
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="C:\Users\pandu\Desktop\webdesining\ReactJs\my-app\src\1.jpg"
            height="300"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="C:\Users\pandu\Desktop\webdesining\ReactJs\my-app\src\2.jpg"
            height="300"
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="C:\Users\pandu\Desktop\webdesining\ReactJs\my-app\src\3.jpg"
            height="300"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </section>
    );

}
export default Home;