import React from 'react'
import { Jumbotron} from 'reactstrap';


const txtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 5) || 1000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

txtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
    (this.isDeleting ? this.txt = fullTxt.substring(0, this.txt.length - 1) : this.txt = fullTxt.substring(0, this.txt.length + 1))
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    var that = this;
    var delta = 300 - Math.random() * 100;
    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
        new txtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
};

const MainFold = () => {
    return(
        <div>
            <Jumbotron>
                <h1 className="text-center text-uppercase font-weight-bold jumboHeader pt-5">
                    <span className="txt-rotate" data-period="2000"
                        data-rotate='[ "Welcome to Afterburn", "Get Latest Games"]'>
                    </span>
                </h1>
            </Jumbotron>
        </div>
    )
}

export default MainFold