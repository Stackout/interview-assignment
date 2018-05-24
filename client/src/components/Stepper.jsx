import React from 'react'
import Button from 'app/components/Button'
import styled from 'react-emotion'

const Card = styled('div')`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 8px;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
`

const Value = styled('div')`
  width: 54px;
  font-size: 22px;
  font-weight: bold;
`

export default ({ value, onIncrement, onDecrement, className }) => (
  <Card className={className}>
    <Value>{value}</Value>
    <div className="btn-group-vertical">
      <Button onClick={onIncrement}>+</Button>
      <Button onClick={onDecrement}>-</Button>
    </div>
  </Card>
)
