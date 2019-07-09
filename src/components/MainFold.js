import React, {Component} from 'react'
import ABCarousel from './ABCarousel'
import MobileCards from './MobileCards'

class MainFold extends Component{

    constructor(props){
        super(props)

        this.state = {
            width : window.innerWidth
        }
    }

    componentWillMount(){
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({
            width : window.innerWidth
        })
    }

    render(){

        const {width} = this.state;
        const isMobile = width <= 767;

        if(isMobile){
            return(
                <MobileCards />
            )
        }else{
            return(
                <ABCarousel />
            )
        }
    }
}

export default MainFold