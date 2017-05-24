import { style, mediaQueries } from '../constants'

const ScrollBtn = props => (
  <div>
    <div id="back_top" > 
      <a href="#home">
        <i className="fa fa-angle-up"></i>
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
    `}</style>
  </div>
)

module.exports = ScrollBtn