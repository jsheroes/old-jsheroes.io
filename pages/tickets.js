import CompMain from '../app/components/main'
import CompTickets from '../app/components/tickets'

const TicketsPage = props => (
  <CompMain tickets={true}>
    <CompTickets />
  </CompMain>
)

export default TicketsPage