import { Table } from './Table'
import { HomeContainer, NewOrderButton, PaginationButton, Line } from './styles'
import { NewOrderModal } from '../../components/NewOrderModal'
import * as Dialog from '@radix-ui/react-dialog'
import { useOrderContext } from '../../contexts/OrdersContext'
import { SkipBackCircle, SkipForwardCircle } from 'phosphor-react'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

export function Home() {
  const { previousPagination, nextPagination, changePageOfOrders, total } =
    useOrderContext()
  return (
    <HomeContainer>
      <Line>
        <h1>Number total of orders: {total}</h1>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewOrderButton>
              <h3>Open new order</h3>
            </NewOrderButton>
          </Dialog.Trigger>

          <NewOrderModal />
        </Dialog.Root>
      </Line>
      <Table />
      <Line flex={1}>
        <p> </p>
        <ArrowForwardIosIcon />
        {!!previousPagination && (
          <>
            <PaginationButton
              onClick={() => changePageOfOrders(previousPagination)}
            >
              <SkipBackCircle size={32} color="#fff" weight="fill" />
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
              <SkipForwardCircle size={32} color="#fff" weight="fill" />
            </PaginationButton>
          </>
        )}
      </Line>
    </HomeContainer>
  )
}
