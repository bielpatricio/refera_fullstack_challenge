import { useOrderContext } from '../../../contexts/OrdersContext'
import { OrderTable, TableRowBody, TableCell } from './styles'
import { useNavigate } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from '@mui/material'
import { useCallback } from 'react'

export function TableComponent() {
  const {
    orders,
    goToPageOrderDetail,
    total,
    changePageOrders,
    page,
    order,
    orderBy,
    changeOrderBy,
  } = useOrderContext()

  const handleChangePage = useCallback(
    (_, newPage) => {
      return changePageOrders(Boolean(page - 1 < newPage))
    },
    [page, changePageOrders],
  )

  const createSortHandler = (col) => () => {
    changeOrderBy(col)
  }

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {[
                { name: 'ID', id: 'id' },
                { name: 'Category', id: 'category_id' },
                { name: 'Contact', id: 'name' },
                { name: 'Agency', id: 'estateAgency' },
                { name: 'Company', id: 'company' },
                { name: 'Deadline', id: 'deadLine' },
              ].map((col) => (
                <TableCell key={col.id}>
                  <TableSortLabel
                    active={orderBy === col.id}
                    direction={orderBy === col.id ? order : 'asc'}
                    onClick={createSortHandler(col.id)}
                  >
                    {col.name}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {orders?.map((order) => {
              return (
                <TableRowBody
                  key={order.id}
                  onClick={() => goToPageOrderDetail(order.id)}
                >
                  <TableCell>{order?.id}</TableCell>
                  <TableCell>{order?.category.category}</TableCell>
                  <TableCell>{`${order?.name} - ${order?.phone}`}</TableCell>
                  <TableCell>{order?.estateAgency}</TableCell>
                  <TableCell>{order?.company}</TableCell>
                  <TableCell>
                    {new Date(order?.deadline).toLocaleDateString()}
                  </TableCell>
                </TableRowBody>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[]}
        rowsPerPage={10}
        component="div"
        count={total}
        page={page - 1}
        onPageChange={handleChangePage}
      />
    </>
  )
}
