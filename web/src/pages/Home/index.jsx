import { TableComponent } from './Table'
import { HomeContainer, NewOrderButton, PaginationButton, Line } from './styles'
import { NewOrderModal } from '../../components/NewOrderModal'
import * as Dialog from '@radix-ui/react-dialog'
import { useOrderContext } from '../../contexts/OrdersContext'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

export function Home() {
  const { total } = useOrderContext()
  return (
    <HomeContainer>
      <Line>
        <h2>Total of orders: {total}</h2>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewOrderButton>
              <h3>Open new order</h3>
            </NewOrderButton>
          </Dialog.Trigger>

          <NewOrderModal />
        </Dialog.Root>
      </Line>
      {total > 0 ? (
        <TableComponent />
      ) : (
        <Line flex={1}>
          <h1>There are still no orders registered in the database</h1>
        </Line>
      )}
    </HomeContainer>
  )
}
