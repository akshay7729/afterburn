import React, { Component } from 'react';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';

const items = [
  {
    src: '/assests/images/shoes/hypervenomWallpaper.jpg',
    altText: '',
    caption: '',
    src0: '/assests/images/shoes/responsive/hypervenomWallpaper0.jpg',
    src480: '/assests/images/shoes/responsive/hypervenomWallpaper480.jpg',
    src768: '/assests/images/shoes/responsive/hypervenomWallpaper768.jpg'
  },
  {
    src: '/assests/images/shoes/adidasPrediator.jpg',
    altText: '',
    caption: '',
    src0: '/assests/images/shoes/responsive/adidasPrediator0.jpg',
    src480: '/assests/images/shoes/responsive/adidasPrediator480.jpg',
    src768: '/assests/images/shoes/responsive/adidasPrediator768.jpg'
  },
  {
    src: '/assests/images/shoes/shoes2.jpg',
    altText: '',
    caption: '',
    src0: '/assests/images/shoes/responsive/shoes0.jpg',
    src480: '/assests/images/shoes/responsive/shoes480.jpg',
    src768: '/assests/images/shoes/responsive/shoes768.jpg'
  }
];

class ABCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >

        <ResponsiveImage className={"abCarouselImg mb-5"}>
          <ResponsiveImageSize
            default
            minWidth={0}
            path={item.src0}
          />
          <ResponsiveImageSize
            default
            minWidth={480}
            path={item.src480}
          />
          <ResponsiveImageSize
            minWidth={768}
            path={item.src768}
          />
          <ResponsiveImageSize
            minWidth={1100}
            path={item.src}
          />
        </ResponsiveImage>

          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default ABCarousel;