import { style, mediaQueries } from '../../constants'

const Section = props => (
  <section style={props.section.style}>
    <div style={props.container.style}>
      <style jsx>{`
      
        div {
          padding: 0 15px;
          margin: 0 auto;
        }
        
        @media (min-width: ${mediaQueries.S}) {
          div {
            width: 738px;
          }
        }
        
        @media (min-width: ${mediaQueries.L}) {
          div {
            width: 962px;
          }
        }
        
        @media (min-width: ${mediaQueries.XL}) {
          div {
            width: 1140px;
          }
        }
        
      `}</style>
      {props.children}
    </div>
  </section>
)

Section.defaultProps = {
  section: {
    style: {}
  },
  container: {
    style: {}
  }
}

module.exports = Section
