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

export function OrdersProvider({ children }) {
  const [orders, setOrders] = useState([])
  const [categories, setCategories] = useState([])
  const [orderSelected, setOrderSelected] = useState()
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [order, setOrder] = useState('asc')
  const [orderBy, setOrderBy] = useState('id')
  const navigate = useNavigate()

  /// RESET TABLE
  const resetTable = useCallback(() => {
    setPage(1)
    setOrder('asc')
    setOrderBy('id')
  }, [])

  /// GET ALL ORDERS IN THE PAGINATION 1 OF API
  const fetchOrder = useCallback(async () => {
    try {
      const response = await api.get('/orders', {
        params: {
          page,
          order,
          orderBy,
        },
      })
      setOrders(response.data.results)
      setTotal(response.data?.count)
    } catch (error) {
      console.error(error)
    }
  }, [page, order, orderBy])

  /// GET ORDER DETAIL
  const getOrderDetail = useCallback(async (id) => {
    const response = await api.get(`/orders/${id}`, {})
    setOrderSelected(response.data)
  }, [])

  /// DELETE ORDER BY ID
  const deleteOrder = useCallback(
    async (id) => {
      try {
        const response = await api.delete(`/orders/${id}`, {})
        alert(response.data.message)
        fetchOrder()
        resetTable()
        navigate('/')
      } catch (e) {
        console.error(e)
        alert(`Delete order error: ${JSON.stringify(e.response.data)}`)
      }
    },
    [resetTable],
  )

  /// CHANGE THE PAGINATION IN THE API AND CHANGE THE DATA OF ORDERS TO SHOW IN THE HOME
  const changePageOrders = useCallback(async (isNext) => {
    setOrder('asc')
    setOrderBy('id')
    setPage((p) => (isNext ? p + 1 : p - 1))
  }, [])

  /// CHANGE THE ORDER BY ONE COLUMN IN THE API AND CHANGE THE DATA OF ORDERS TO SHOW IN THE HOME
  const changeOrderBy = (orderBy) => {
    setOrderBy((currOrderBy) => {
      if (currOrderBy === orderBy) {
        setOrder((o) => (o === 'desc' ? 'asc' : 'desc'))
      } else {
        setOrder('asc')
      }
      return orderBy
    })
  }

  /// REDIRECT PAGE HOME TO PAGE DETAILS ORDER
  function goToPageOrderDetail(id) {
    const newUrl = `/${id}`
    navigate(newUrl)
  }

  useEffect(() => {
    fetchOrder()
  }, [fetchOrder, page, order, orderBy])

  /// Could create a new context to categories
  // GET ALL CATEGORIES TO CREATE A ORDER
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
  ///

  /// CREATE A NEW ORDER
  const createOrder = useCallback(
    async (data) => {
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
          category_id: parseInt(category),
          deadline: data.deadline,
        })
        alert(`Order was successfully created, status code: ${response.status}`)
        resetTable()
        navigate('/')
      } catch (error) {
        alert(`Order error: ${JSON.stringify(error.response.data)}`)
      }
    },
    [resetTable],
  )

  return (
    <OrdersContext.Provider
      value={{
        orders,
        fetchOrder,
        createOrder,
        orderSelected,
        getOrderDetail,
        goToPageOrderDetail,
        categories,
        total,
        deleteOrder,
        page,
        order,
        orderBy,
        changeOrderBy,
        changePageOrders,
        resetTable,
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
