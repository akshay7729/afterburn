import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/style.css';

const options = {
    items: 3,
    nav: true,
    rewind: true,
    autoplay: true
};
 
// const events = {
//     onDragged: function(event) {...},
//     onChanged: function(event) {...}
// };

class OWLCAROUSEL extends Component{
    render(){
        return(
            <OwlCarousel ref="car" options={options} >
                <div><img src="/assests/images/shoes/hypervenomWallpaper.jpg" alt="The Last of us"/></div>
                <div><img src="/assests/images/shoes/adidasPrediator.jpg" alt="GTA V"/></div>
                <div><img src="/assests/images/shoes/shoes2.jpg" alt="Mirror Edge"/></div>
            </OwlCarousel>
        )
    }
}

export default OWLCAROUSEL