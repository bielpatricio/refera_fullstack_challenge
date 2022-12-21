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
} from './styles'
import { useParams } from 'react-router-dom'

export function OrderDetail() {
  const { orderSelected, getOrderDetail } = useOrderContext()
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
          <Container width="50%">
            <Field>
              <h3>Contact Name: </h3>
              <h2>{orderSelected?.name}</h2>
            </Field>
            <Field>
              <h3>Contact Phone: </h3>
              <h2>{orderSelected?.phone}</h2>
            </Field>
          </Container>
          <Container width="50%">
            <Field>
              <h3>Company: </h3>
              <h2>{orderSelected?.estateAgency}</h2>
            </Field>
            <Field>
              <h3>Category: </h3>
              <h2>{orderSelected?.category}</h2>
            </Field>
          </Container>
        </Line>
        <Container width="100%">
          <Field>
            <h3>Real Estate Agency: </h3>
            <h2>{orderSelected?.name}</h2>
          </Field>
          <Field>
            <h3>Deadline: </h3>
            <h2>{orderSelected?.deadline}</h2>
          </Field>
        </Container>
        <ContainerDescription>
          <h3>Order Description: </h3>
          <h2>{orderSelected?.description}</h2>
        </ContainerDescription>
      </CardContainer>
    </OrderDetailContainer>
  )
}
