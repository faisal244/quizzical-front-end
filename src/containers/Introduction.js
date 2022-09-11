import Carousel from "react-bootstrap/Carousel";

export const Introduction = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            height={708}
            src="https://tufnellpark.islington.sch.uk/wp-content/uploads/2021/01/quiz-banner-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Interactive Virtual Quiz!</h3>
            <p>A web based virtual quiz you can play anywhere at anytime .</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            height={708}
            src="https://c1.wallpaperflare.com/preview/653/576/854/question-mark-pile-question-mark.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Intuitive Quiz Builder</h3>
            <p>quiz builder that allows you to choose the questions.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            height={708}
            src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Thousands of people. One Big Quiz.</h3>
            <p>Bring out the competitive spirit</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
