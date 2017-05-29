import CompMain from '../app/components/main'
import NewsletterHero from '../app/components/newsletter'
import NewsletterMain from '../app/components/newsletter/newsletter.main'
import Contact from '../app/components/contact'
import ScrollBtn from '../app/components/scroll-btn'

const NewsletterPage = props => (
  <CompMain>
    <NewsletterHero />
    <NewsletterMain />
    <Contact newsletter={true} />
    <ScrollBtn />
  </CompMain>
)

export default NewsletterPage