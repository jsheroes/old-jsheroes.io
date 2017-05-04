const style = () => (
  <style jsx>
    {`

  ul {
    min-height: 100px;
    display: inline-block;
  }
  
  nav {
    background-color: black;
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
    line-height: 100px;
  }

  a {
    text-transform: capitalize;
    color: white;
    font-size: 18px;
    font-weight: 300;
  }
      
  `}
  </style>
)

module.exports = style
