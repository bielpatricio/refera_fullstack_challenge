import { useEffect } from 'react'
import { useOrderContext } from '../../contexts/OrdersContext'
import {
  CardContainer,
  Container,
  Field,
  OrderDetailContainer,
  Title,
  Line,
  ContainerDescription,
  DeleteButton,
} from './styles'
import { useParams } from 'react-router-dom'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

export function OrderDetail() {
  const { orderSelected, getOrderDetail, deleteOrder } = useOrderContext()
  const params = useParams()
  const { orderId } = params

  useEffect(() => {
    getOrderDetail(orderId)
  }, [getOrderDetail, orderId])

  return (
    <OrderDetailContainer>
      <Title>
        <h1>Order Detail</h1>
      </Title>
      <CardContainer>
        <Line>
          <Container width="75%">
            <Field>
              <h3>Contact Name: </h3>
              <h2>{orderSelected?.name}</h2>
            </Field>
            <Field>
              <h3>Contact Phone: </h3>
              <h2>{orderSelected?.phone}</h2>
            </Field>
          </Container>
          <DeleteButton
            title="Delete order"
            onClick={() => deleteOrder(orderId)}
          >
            {/* <Trash size={32} color="#7e22ce" weight="fill" /> */}
            <DeleteForeverIcon />
          </DeleteButton>
        </Line>
        <Line>
          <Container width="50%">
            <Field>
              <h3>Company: </h3>
              <h2>{orderSelected?.company}</h2>
            </Field>
            <Field>
              <h3>Category: </h3>
              <h2>{orderSelected?.category.category}</h2>
            </Field>
          </Container>

          <Container width="50%">
            <Field>
              <h3>Real Estate Agency: </h3>
              <h2>{orderSelected?.estateAgency}</h2>
            </Field>
            <Field>
              <h3>Deadline: </h3>
              <h2>
                {new Date(orderSelected?.deadline).getDate()}/
                {new Date(orderSelected?.deadline).getMonth() + 1}/
                {new Date(orderSelected?.deadline).getFullYear()}
              </h2>
            </Field>
          </Container>
        </Line>
        <ContainerDescription>
          <h3>Order Description: </h3>
          <h2>{orderSelected?.description}</h2>
        </ContainerDescription>
      </CardContainer>
    </OrderDetailContainer>
  )
}
