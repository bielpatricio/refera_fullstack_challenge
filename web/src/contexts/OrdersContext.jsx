import {
  ReactNode,
  useCallback,
  useEffect,
  useState,
  createContext,
  useContext,
} from 'react'
import { api } from '../lib/axios.js'
import { useNavigate, useParams } from 'react-router-dom'

export const OrdersContext = createContext({})

const Mock = [
  {
    name: 'Gabriel Patricio',
    id: '1',
    phone: '(83) 9 8759-5910',
    estateAgency: 'Reparos S.A.',
    category: 'hidraulica',
    company: 'Imobiliária Sampa',
    deadline: '10/11/2021',
    description:
      'sldjhfvbal;bvpaibvljvhlsfvblsfdihv lashfv;liahsa aaaaaaaaa aaaaaa a aaaa aaaa aaaaaaaa aaaaaaaaaaa vliahvbljk;as fhdvbihkfsagv sldjhfvbal;bvpaibvljvhlsfvblsfdihv lashfv;liahsaaaaaaaaaa aaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaa aavliahvbljk;asfhdvbihkfsagv',
  },
  {
    name: 'Gabriel Patricio',
    id: '2',
    phone: '(83) 9 8759-5910',
    estateAgency: 'Reparos S.A.',
    category: 'hidraulica',
    company: 'Imobiliária Sampa',
    deadline: '10/11/2021',
    description:
      'sldjhfvbal;bvpaibvljvhlsfvblsfdihv lashfv;liahsa aaaaaaaaa aaaaaa a aaaa aaaa aaaaaaaa aaaaaaaaaaa vliahvbljk;as fhdvbihkfsagv sldjhfvbal;bvpaibvljvhlsfvblsfdihv lashfv;liahsaaaaaaaaaa aaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaa aavliahvbljk;asfhdvbihkfsagv',
  },
  {
    name: 'Gabriel Patricio',
    id: '3',
    phone: '(83) 9 8759-5910',
    estateAgency: 'Reparos S.A.',
    category: 'hidraulica',
    company: 'Imobiliária Sampa',
    deadline: '10/11/2021',
    description:
      'sldjhfvbal;bvpaibvljvhlsfvblsfdihv lashfv;liahsa aaaaaaaaa aaaaaa a aaaa aaaa aaaaaaaa aaaaaaaaaaa vliahvbljk;as fhdvbihkfsagv sldjhfvbal;bvpaibvljvhlsfvblsfdihv lashfv;liahsaaaaaaaaaa aaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaa aavliahvbljk;asfhdvbihkfsagv',
  },
  {
    name: 'Gabriel Patricio',
    id: '4',
    phone: '(83) 9 8759-5910',
    estateAgency: 'Reparos S.A.',
    category: 'hidraulica',
    company: 'Imobiliária Sampa',
    deadline: '10/11/2021',
    description:
      'sldjhfvbal;bvpaibvljvhlsfvblsfdihv lashfv;liahsa aaaaaaaaa aaaaaa a aaaa aaaa aaaaaaaa aaaaaaaaaaa vliahvbljk;as fhdvbihkfsagv sldjhfvbal;bvpaibvljvhlsfvblsfdihv lashfv;liahsaaaaaaaaaa aaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaa aavliahvbljk;asfhdvbihkfsagv',
  },
]

export function OrdersProvider({ children }) {
  const [orders, setOrders] = useState([])
  const [orderSelected, setOrderSelected] = useState()
  const navigate = useNavigate()
  const params = useParams()
  const { orderId } = params

  const fetchOrder = useCallback(async (query) => {
    // const response = await api.get('/orders', {
    //   params: {
    //     _sort: 'createdAt',
    //     _order: 'desc',
    //     q: query,
    //   },
    // })

    // setOrders(response.data)
    setOrders(Mock)
  }, [])

  const getOrderDetail = useCallback(async (id) => {
    // const response = await api.get(`/orders/${id}`, {})

    // setOrders(response.data)

    setOrderSelected(Mock.find((m) => m.id === id))
  }, [])

  function goToPageORderDetail(id) {
    const newUrl = `/${id}`
    getOrderDetail(id)
    navigate(newUrl)
  }

  useEffect(() => {
    fetchOrder()
  }, [fetchOrder])

  const createOrder = useCallback(async (data) => {
    const {
      name,
      description,
      estateAgency,
      company,
      phone,
      category,
      deadline,
    } = data

    // const response = await api.post('/orders', {
    //   description,
    //   price,
    //   category,
    //   type,
    //   createdAt: new Date(),
    // })

    // setOrders((state) => [response.data, ...state])
    setOrders((state) => [
      {
        name,
        description,
        estateAgency,
        company,
        phone,
        category,
        deadline,
      },
      ...state,
    ])
  }, [])

  return (
    <OrdersContext.Provider
      value={{
        orders,
        fetchOrder,
        createOrder,
        orderSelected,
        getOrderDetail,
        goToPageORderDetail,
      }}
    >
      {children}
    </OrdersContext.Provider>
  )
}

export function useOrderContext() {
  const context = useContext(OrdersContext)

  return context
}
