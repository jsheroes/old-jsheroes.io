import { Component } from 'react'
import { style, mediaQueries } from '../constants'

class ScrollBtn extends Component {
  componentDidMount() {
    window.onscroll = function(){
      const button = document.getElementById('back_top')
      if (!button.classList.contains("hide") && document.body.scrollTop < 900) {
        button.classList.add('hide')
      }
      else if (button.classList.contains("hide") && document.body.scrollTop >= 900) {
        button.classList.remove('hide')
      }
    }
    window.onscroll()
  }

  render() {
    return (

    <div>
      <div id="back_top">
        <a href="#home">
          <i className="fa fa-angle-up" />
        </a>
      </div>
      <style jsx>{`
        #back_top {
          bottom: 20px;
          position: fixed;
          right: 30px;
          z-index: 3;
          box-sizing: border-box;
          display: block;
        }
        #back_top a {
          background: #000 none repeat scroll 0 0;
          border-radius: 0;
          color: #fff;
          display: block;
          font-size: 31px;
          height: 52px;
          line-height: 52px;
          text-align: center;
          vertical-align: top;
          width: 52px;
          text-decoration: none;
          box-sizing: border-box;
          opacity: 1;
          transition: opacity .4s;
        }
        #back_top a:hover {
          opacity: .57;
          color: #228dcb;
          fill: #228dcb;
          text-decoration: none;
          outline: 0;
        }
        #back_top i {
          display: inline-block;
          font: normal normal normal 14px/1 FontAwesome;
          font-size: inherit;
          text-rendering: auto;
          -webkit-font-smoothing: antialiased;
        }
        #back_top.hide a {
          opacity: 0;
        }
      `}</style>
    </div>
    )
  }
}

module.exports = ScrollBtn
