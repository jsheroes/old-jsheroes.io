import CompMain from '../app/components/main'
import Section from '../app/components/section'
import Link from 'next/link'

export default () => (
  <CompMain>
    <style jsx>{`
      
      p {
        height: 800px;
      }
      
    `}</style>
    <h1>My Blog is cool ---</h1>
    <p>test</p>
    <Section> 
      <div>I'm a section</div>
    </Section>
  </CompMain>
)
