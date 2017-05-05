const maxLineHeight = '100px'
const minLineHeight = '60px'

const style = () => (
  <style jsx>
    {`

    ul {
      display: inline-block;
    }
    
    nav {
      background-color: black;
      position: absolute;
      top: 0;
      z-index: 1;
    }
    
    img {
      display: inline-block;
      vertical-align: middle;
      padding-bottom: 12px;
      margin: 0 30px;
      -webkit-transform: scale(0.8); /* Saf3.1+, Chrome */
       -moz-transform: scale(0.8); /* FF3.5+ */
        -ms-transform: scale(0.8); /* IE9 */
         -o-transform: scale(0.8); /* Opera 10.5+ */
            transform: scale(0.8);
    }
    
    li {
      display: block;
      margin-right: 30px;
      display: inline-block;
      line-height: ${maxLineHeight}
    }
  
    a {
      text-transform: capitalize;
      color: white;
      font-size: 18px;
      font-weight: 300;
    }
    
    @media (max-width: 991px) {
      img {
        display: none;
      }
      
      a {
        font-size: 16px;
      }
      
      li {
        margin-right: 20px;
        line-height: ${minLineHeight}
      }
      
      ul {
        width: 100%;
        text-align: center;
      }
    }
      
  `}
  </style>
)

module.exports = style
