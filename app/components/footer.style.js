import { styles } from '../constants'

const FooterStyle = () => (
  <style jsx>
    {`
    
    .the-footer {
      background-color: ${styles.mainColor2};
      text-align: center;
    }
    
    .contact-us {
      padding: 140px 0 30px;
      background-color: ${styles.mainColor4};
      text-align: center;
    }
    
    .footer-social-tab {
      background-color: ${styles.mainColor4};
      padding-bottom: 80px;
      overflow: hidden;
      position: relative;
      text-align: center;
    }
      
    .the-ul {
      margin: 0;
      padding: 0;
    }
      
    .the-li {
      display: inline-block;
      list-style: outside none none;
      vertical-align: middle;
      font-size: 16px;
      font-weight: 300;
      line-height: 30px;
      margin: 0 auto 10px;
    }
      
    .the-anchors {
      border: 1px solid #5a5858;
      border-radius: 50%;
      color: #fff;
      display: block;
      font-size: 35px;
      height: 80px;
      line-height: 80px;
      margin: 0 22px;
      width: 80px;
      transition-duration: .5s;
    }
      
    .the-anchors:hover {
      color: #228dcb;
      fill: #228dcb;
      border-color: #0098FF;
    }
  

    .the-li, .the-h2, .the-p {
      color: white;
    }
    
    .the-h2 {
      padding-bottom: 0;
      margin: 0 auto 30px;
      font-size: 54px;
      font-weight: 700;
      line-height: 1.1;
    }
    
    .the-p {
      margin: 0 0 10px;
      font-size: 18px;
      line-height: 32px;
      font-weight: 300;
    }
    
  `}
  </style>
)

module.exports = FooterStyle
