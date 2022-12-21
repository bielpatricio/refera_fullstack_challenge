import { useOrderContext } from '../../../contexts/OrdersContext'
import { OrderTable } from './styles'
import { useNavigate } from 'react-router-dom'

export function Table() {
  const { orders, goToPageORderDetail } = useOrderContext()

  return (
    <OrderTable>
      <thead>
        <tr>
          <th> ID </th>
          <th> Category </th>
          <th> Contact </th>
          <th> Agency </th>
          <th> Company </th>
          <th> Deadline </th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => {
          return (
            <tr key={order.id} onClick={() => goToPageORderDetail(order.id)}>
              <td>{order?.id}</td>
              <td>{order?.category}</td>
              <td>{`${order?.name} - ${order?.phone}`}</td>
              <td>{order?.estateAgency}</td>
              <td>{order?.company}</td>
              <td>{order?.deadline}</td>
            </tr>
          )
        })}
      </tbody>
    </OrderTable>
  )
}
