import { Table } from './Table'
import { HomeContainer, NewOrderButton } from './styles'
import { NewOrderModal } from '../../components/NewOrderModal'
import * as Dialog from '@radix-ui/react-dialog'

export function Home() {
  return (
    <HomeContainer>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <NewOrderButton>
            <h3>Open new order</h3>
          </NewOrderButton>
        </Dialog.Trigger>

        <NewOrderModal />
      </Dialog.Root>
      <Table />
    </HomeContainer>
  )
}
