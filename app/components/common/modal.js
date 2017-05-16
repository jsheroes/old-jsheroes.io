import { style, mediaQueries } from '../../constants'

const Modal = (props) => (
  <div>
    <Style />
    <div className="modal-backdrop fade in"></div>
    <div id="speaker-info" className="modal fade in" role="dialog" style={{display: 'block', paddingRight: '17px'}}>
      <div className="modal-dialog"> 
          <div className="modal-close-button" data-dismiss="modal" aria-label="Close"><i className="fa fa-window-close-o"></i></div>
    
          <div className="modal-content padding_4x4_40">
            {props.children}
          </div>
      </div>
    </div>
  </div>
)

const Style = () => (
  <style jsx>{`
    .modal-backdrop {
      opacity: .5;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1040;
      background-color: #000;
      transition: opacity .15s linear;
    }
    #speaker-info {
      text-align: start;
      z-index: 99999;
      overflow-x: hidden;
      overflow-y: auto;
      opacity: 1;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1050;
      display: none;
      overflow: hidden;
      outline: 0;
      transition: opacity .15s linear;
    }
    .modal-dialog {
      width: 600px;
      margin: 30px auto;
    }
    .modal-close-button {
      width: 36px;
      height: 36px;
      color: #000;
      font-size: 36px;
      line-height: 36px;
      text-align: center;
      position: absolute;
      top: 0;
      right: 3px;
      z-index: 5;
      cursor: pointer;
    }
    .modal-content {
      border-radius: 0;
      padding: 40px;
      position: relative;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid rgba(0,0,0,.2);
      outline: 0;
      box-shadow: 0 5px 15px rgba(0,0,0,.5);
    }
    #speaker-info .speaker-sec {
      max-width: 360px;
      margin: auto;
      text-align: center;
    }
  `}</style>
)

module.exports = Modal