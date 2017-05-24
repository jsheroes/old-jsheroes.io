import CompMain from '../app/components/main'
import NewsletterHero from '../app/components/newsletter'
import NewsletterMain from '../app/components/newsletter/newsletter.main'
import Contact from '../app/components/contact'

const NewsletterPage = props => (
  <CompMain>
    <NewsletterHero />
    <NewsletterMain />
    <Contact newsletter={true} />
  </CompMain>
)

export default NewsletterPage