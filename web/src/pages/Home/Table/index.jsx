import { OrderTable, Order } from './styles'

export function Table() {
  const id = 1
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
        <tr>
          <td>101</td>
          <td>Hidraulica</td>
          <td>Alcides (11) 99999-9999</td>
          <td>Imobiliaria Sampa</td>
          <td>Reparos S.A.</td>
          <td>
            <Order href={`id=${id}`}>10/11/2021</Order>
          </td>
        </tr>
        <tr>
          <td>101</td>
          <td>Hidraulica</td>
          <td>Alcides (11) 99999-9999</td>
          <td>Imobiliaria Sampa</td>
          <td>Reparos S.A.</td>
          <td>10/11/2021</td>
        </tr>

        <tr>
          <td>101</td>
          <td>Hidraulica</td>
          <td>Alcides (11) 99999-9999</td>
          <td>Imobiliaria Sampa</td>
          <td>Reparos S.A.</td>
          <td>10/11/2021</td>
        </tr>

        <tr>
          <td>101</td>
          <td>Hidraulica</td>
          <td>Alcides (11) 99999-9999</td>
          <td>Imobiliaria Sampa</td>
          <td>Reparos S.A.</td>
          <td>10/11/2021</td>
        </tr>

        <tr>
          <td>101</td>
          <td>Hidraulica</td>
          <td>Alcides (11) 99999-9999</td>
          <td>Imobiliaria Sampa</td>
          <td>Reparos S.A.</td>
          <td>10/11/2021</td>
        </tr>
      </tbody>
    </OrderTable>
  )
}
