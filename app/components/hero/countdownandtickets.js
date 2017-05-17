import { Component } from 'react'
import Link from 'next/link'
import { styles, mediaQueries } from '../../constants'

const launchDate = new Date('2017-06-08 09:00').getTime()
const cDate = new Date().getTime()
const d = launchDate - cDate

export default class CountDownAndTickets extends Component {
  constructor(props) {
    super(props)

    this.state = {
      x: 0,
      days: Math.floor(d / (1000 * 60 * 60 * 24)),
      hours: Math.floor(d % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
      minutes: Math.floor(d % (1000 * 60 * 60) / (1000 * 60)),
      seconds: Math.floor(d % (1000 * 60) / 1000)
    }
  }

  callX() {
    let _this = this
    let copyX = this.state.x

    this.setState({
      x: setInterval(function() {
        let n = new Date().getTime()
        let d = launchDate - n
        _this.setState({
          days: Math.floor(d / (1000 * 60 * 60 * 24)),
          hours: Math.floor(d % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
          minutes: Math.floor(d % (1000 * 60 * 60) / (1000 * 60)),
          seconds: Math.floor(d % (1000 * 60) / 1000)
        })

        if (d < 0) {
          clearInterval(copyX)
        }

        if (this.location.pathname !== '/') {
          clearInterval(copyX)
        }
      }, 1000)
    })
  }

  componentDidMount() {
    this.callX()
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.seconds != this.state.seconds) {
      this.callX()
    }
  }

  componentWillUnmount() {
    let copyX = this.state.x

    this.setState({
      x: clearInterval(copyX)
    })
  }

  render() {
    return (
      <div className="counter-sec">

        <div className="countdown-counter half-width">
          <div className="timer">
            <div className="countdown styled">

              <div className="countdown-amount" ref="myDay">
                {this.state.days}
                <span className="countdown-period">Days</span>
              </div>

              <div className="countdown-amount" ref="myHour">
                {this.state.hours}
                <span className="countdown-period">Hours</span>
              </div>

              <div className="countdown-amount" ref="myMin">
                {this.state.minutes}
                <span className="countdown-period">Minutes</span>
              </div>

              <div className="countdown-amount" ref="mySec">
                {this.state.seconds}
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
            background: #228dcb;
            color: #fff;
            fill: #228dcb;
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
            position:absolute;
            bottom:0;
            left:0;
            right:0;
            padding:0 15px;
            display: flex;
            align-items: center;
          }
          
          .countdown-comming-soon-label {
            color:#fff;
            margin-bottom: 0;
            line-height: 90px;
            font-size: 32px;
            text-align: center;
          }
          
          .half-width {
            width:50%;
            float:left;
            text-align: center
          }
          
          .coming-timer {
            margin:0 auto;
            background:#161616;
            padding:22px 0;
          }
          
          .countdown-counter {
            margin:0 auto;
            padding:22px 0;
            background:rgba(34,34,34,0.65);
          }
          
          .countdown-amount:after {
            content:"";
            height:100%;
            width:1px;
            background:#444445;
            position:absolute;
            top:0;
            right:-21px;
          }
          
          .countdown-amount:last-child:after {
            margin:0;
            width:0;
          }
          
          .countdown-amount:last-child {
            margin:0;
          }
          
          .countdown-period {
            display:block;
            font-size:17px;
            line-height:1;
            text-align:center;
            font-weight:300;
            margin-top:3px;
            text-transform:capitalize;
          }
          
          .countdown-amount {
            color:#fff;
            font-size:50px;
            font-weight:700;
            display:inline-block;
            list-style:outside none none;
            margin:0 42px 0 auto;
            padding:15px 0;
            text-align:center;
            width:auto;
            position:relative;
            line-height:1;
            vertical-align:middle;
          }
        `}</style>
      </div>
    )
  }
}

module.exports = CountDownAndTickets
