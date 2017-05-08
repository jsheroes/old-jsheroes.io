import Section from '../components/common/section'
import { styles, mediaQueries } from '../constants'
import Speaker from '../components/speaker/speaker'
import speakerList from '../data/speakers'

let speakersHTML = [];
let speakersRow = [];
for (let i=0; i < speakerList.length; i++) {
  speakersRow.push(
    <div className="speaker-box">
      <Speaker data={speakerList[i]} />
    </div>
  );
  
  if (speakersRow.length == 4 || i == speakerList.length-1) {
    let classes = "row";
    if (speakersRow.length < 4) {
      classes = "row, a-third";
    }
    speakersHTML.push(
      <div className={classes}>
        {speakersRow}
      </div>
    )
    speakersRow = [];
  }
}
const Speakers = () => (

  <Section>
    <div className="section-padding">
      <div className="row, section-header">
        <h2>Our Heroes</h2>
        <p>
          The speakers that joined our mission are experts recognized by global 
          communities. They are people who define our working environment every day. 
          Most of them are for the first time in Romania and they’re really looking 
          forward to our community event!
        </p>
      </div>
      
      {speakersHTML}
    </div>

    <style jsx>{`

      h2 {
        text-align: center;
        font-size: 52px;
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
      
      .row {
        margin-right: -15px;
        margin-left: -15px;
        display: table;
        content: " ";
        width: 100%;
      }
      
      .speaker-box {
        width: 100%;
      }
      @media (min-width: ${mediaQueries.S}) {
        .speaker-box {
          width: 100%;
        }
      }
      
      @media (min-width: ${mediaQueries.XL}) {
        .speaker-box {
          width: 25%;
        }
      }
      .speaker-box {
        display: inline-flex;
      }
      .section-header {
        margin-bottom: 80px;
      }
      .section-padding {
        padding: 140px 0; 
      }
    `}</style>
  </Section>
)

module.exports = Speakers