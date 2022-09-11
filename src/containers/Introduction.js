import Carousel from "react-bootstrap/Carousel";

export const Introduction = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={700}>
          <img
            className="d-block w-100"
            height={708}
            src="https://media.istockphoto.com/photos/and-a-concept-yellow-question-mark-glowing-amid-black-question-marks-picture-id1305169776?b=1&k=20&m=1305169776&s=170667a&w=0&h=mpYdh2MzGN_rqxoRNlO5KWGCCq3ZktzSfp-wA0nD9no="
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Interactive Virtual Quiz!</h3>
            <p>A web based virtual quiz you can play anywhere at anytime .</p>
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
            <h3>Various Question Types</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={900}>
          <img
            className="d-block w-100"
            height={708}
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
