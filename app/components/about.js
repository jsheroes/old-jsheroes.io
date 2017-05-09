import ScrollableAnchor from 'react-scrollable-anchor'
import Section from '../components/common/section'
import { styles, mediaQueries } from '../constants'

const About = () => (
  <Section section={{ style: { backgroundColor: styles.mainColor3 } }}>
    <ScrollableAnchor id={'about'}>
      <div>
        <h2>About Our Event</h2>
        <p>
          We’re planning for <strong>JSHeroes</strong> to be the biggest tech
          Conference in Romania, dedicated solely to JavaScript. We’ll get our
          engine going with <strong>
            20 international JavaScript
            experts{' '}
          </strong>and we’ve chosen a venue that allows a crowd of up
          to <strong>500 attendees</strong>.
        </p>

        <p>
          We kick-started the Cluj JavaScripters community in August 2015.
          Since then we’ve grown to <strong>900+ members</strong> and formed
          one of the most active knowledge sharing groups worldwide. We
          organized <strong>more than 42 Meetups and Trainings</strong> for
          the JS community in Cluj. So far we <strong>
            partnered with technical
            conferences{' '}
          </strong> to deliver high-quality JS knowledge and held an
          entire conference track for CodeCamp. What can we say, it was a
          full-house track and it was brilliant!
        </p>

        <p>
          JSHeroes is one of our dreams and the high point of an active
          community; we’re truly engaged to see it come true. <strong>
            We know
            it’s a stretch
          </strong> and it might seem crazy to organize an event
          of this international scale. We’ve considered all the risks and each
          of us decided to take personal ownership for it so that our local
          Cluj JavaScripters community evolves into a <strong>
            global JSHeroes
            community
          </strong>.
        </p>
      </div>
    </ScrollableAnchor>
    <style jsx>{`
      div {
        padding: 140px 0;
      }

      h2 {
        text-align: center;
        font-size: 54px;
        color: ${styles.mainColor4};
        font-weight: 700;
        margin: 0 auto 30px;
      }

      p {
        margin: 0 0 40px;
        font-size: 18px;
        color: #555;
        line-height: 32px;
        font-weight: 300;
        text-align: center;
      }

      @media (max-width: ${mediaQueries.XL}) and (min-width: ${mediaQueries.L}) {
        div {
          padding: 90px 0;
        }
        
        h2 {
          font-size: 46px;
        }
        
        p {
          font-size: 17px;
          line-height: 30px;
          margin-bottom: 30px;
        }
      }

      @media only screen and (max-width: ${mediaQueries.S}) {
        div {
          padding: 80px 0;
        }
        
        h2 {
          font-size: 33px;
        }
        
        p {
          font-size: 16px;
          line-height: 28px;
          margin-bottom: 20px;
        }
      }
    `}</style>
  </Section>
)

module.exports = About
