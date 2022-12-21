import * as Dialog from '@radix-ui/react-dialog'
import {
  CloseButton,
  Content,
  Overlay,
  FormNewOrder,
  Line,
  InputField,
  PhoneInput,
} from './styles'
import { X } from 'phosphor-react'
import * as z from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import InputMask from 'react-input-mask'
import { useOrderContext } from '../../contexts/OrdersContext'

const newOrderFormSchema = z.object({
  name: z.string().nonempty('Field required'),
  description: z.string(),
  estateAgency: z.string().nonempty('Field required'),
  company: z.string().nonempty('Field required'),
  phone: z.string().nonempty('Field required'),
  category: z.string().nonempty('Field required'),
  deadline: z.string().nonempty('Field required'),
  // .datetime({ message: 'Invalid datetime string! Must be UTC.' }),
})

const orderCategory = [
  {
    value: 'hidraulica',
    name: 'Hidráulica',
  },
  {
    value: 'infiltracao',
    name: 'Infiltração',
  },
  {
    value: 'eletrica',
    name: 'Elétrica',
  },
  {
    value: 'mobilia',
    name: 'Retirada de mobília',
  },
]

export function NewOrderModal() {
  const {
    control,
    register,
    handleSubmit,
    setError,
    formState: { isSubmitting, errors },
    reset,
  } = useForm({
    resolver: zodResolver(newOrderFormSchema),
  })

  const { createOrder } = useOrderContext()

  async function handleCreateNewOrder(data) {
    console.log('created order', data)
    const {
      name,
      description,
      estateAgency,
      company,
      phone,
      category,
      deadline,
    } = data
    await createOrder({
      name,
      description,
      estateAgency,
      company,
      phone,
      category,
      deadline,
    })

    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>New Order</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <FormNewOrder onSubmit={handleSubmit(handleCreateNewOrder)}>
          <Line>
            <InputField width="100%">
              <label>Contact Name*</label>
              <input {...register('name')} type="text" placeholder="Name" />
            </InputField>

            <InputField width="100%">
              <label>Contact Phone*</label>
              <PhoneInput>
                <span>+55</span>
                <input
                  {...register('phone')}
                  type="text"
                  placeholder="Phone"
                  mask="(99) 9 9999-9999"
                />
                {/* <InputMask
                  {...register('phone')}
                  type="text"
                  placeholder="Phone"
                  required
                  name="phone"
                  id="phone"
                  mask="(99) 9 9999-9999"
                /> */}
                {/* <Controller
                  control={control}
                  name="phone"
                  render={({ field }) => {
                    return (
                      <InputMask
                        name="phone"
                        id="phone"
                        type="text"
                        placeholder="Phone"
                        required
                        mask="(99) 9 9999-9999"
                        value={field.value}
                      />
                    )
                  }}
                /> */}
              </PhoneInput>
            </InputField>

            <InputField width="100%">
              <label>Real Estate Agency*</label>
              <input
                {...register('estateAgency')}
                type="text"
                placeholder="Estate agency"
              />
            </InputField>
          </Line>

          <Line>
            <InputField width="100%">
              <label>Order Description</label>
              <textarea
                {...register('description')}
                type="text"
                placeholder="Description"
              />
            </InputField>

            <InputField width="75%">
              <label>Company*</label>
              <input
                {...register('company')}
                type="text"
                placeholder="Company name"
              />
            </InputField>
          </Line>

          <Line>
            <InputField width="100%">
              <label>Select the order Category*</label>
              <select defaultValue="" {...register('category')}>
                <option disabled value="">
                  Select the order Category
                </option>
                {orderCategory.map((category) => {
                  return (
                    <option key={category.value} value={category.value}>
                      {category.name}
                    </option>
                  )
                })}
              </select>
            </InputField>
            <InputField width="75%">
              <label>Deadline*</label>
              <input {...register('deadline')} type="date" />
            </InputField>
          </Line>
          {(errors.name ||
            errors.category ||
            errors.estateAgency ||
            errors.phone ||
            errors.company ||
            errors.deadline) && <p>Please complete fields correctly</p>}
          <button type="submit">Save</button>
        </FormNewOrder>
      </Content>
    </Dialog.Portal>
  )
}
