/* eslint-disable eqeqeq */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import Content from './Content'
import Input from './Input'
import Label from './Label'

const normalizeCardNumber = (value) => {
  return (
    value
      .replace(/\s/g, '')
      .match(/.{1,4}/g)
      .join(' ')
      .substr(0, 19) || ''
  )
}

const normalizeValidate = (date) => {
  const month = date.substring(0, 2)
  const year = date.substring(2, 6)
  const formatedDate = `${month}/${year}`
  return formatedDate
}

const maskInput = (e) => {
  if (e.target.name == 'cardNumber') {
    const maskedNumber = normalizeCardNumber(e.target.value)
    e.target.value = maskedNumber
  }

  if (e.target.name == 'validade' && e.target.value.length == 6) {
    const maskedNumber = normalizeValidate(e.target.value)
    e.target.value = maskedNumber
  }
}

const Text = ({ label, type, name, register, errorMsg, validations, error, placeholder }) => (
  <Label>
    <Content>{label}</Content>
    <Input
      type={type}
      {...register(name, validations)}
      placeholder={placeholder}
      onChange={(event) => {
        maskInput(event)
      }}
    />
    {error && (
      <span style={{ color: 'red', marginTop: '-15px', marginBottom: '10px' }}>{errorMsg}</span>
    )}
  </Label>
)

export default {
  Text
}
