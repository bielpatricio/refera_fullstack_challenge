import { useOrderContext } from '../../../contexts/OrdersContext'
import { OrderTable } from './styles'
import { useNavigate } from 'react-router-dom'

export function TableComponent() {
  const { orders, goToPageOrderDetail } = useOrderContext()

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
        {orders?.map((order) => {
          return (
            <tr key={order.id} onClick={() => goToPageOrderDetail(order.id)}>
              <td>{order?.id}</td>
              <td>{order?.category.category}</td>
              <td>{`${order?.name} - ${order?.phone}`}</td>
              <td>{order?.estateAgency}</td>
              <td>{order?.company}</td>
              <td>
                {new Date(order?.deadline).getDate()}/
                {new Date(order?.deadline).getMonth() + 1}/
                {new Date(order?.deadline).getFullYear()}
              </td>
            </tr>
          )
        })}
      </tbody>
    </OrderTable>
  )
}
