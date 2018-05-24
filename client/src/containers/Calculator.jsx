import React from 'react'
import { connect } from 'react-redux'
import styled from 'react-emotion'
import Button from 'app/components/Button'
import Stepper from 'app/components/Stepper'
import {
  getFactors,
  getProduct,
  canRemoveFactor,
  canAddFactor,
} from 'app/selectors/calculator'
import {
  addFactor,
  removeFactor,
  incrementFactor,
  decrementFactor,
} from 'app/actions/calculator'

const Equation = styled('div')`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

const Modifiers = styled('div')`
  margin-bottom: 14px;
`

const Symbol = styled('div')`
  margin: 0 14px 14px;
`

const Product = styled('div')`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 14px;
`

const Factor = styled(Stepper)`
  margin-bottom: 14px;
`

export const Calculator = props => (
  <div>
    <Modifiers className="btn-group">
      <Button disabled={!props.canAddFactor} onClick={props.onAddFactor}>
        Add Factor
      </Button>
      <Button disabled={!props.canRemoveFactor} onClick={props.onRemoveFactor}>
        Remove Factor
      </Button>
    </Modifiers>
    <Equation>
      {props.factors.map((value, index) => (
        <React.Fragment key={index}>
          {index > 0 && <Symbol>x</Symbol>}
          <Factor
            onIncrement={() => props.onIncrement(index)}
            onDecrement={() => props.onDecrement(index)}
            value={value}
          />
        </React.Fragment>
      ))}
      <Symbol>=</Symbol>
      <Product>{props.product}</Product>
    </Equation>
  </div>
)

export default connect(
  state => ({
    factors: getFactors(state),
    product: getProduct(state),
    canAddFactor: canAddFactor(state),
    canRemoveFactor: canRemoveFactor(state),
  }),
  dispatch => ({
    onAddFactor() {
      dispatch(addFactor())
    },
    onRemoveFactor() {
      dispatch(removeFactor())
    },
    onIncrement(index) {
      dispatch(incrementFactor(index))
    },
    onDecrement(index) {
      dispatch(decrementFactor(index))
    },
  })
)(Calculator)
