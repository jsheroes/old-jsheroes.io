import { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import Section from '../../components/common/section'
import { styles, mediaQueries } from '../../constants'
import speakers from '../../data/speakers'
import Speaker from './speaker'
import ReactDOM from 'react-dom'
import Modal from '../../components/common/modal'

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
  let speakerRedirect = document.getElementsByClassName('speaker-hover')
  for (let i = 0; i < speakerRedirect.length; i++) {
    speakerRedirect[i].addEventListener('click', function() {
      openModal(i)
    })
  }
}

function openModal(index) {
  const newModal = (
    <Modal>
      <p>Hello world {index}</p>
    </Modal>
  )

  console.log('speaker number', index)
  var modalContainer = document.createElement('div')
  document.body.appendChild(modalContainer)
  ReactDOM.render(newModal, modalContainer)
  var backdrop = document.getElementById('speaker-info')
  document.body.style.overflow = 'hidden'
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
            <div id="modal_container" />
            <div className="section-padding">
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
    .section-padding {
      padding: 80px 0; 
    }
    .section-header {
      margin-bottom: 45px;
      padding-right: 15px;
      padding-left: 15px;
    }
    .section-header h2 {
      text-align: center;
      font-size: 33px;
      color: ${styles.mainColor4};
      font-weight: 700;
      margin: 0 auto 30px;
    }
    .section-header p {
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

    @media (max-width: ${mediaQueries.XL}) and (min-width: ${mediaQueries.L}) {
      section-padding {
        padding: 90px 0;
      }
      .section-header h2 {
        font-size: 46px;
      }
      .section-header p {
        font-size: 17px;
        line-height: 30px;
        margin-bottom: 30px;
      }
    }

    @media only screen and (max-width: ${mediaQueries.S}) {
      section-padding {
        padding: 80px 0;
      }
      .section-header h2 {
        font-size: 33px;
      }
      .section-header p {
        font-size: 16px;
        line-height: 28px;
        margin-bottom: 20px;
      }
    }
    
    .row {
      display: table;
      width: 100%;
    }
    
    .speaker-box {
      width: 100%;
      display: inline-flex;
    }
    @media (min-width: ${mediaQueries.S}) {
      .speaker-box {
        width: 50%
      }
    }
    @media (min-width: ${mediaQueries.L}) {
      section-padding {
        padding: 90px 0;
      }
      .section-header h2 {
        font-size: 46px;
      }
      .section-header p {
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
      .section-padding {
        padding: 140px 0; 
      }
      .section-header h2 {
        font-size: 52px;
      }
      .section-header p {
        font-size: 18px;
        line-height: 32px;
        margin-bottom: 40px;
      }
    }
  `}</style>
)

module.exports = Speakers
