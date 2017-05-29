import Link from 'next/link'
import { style, mediaQueries } from '../constants'

const Tickets = props => (
  <div>
    <div id="tickets_info">
      <div className="half-section">
        <div className="column-inner">
          <div className="conference-content-box">
            <div style={{ minHeight: '240px' }}>
              <h2>Join Us!</h2>
              <p>
                We like to think that we’re all junior developers, for life.
              </p>
              <br />
              <p>
                We’re working on all the details of the event to make sure that, however extended your knowledge is right now, you’ll get the best possible learning experience!
              </p>
              <br />
              <p>Want a new superpower?  Buy your ticket today!</p>
            </div>
            <br />
            <div>
              <Link href="/tickets">
                <a id="tickets_btn" style={{ fontSize: '30px' }}>TICKETS</a>
              </Link>
              <br />
              <br />
              <p><small>*this event is non-profit</small></p>
            </div>
          </div>
        </div>
        <div className="section-conference-bg meetup-bg-img" />
        <div className="dark-overlay" />
      </div>
      <div className="half-section">
        <div className="column-inner">
          <div className="conference-start-box">
            <h4>JSHeroes Tickets Info</h4>
            <br />
            <p>
              <span>
                <b>
                  The Early and the Reasonably Early Bird Tickets are sold out.
                </b>
              </span>
              <br />
              <br />
              <span>
                If you’re a group of 5 or more, contact us for a group discount.
              </span>
            </p>
            <br />
            <p>As you might expect, each ticket includes:</p>
            <ul>
              <li>2 days fully packed with high-class JS talks,</li>
              <li>
                premium catering lunch on both days (vegan options available) and coffee breaks
              </li>
            </ul>
            <p>
              The meetup with the speakers, on June 7th, is not included in any of the conference ticket price. For that, follow the updates and RSVP on the Cluj JavaScripters group from Meetup.com
              {' '}
            </p>
          </div>
        </div>
        <div className="section-conference-bg rocket-bg-img" />
        <div className="blue-bg" />
      </div>
    </div>
    <style jsx>{`
      #tickets_info {
        position: relative;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        color: #fff;
        background-color: #222;
      }
      #tickets_info .half-section {
        display: flex;
        padding: 90px 0;
        width: 100%;
        float: left;
        position: relative;
        min-height: 1px;
        box-sizing: border-box;
      }
      .meetup-bg-img {
        background-image: url(../../static/img/apply_as_a_participant.png);
      }
      .rocket-bg-img {
        background-image: url(../../static/img/apply_as_a_speaker.png);
      }
      .section-conference-bg {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
      }
      #tickets_info .dark-overlay {
        background: hsla(0,0%,0%,.78) none repeat scroll 0 0;
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: inherit;
      }
      .column-inner {
        display: block;
        width: 100%;
        z-index: 2;
        box-sizing: border-box;
      }
      .conference-content-box {
        padding: 0 10%;
        text-align: right;
        overflow: hidden;
        box-sizing: border-box;
      }
      #tickets_info h2 {
        font-size: 46px;
        font-weight: 700;
        margin: 0 auto 30px;
        line-height: 1.1;
      }
      #tickets_info p {
        font-size: 18px;
        line-height: 32px;
        font-weight: 300;
        margin: 0 0 10px;
      }
      #tickets_info ul {
        margin: 0 auto 20px;
        padding-left: 40px;
      }
      #tickets_info li {
        font-size: 16px;
        font-weight: 300;
        line-height: 30px;
        margin: 0 auto 10px;
      }
      #tickets_btn {
        user-select: none;
        touch-action: manipulation;
        cursor: pointer;
        display: inline-block;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        color: #fff;
        -webkit-transition: all .5s linear;
        text-transform: capitalize;
        margin: auto;
        border-radius: 0;
        background: rgba(0,0,0,0) none repeat scroll 0 0;
        border: 5px solid #fff;
        font-weight: 600!important;
        line-height: 53px;
        padding: 10px 48px;
      }
      #tickets_btn:hover {
        border-color: #157cb8;
        background-color: #157cb8;
      }
      #tickets_info .blue-bg {
        background: #0098FF!important;
        fill: #0098FF!important;
        content: "";
        height: 100%;
        left: 0;
        opacity: .85;
        position: absolute;
        top: 0;
        transition: all .5s linear 0s;
        width: 100%;
        z-index: inherit;
      }
      .conference-start-box {
        overflow: hidden;
        position: relative;
        z-index: 1;
        padding: 0 10%;
        text-align: left;
      }
      .conference-start-box h4 {
        font-size: 36px;
        font-weight: 700;
        margin: 0 auto 30px;
        line-height: 1.1;
      }
      #tickets_info small {
        font-size: 85%;
      }
      @media (min-width: ${mediaQueries.S}) {
        #tickets_btn {
          line-height: 44px;
          padding: 10px 40px;
        }
      }
      @media (min-width: ${mediaQueries.L}) {
        #tickets_info .half-section {
          width: 50%;
        }
        #tickets_btn {
          line-height: 60px;
          padding: 15px 60px;
        }
      }
      @media (min-width: ${mediaQueries.XL}) {
        #tickets_info .half-section {
          padding: 140px 0;
        }
        #tickets_info h2 {
          font-size: 54px;
        }
      }
    `}</style>
  </div>
)

module.exports = Tickets
