import Container from '../components/container'
import { mediaQueries } from '../constants'

const About = () => (
  <Container style={{ minHeight: 800 }}>
    <Style />
    <div id="about" className="about-section section-padding">
      <div className="about-content text-center">
        <h2>About Our Event</h2>
        <p>
          We’re planning for <b>JSHeroes</b> to be the biggest tech Conference in Romania, dedicated solely to JavaScript. We’ll get our engine going with <b>20 international JavaScript experts</b> and we’ve chosen a venue that allows a crowd of up to <b>500 attendees</b>.
        </p>
        <p>
          We kick-started the Cluj JavaScripters community in August 2015.  Since then we’ve grown to <b>900+ members</b> and formed one of the most active knowledge sharing groups worldwide. We organized <b>more than 42 Meetups and Trainings</b> for the JS community in Cluj. So far we <b>partnered with technical conferences</b> to deliver high-quality JS knowledge and held an entire conference track for CodeCamp. What can we say, it was a full-house track and it was brilliant!
        </p>
        <p>
          JSHeroes is one of our dreams and the high point of an active community; we’re truly engaged to see it come true. <b>We know it’s a stretch</b> and it might seem crazy to organize an event of this international scale. We’ve considered all the risks and each of us decided to take personal ownership for it so that our local Cluj JavaScripters community evolves into a <b>global JSHeroes community</b>.
        </p>

      </div>
    </div>
  </Container>
)

const Style = () => (
  <style jsx>{`
    .text-center {
      text-align: center;
    }
    .about-section {
      position: relative;
    }
    .about-content p {
      margin-bottom: 40px;
    }
    .section-padding {
      padding: 140px 0;
    }
    body {
      font-family: Roboto,sans-serif;
    }
    p {
      font-size: 18px;
      color: #555;
      line-height: 32px;
      font-weight: 300;
      margin: 0 0 10px;
    }
    h2 {
      font-size: 54px;
      color: #222;
      font-weight: 700;
      margin: 0 auto 30px;
      line-height: 1.1;
    }
    
  `}</style>
)

module.exports = About
