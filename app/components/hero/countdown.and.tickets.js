import { Component } from 'react'
import Link from 'next/link'
import { styles, mediaQueries } from '../../constants'
import time from '../..//utils/helpers'

let interval

export default class CountDownAndTickets extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ms: props.date.ms,
      days: props.date.days,
      hours: props.date.hours,
      minutes: props.date.minutes,
      seconds: props.date.seconds
    }
  }

  componentDidMount() {
    interval = setInterval(() => {
      const newState = time()

      if (interval && newState.ms === 0) {
        clearInterval(interval)
        return
      }

      this.setState(newState)
    }, 1000)
  }

  componentWillUnmount() {
    if (interval) {
      clearInterval(interval)
    }
  }

  render() {
    const { days, hours, minutes, seconds } = this.state

    return (
      <div className="counter-sec">

        <div className="countdown-counter half-width">
          <div className="timer">
            <div className="countdown styled">

              <div className="countdown-amount">
                {days}
                <span className="countdown-period">Days</span>
              </div>

              <div className="countdown-amount">
                {hours}
                <span className="countdown-period">Hours</span>
              </div>

              <div className="countdown-amount">
                {minutes}
                <span className="countdown-period">Minutes</span>
              </div>

              <div className="countdown-amount">
                {seconds}
                <span className="countdown-period">Seconds</span>
              </div>
            </div>
          </div>
        </div>

        <div className="countdown-btn half-width">
          <Link href="/tickets">
            <a className="btn btn-lg tickets-available" target="_blank">
              Tickets Available
            </a>
          </Link>
        </div>

        <style jsx>{`
          .btn.btn-lg {
            padding: 50px 108px;
            margin: auto;
            border: medium none;
            border-radius: 0;
            font-size: 44px!important;
            font-weight: 600!important;
            background: ${styles.mainColor5};
            color: ${styles.mainColor3};
            fill: ${styles.mainColor5};
            line-height: 1;
            text-transform: capitalize;
            -webkit-transition: all .5s linear;
            -ms-transition: all .5s linear;
            -o-transition: all .5s linear;
            transition: all .5s linear;
            display: inline-block;
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;
            touch-action: manipulation;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          
          .countdown-btn .btn:after {
            content: "";
            font-family: fontawesome;
            font-size: 19px;
            margin-left: 20px;
          }
    
          .counter-sec {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 0 15px;
            display: flex;
            align-items: center;
          }
          
          .countdown-comming-soon-label {
            color: ${styles.mainColor3};
            margin-bottom: 0;
            line-height: 90px;
            font-size: 32px;
            text-align: center;
          }
          
          .half-width {
            width: 50%;
            float: left;
            text-align: center;
          }
          
          .coming-timer {
            margin: 0 auto;
            background: ${styles.mainColor2};
            padding: 22px 0;
          }
          
          .countdown-counter {
            margin: 0 auto;
            padding: 22px 0;
            background: rgba(34, 34, 34, .65);
          }
          
          .countdown-amount:after {
            content: "";
            height: 100%;
            width: 1px;
            background: #444445;
            position: absolute;
            top: 0;
            right: -21px;
          }
          
          .countdown-amount:last-child:after {
            margin: 0;
            width: 0;
          }
          
          .countdown-amount:last-child {
            margin: 0;
          }
          
          .countdown-period {
            display: block;
            font-size: 17px;
            line-height: 1;
            text-align: center;
            font-weight: 300;
            margin-top: 3px;
            text-transform: capitalize;
          }
          
          .countdown-amount {
            color: ${styles.mainColor3};
            font-size: 50px;
            font-weight: 700;
            display: inline-block;
            list-style: outside none none;
            margin: 0 42px 0 auto;
            padding: 15px 0;
            text-align: center;
            width: auto;
            position: relative;
            line-height: 1;
            vertical-align: middle;
          }
          
          @media (min-width: ${mediaQueries.S}) {
            .btn.btn-lg {
              font-size: 34px!important;
              font-weight: 300!important;
              padding: 40px 38px;
            }
            .countdown-amount {
            	font-size: 34px;
            	margin: 0 auto;
            	padding: 8px 0;
            	width: 85px;
            }
            .countdown-period {
            	font-size: 16px;
            }
            .countdown-amount::after {
            	right: 0;
            }
          }
          
          @media (min-width: ${mediaQueries.L}) {
            .btn.btn-lg {
            	padding: 50px 58px;
            	font-size: 40px !important;
            	font-weight: 600!important;
            }
            .countdown-amount {
              font-size: 50px;
              margin: 0 42px 0 auto;
              padding: 15px 0;
              width: auto;
            }
            .countdown-amount::after {
              right: -21px;
            }
            .countdown-period {
              font-size: 17px;
            }
          }
          @media (min-width: ${mediaQueries.XL}) {
            .btn.btn-lg {
              font-size: 44px!important;
              font-weight: 600!important;
              padding: 50px 108px;
            }
          }
          @media (max-width: ${mediaQueries.S}) {
            .counter-sec {
              margin: 0 -15px;
              padding: 0;
            	flex-flow: column;
            }
            .half-width {
            	float: none;
            	width: 100%;
            }
            .countdown-amount {
            	font-size: 36px;
            	margin: 0 auto;
            	padding: 8px 0;
            	width: 120px;
            }
            .countdown-period {
            	font-size: 18px;
            }
            .countdown-amount::after {
            	right: 0;
            }
            .btn.btn-lg {
            	font-size: 25px !important;
            	padding: 25px 10px;
            	width: 100%;
            }
            .btn.btn-lg::after {
            	font-size: 24px;
            }
            .countdown-counter {
            	padding: 12px 0;
            }
          }
          @media (max-width:479px) {
            .countdown-amount {
            	font-size: 26px;
            	width: 72px;
            }
            .countdown-period {
            	font-size: 16px;
            }
            .banner-tagline p {
            	font-size: 18px;
            	margin-top: 10px;
            }
            .btn.btn-lg {
            	width: 100%;
            }
          }
          
        `}</style>
      </div>
    )
  }
}

module.exports = CountDownAndTickets
