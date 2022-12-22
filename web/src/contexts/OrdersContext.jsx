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
  const [categories, setCategories] = useState([])
  const [orderSelected, setOrderSelected] = useState()
  const [total, setTotal] = useState(0)
  const navigate = useNavigate()
  // const params = useParams()
  // const { orderId } = params

  const [nextPagination, setNextPagination] = useState()
  const [previousPagination, setPreviousPagination] = useState()

  const fetchOrder = useCallback(async (page) => {
    try {
      const response = await api.get('/orders', {})
      console.log('fetchOrder', response.data)
      setNextPagination(response.data.next)
      setPreviousPagination(response.data.previous)
      setOrders(response.data.results)
      setTotal(response.data.count)
    } catch (error) {
      console.error(error)
    }
  }, [])

  const getOrderDetail = useCallback(async (id) => {
    const response = await api.get(`/orders/${id}`, {})
    // console.log('getOrderDetail', response.data)
    setOrderSelected(response.data.data)
  }, [])

  const deleteOrder = useCallback(async (id) => {
    try {
      const response = await api.delete(`/orders/${id}`, {})
      // setOrders((state) => {
      //   return state.filter((order) => order.id !== parseInt(id))
      // })
      alert(response.data.message)
      navigate('/')
    } catch (e) {
      console.log(e)
    }
  }, [])

  const changePageOfOrders = useCallback(async (url) => {
    console.log('url', url)
    fetch(url)
      .then((response) => {
        response.json().then((data) => {
          console.log('changePageOfOrders', data)
          setNextPagination(data.next)
          setPreviousPagination(data.previous)
          setOrders(data.results)
          setTotal(response.data.count)
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  function goToPageORderDetail(id) {
    const newUrl = `/${id}`
    getOrderDetail(id)
    navigate(newUrl)
  }

  useEffect(() => {
    fetchOrder()
  }, [fetchOrder])

  const fetchCategories = useCallback(async () => {
    try {
      const response = await api.get('/categories', {})
      setCategories(response.data)
    } catch (error) {
      console.error(error)
    }
  }, [])

  useEffect(() => {
    fetchCategories()
  }, [fetchCategories])

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
    data.deadline = new Date(data.deadline).toISOString()
    try {
      const response = await api.post('/orders', {
        name,
        description,
        estateAgency,
        company,
        phone,
        category,
        deadline: data.deadline,
      })
      alert(`Order was successfully created, status code: ${response.status}`)
      fetchOrder()
      navigate('/')
    } catch (error) {
      console.error(error)
    }
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
        categories,
        nextPagination,
        previousPagination,
        changePageOfOrders,
        total,
        deleteOrder,
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
