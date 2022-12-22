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
  const navigate = useNavigate()

  const [nextPagination, setNextPagination] = useState()
  const [previousPagination, setPreviousPagination] = useState()

  /// GET ALL ORDERS IN THE PAGINATION 1 OF API
  const fetchOrder = useCallback(async (page) => {
    try {
      const response = await api.get('/orders', {})
      setNextPagination(response.data.next)
      setPreviousPagination(response.data.previous)
      setOrders(response.data.results)
      setTotal(response.data?.count)
    } catch (error) {
      console.error(error)
    }
  }, [])

  /// GET ORDER DETAIL
  const getOrderDetail = useCallback(async (id) => {
    const response = await api.get(`/orders/${id}`, {})
    setOrderSelected(response.data)
  }, [])

  /// DELETE ORDER BY ID
  const deleteOrder = useCallback(async (id) => {
    try {
      const response = await api.delete(`/orders/${id}`, {})
      alert(response.data.message)
      fetchOrder()
      navigate('/')
    } catch (e) {
      console.error(e)
      alert(`Delete order error: ${JSON.stringify(e.response.data)}`)
    }
  }, [])

  /// CHANGE THE PAGINATION IN THE API AND CHANGE THE DATA OF ORDERS TO SHOW IN THE HOME
  const changePageOfOrders = useCallback(async (url) => {
    fetch(url)
      .then((response) => {
        response.json().then((data) => {
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

  /// REDIRECT PAGE HOME TO PAGE DETAILS ORDER
  function goToPageOrderDetail(id) {
    const newUrl = `/${id}`
    getOrderDetail(id)
    navigate(newUrl)
  }

  useEffect(() => {
    fetchOrder()
  }, [fetchOrder])

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
        category_id: parseInt(category),
        deadline: data.deadline,
      })
      alert(`Order was successfully created, status code: ${response.status}`)
      fetchOrder()
      navigate('/')
    } catch (error) {
      alert(`Order error: ${JSON.stringify(error.response.data)}`)
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
        goToPageOrderDetail,
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
