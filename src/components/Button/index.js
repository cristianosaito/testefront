import styled from 'styled-components'

const Button = styled.button`
  color: #fff;
  background-color: #ff6c00;
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;
  text-align: center;
  margin: 0;
  padding: 0.25em 1em;
  border: 2px solid #ff6c00;
  border-radius: 3px;
  width: 100%;
  height: 60px;
  cursor: pointer;

  &: disabled {
    background: #ccc;
    color: #eee;
    border: 2px solid #eee;
  }
`

export default Button
