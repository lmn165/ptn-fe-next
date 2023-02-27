import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function CarouselIndex() {
  return (
    <>
      <Carousel autoPlay={true} infiniteLoop={true}>
        <div>텍스트 01</div>
        <div>텍스트 02</div>
      </Carousel>
    </>
  );
}
