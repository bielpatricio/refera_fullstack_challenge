import { TableComponent } from './Table'
import { HomeContainer, NewOrderButton, PaginationButton, Line } from './styles'
import { NewOrderModal } from '../../components/NewOrderModal'
import * as Dialog from '@radix-ui/react-dialog'
import { useOrderContext } from '../../contexts/OrdersContext'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

export function Home() {
  const {
    previousPagination,
    nextPagination,
    changePageOfOrders,
    orders,
    total,
  } = useOrderContext()
  return (
    <HomeContainer>
      <Line>
        <h2>Number total of orders: {total}</h2>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewOrderButton>
              <h3>Open new order</h3>
            </NewOrderButton>
          </Dialog.Trigger>

          <NewOrderModal />
        </Dialog.Root>
      </Line>
      <Line>
        <h3>Number por page: 8</h3>
      </Line>
      {total > 0 ? (
        <TableComponent />
      ) : (
        <Line flex={1}>
          <h1>There are still no orders registered in the database</h1>
        </Line>
      )}

      <Line flex={1}>
        {!!previousPagination && (
          <>
            <PaginationButton
              onClick={() => changePageOfOrders(previousPagination)}
            >
              {/* <SkipBackCircle size={32} color="#fff" weight="fill" /> */}
              <ArrowBackIosNewIcon />
            </PaginationButton>
            <p> </p>
          </>
        )}
        {!!nextPagination && (
          <>
            <p> </p>
            <PaginationButton
              onClick={() => changePageOfOrders(nextPagination)}
            >
              {/* <SkipForwardCircle size={32} color="#fff" weight="fill" /> */}
              <ArrowForwardIosIcon />
            </PaginationButton>
          </>
        )}
      </Line>
    </HomeContainer>
  )
}
