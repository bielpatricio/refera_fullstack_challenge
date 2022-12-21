import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { DefaultLayout } from './layouts/DefaultLayout'
import { OrderDetail } from './pages/OrderDetail'
import { OrdersProvider } from './contexts/OrdersContext'

export function Router() {
  return (
    <OrdersProvider>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path=":orderId" element={<OrderDetail />} />
        </Route>
      </Routes>
    </OrdersProvider>
  )
}
