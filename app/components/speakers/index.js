import { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import Section from '../common/section'
import { styles, mediaQueries } from '../../constants'
import speakers from '../../data/speakers'
import Speaker from './speaker'
import ReactDOM from 'react-dom'
import Speakermodal from './speaker.modal'

let speakersHTML = []
let speakersRow = []


speakers.map((speaker, key) => {
  speakersRow.push(
    <div key={key.toString()} className="speaker-box">
      <Speaker data={speaker} />
    </div>
  )

  if (speakersRow.length === 4 || key === speakers.length - 1) {
    speakersHTML.push(
      <div
        key={key.toString()}
        className={`row ${speakersRow.length < 4 ? 'a-third' : ''}`}
      >
        {speakersRow}
      </div>
    )
    speakersRow = []
  }
})

function addClickEvents() {
  let speakerRedirect = document.getElementsByClassName('speaker-sec');
  for (let i = 0; i < speakerRedirect.length; i++) {
    speakerRedirect[i].addEventListener('click', function() {
      openModal(i)
    })
  }
}

function openModal(index) {
  const newModal = <Speakermodal data={speakers[index]} />

  let modalContainer = document.createElement('div')
  document.body.appendChild(modalContainer)
  ReactDOM.render(newModal, modalContainer)
  let backdrop = document.getElementsByClassName('modal-backdrop')[0]
  let closeBtn = document.getElementsByClassName('modal-close-button')[0]
  document.body.style.overflow = "hidden"
  closeBtn.addEventListener('click', function() {
    document.body.style.overflow = ''
    modalContainer.remove()
  })
  backdrop.addEventListener('click', function() {
    document.body.style.overflow = ''
    modalContainer.remove()
  })
}

class Speakers extends Component {
  componentDidMount() {
    addClickEvents()
  }

  render() {
    return (
      <Section>
        <ScrollableAnchor id={'speakers'}>
          <div>
            <Style />
            <div id="speakers_section" className="section-padding">
              <div className="row, section-header">
                <h2>Our Heroes</h2>
                <p>
                  The speakers that joined our mission are experts recognized by global
                  communities. They are people who define our working environment every day.
                  {' '}
                  Most of them are for the first time in Romania and they’re really looking
                  {' '}
                  forward to our community event!
                </p>
              </div>
              {speakersHTML}
            </div>
          </div>
        </ScrollableAnchor>
      </Section>
    )
  }
}

const Style = () => (
  <style jsx>{`
    #speakers_section.section-padding {
      padding: 80px 0; 
    }
    #speakers_section .section-header {
      margin-bottom: 45px;
      padding-right: 15px;
      padding-left: 15px;
    }
    #speakers_section .section-header h2 {
      text-align: center;
      font-size: 33px;
      color: ${styles.mainColor4};
      font-weight: 700;
      margin: 0 auto 30px;
    }
    #speakers_section .section-header p {
      width: 98%;
      margin-bottom: 20px;
      font-size: 16px;
      color: #555;
      line-height: 28px;
      font-weight: 300;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }
    #speakers_section .row {
      display: table;
      width: 100%;
    }
    .speaker-box {
      width: 100%;
      display: inline-flex;
    }
    @media (min-width: ${mediaQueries.S}) {
      #speakers_section.section-padding {
        padding: 80px 0;
      }
      #speakers_section .section-header h2 {
        font-size: 33px;
      }
      #speakers_section .section-header p {
        font-size: 16px;
        line-height: 28px;
        margin-bottom: 20px;
      }
      .speaker-box {
        width: 50%
      }
    }
    @media (min-width: ${mediaQueries.L}) {
      #speakers_section.section-padding {
        padding: 90px 0;
      }
      #speakers_section .section-header h2 {
        font-size: 46px;
      }
      #speakers_section .section-header p {
        font-size: 17px;
        line-height: 30px;
        margin-bottom: 30px;
      }
    }
    @media (min-width: ${mediaQueries.XL}) {
      .speaker-box {
        width: 25%
      }
      .a-third .speaker-box {
        width: 33.33333333%
      }
      #speakers_section.section-padding {
        padding: 140px 0; 
      }
      #speakers_section .section-header h2 {
        font-size: 52px;
      }
      #speakers_section .section-header p {
        font-size: 18px;
        line-height: 32px;
        margin-bottom: 40px;
      }
    }
  `}</style>
)

module.exports = Speakers
