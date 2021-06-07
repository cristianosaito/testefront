import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import Form from '../../components/Form'
import InfoTable from '../../components/InfoTable'
import Button from '../../components/Button'
import './payment.css'
import Field from '../../components/Field'

const Payment = () => {
  const history = useHistory()
  const cart = useSelector((state) => state.cart[0])
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
    formState
  } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    shouldUnregister: true
  })

  const { isDirty, isValid } = formState

  const handleProducts = (card) => {
    dispatch({
      type: 'ADD_CARD',
      card
    })
  }

  const onSubmit = (card) => {
    handleProducts(card)
    history.push('/checkout')
  }

  if (!cart) {
    return (
      <div className="container">
        <h2>SACOLA VAZIA</h2>
      </div>
    )
  }

  const validationName = {
    required: true,
    maxLength: 100
  }

  const validationCard = {
    required: true,
    maxLength: 19,
    minLength: 19
  }

  const validationDate = {
    required: true,
    maxLength: 7,
    minLength: 7
  }

  const validationCvv = {
    required: true,
    maxLength: 3,
    minLength: 3
  }

  return (
    <div className="container">
      <h2>CARTÃO DE CRÉDITO</h2>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="credit-card-form">
          <Field.Text
            placeholder="0000 0000 0000 0000"
            label="Número do cartão:"
            name="cardNumber"
            type="text"
            register={register}
            error={errors.cardNumber}
            errorMsg="Número do cartão inválido"
            validations={validationCard}
          />
          <Field.Text
            placeholder=""
            label="Nome do Titular:"
            name="nome"
            type="text"
            register={register}
            error={errors.nome}
            errorMsg="Nome do cartão é obrigatório"
            validations={validationName}
          />
          <Field.Text
            placeholder="--/----"
            label="Validade (mês/ano):"
            name="validade"
            type="text"
            register={register}
            error={errors.validade}
            errorMsg="validade inválida"
            validations={validationDate}
          />
          <Field.Text
            placeholder=""
            label="CVV:"
            name="cvv"
            type="text"
            register={register}
            error={errors.cvv}
            errorMsg="CVV inválido"
            validations={validationCvv}
          />
        </div>
        <InfoTable products={cart} />
        <Button disabled={!isDirty || !isValid}>FINALIZAR O PEDIDO</Button>
      </Form>
    </div>
  )
}

export default Payment
