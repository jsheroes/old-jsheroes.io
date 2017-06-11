import Link from 'next/link'
import Section from '../../components/common/section'
import { styles, mediaQueries } from '../../constants'

const ClujsersMain = () => (
  <Section section={{ style: { backgroundColor: styles.mainColor3 } }}>

    <div className="central-container">
      <h5>Who we are</h5>
      <p>
        Cluj JavaScripters was born out of our desire to build one of the
        strongest tech communities in our country and to progress as a group.
        We quickly realized that sharing ideas and knowledge is the greatest
        tool we, as developers, have and that without collaboration between
        us, we have no chances of truly progressing on the long term.
        Today we understand that the best way to bring people with all levels
        of knowledge together is by giving them what they need to advance.
        We organize meetings on the latest technologies as well as trainings
        on basics everyone should know before moving on.
      </p>

      <h5>Our mission</h5>
      <p>
        We’re passionate about what we do and we love sharing knowledge.
        Cluj JavaScripters was born out of common goals for some of us, and
        we take those very seriously. We made them our mission, our statement,
        our code by which we stand.
        Everything we do is built around a couple of central ideas that we
        embrace wholeheartedly and that have become the very foundation on
        which we plan to grow this community.
      </p>

      <p>Those ideas, in short, are:</p>
      <ul>
        <li>Build a stronger JavaScript community</li>
        <li>
          Help others by creating a safe environment focused on learning
          and sharing information
        </li>
        <li>Mentor people, provide trainings, create custom events</li>
        <li>
          Offer a model of collaboration between people from different
          domains or companies
        </li>
        <li>Put Cluj on the map as a JavaScript hub</li>
        <li>Build a community centered around people, not around companies</li>
      </ul>

      <br />
      <h5>
        Are you still curious? To see if we walk our talk, check more about us:
      </h5>

      <ul className="still-curious">
        <li>
          Our <strong>events</strong>, so far, are on
          {' '}
          <Link href="https://www.meetup.com/Cluj-Javascripters/">
            <a target="_blank">Meetup</a>
          </Link>
        </li>

        <li>
          Our <strong>activity reviews</strong> and <strong>
            official About page
          </strong> is on
          {' '}
          <Link href="http://cluj-javascripters.github.io/about">
            <a target="_blank">GitHub</a>
          </Link>
        </li>

        <li>
          As well as our <strong>repo</strong> is on
          {' '}
          <Link href="https://github.com/cluj-javascripters">
            <a target="_blank">GitHub</a>
          </Link>
        </li>

        <li>
          We share the <strong>latest articles</strong> about JS on
          our <strong>group</strong> on
          {' '}
          <Link href="https://www.facebook.com/groups/clujsers/">
            <a target="_blank">Facebook</a>
          </Link>
        </li>

        <li>
          And our <strong>updates</strong> on
          {' '}
          <Link href="https://twitter.com/jsheroes">
            <a target="_blank">Twitter</a>
          </Link>
        </li>

        <li>
          Our <strong>Code of Conduct</strong> is
          {' '}
          <Link href="/code-of-conduct">
            <a target="_blank">here</a>
          </Link>
        </li>
      </ul>
    </div>

    <style jsx>{`
      .central-container {
        position: relative;
        width: 100%;
        padding: 100px 0 140px;
        margin: 0 auto;
        text-align: center;
      }
      
      h5 {
        margin: 0 auto 30px;
        font-size: 28px;
        font-weight: 500;
        color: #111;
        line-height: 32px;
      }

      ul {
        margin: 0 auto 20px;
        padding-left: 40px;
      }
      
      .still-curious {
        list-style-type: none;
        padding: 0;
      }
      
      li {
        font-size: 16px;
        font-weight: 300;
        line-height: 30px;
        margin: 0 auto 10px;
      }
      
      p {
        margin: 0 0 40px;
        font-size: 18px;
        color: ${styles.mainColor7};
        line-height: 32px;
        font-weight: 300;
      }
      
      a {
        color: ${styles.mainColor5};
        fill: ${styles.mainColor5};
      }

      @media (max-width: 479px) { 
        p {
          font-size: 18px;
          line-height: 1.58;
          letter-spacing: -.004em;
        }
      }
      
      @media (max-width: ${mediaQueries.S}) {
        h5 {
          font-size: 26px;
        }
        
        .central-container {
          padding: 50px 0 70px;
        }
        
        p {
          margin-bottom: 20px;
          font-size: 16px;
          line-height: 28px;
        }
      }
      
      @media (min-width: ${mediaQueries.S}) and (max-width: ${mediaQueries.L}) {
        h5 {
          font-size: 30px;
        }
                
        .central-container {
          padding: 60px 0 80px;
        }
        
        p {
          margin-bottom: 10px;
          font-size: 16px;
          line-height: 30px;
        }
        
        .section-padding {
          padding: 70px 0;
        }
      }
      
      @media (min-width: ${mediaQueries.L}) and (max-width: ${mediaQueries.XL}) {
        h5 {
          font-size: 34px;
        }
                
        .central-container {
          padding: 80px 0 100px;
        }
        
        p {
          margin-bottom: 30px;
          font-size: 17px;
          line-height: 30px;
        }
      }

      @media (min-width: ${mediaQueries.L}) {
        .central-container {
          width: 66.7%;
        }
      }

      @media (min-width: ${mediaQueries.XL}) {
        .central-container {
          text-align: left;
        }
      }
    `}</style>
  </Section>
)

module.exports = ClujsersMain
