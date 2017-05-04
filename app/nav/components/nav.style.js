const style = () => (
  <style>
    {`

  ul {
    min-height: 100px;
  }
  
  nav {
    background-color: black;
  }
  
  img {
    display: table-cell;
    vertical-align: middle;
    float: left;
  }
  
  li {
    display: block;
    margin-right: 20px;
    display: inline-block;
    line-height: 100px;
  }

  a {
    text-transform: capitalize;
    color: white;
    font-size: 18px;
  }
      
  `}
  </style>
)

module.exports = style
