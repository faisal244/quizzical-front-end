import Carousel from "react-bootstrap/Carousel";

export const Introduction = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={900}>
          <img
            className="d-block w-100"
            height={708}
            src="https://images.pexels.com/photos/333850/pexels-photo-333850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>This is the first slide!</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={900}>
          <img
            className="d-block w-100"
            height={708}
            src="https://media.istockphoto.com/photos/yellow-question-mark-on-a-background-of-black-signs-faq-concept-picture-id1308986719?b=1&k=20&m=1308986719&s=170667a&w=0&h=-vJ0pQHGn5CZcvzETX6PhRQ8I30z5--gNR93BDFVgxo="
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
