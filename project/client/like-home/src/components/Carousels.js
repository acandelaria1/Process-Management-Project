import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap'
import '../stylesheets/Carousels.scss'

class Carousels extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
      }

      onIncrementClick = () => {
        this.setState(this.increment);
      }

      increment(state) {
        return { ...state, counter: state.counter + 1 };
      }

    render() {
        return (
            <Carousel>
            <Carousel.Item>
              <img width={900} height={500}  src="https://s-ec.bstatic.com/images/hotel/max1024x768/427/42752845.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={500}  src="https://www.paradiseview.gr/img/home/03paradiseviewhotel-mykonos.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={500}  src="https://cdn.cnn.com/cnnnext/dam/assets/160506135321-hong-kong-hotel-park-lane-super-169.jpg" />
            </Carousel.Item>
          </Carousel>
        );
    }
}

export default Carousels;