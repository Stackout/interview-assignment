import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'react-emotion'

const animation = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`

const width = ({ width }) => (width ? width : '1px')
const size = ({ size }) => (size ? size : '50px')
const color = ({ color }) => (color ? color : 'rgba(0,0,0,.125)')
const thumbColor = ({ thumbColor }) => (thumbColor ? thumbColor : '#212529')
const margin = ({ margin }) => (margin ? margin : '60px auto')
const top = props => props.top
const left = props => props.left
const bottom = props => props.bottom
const right = props => props.right

const Spinner = styled('div')`
  display: inline-block;
  position: relative;
  margin: ${margin};
  top: ${top};
  left: ${left};
  bottom: ${bottom};
  right: ${right};
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: ${width} solid ${color};
  border-right: ${width} solid ${color};
  border-bottom: ${width} solid ${color};
  border-left: ${width} solid ${thumbColor};
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: ${animation} 0.7s infinite linear;
  animation: ${animation} 0.7s infinite linear;
  border-radius: 50%;
  width: ${size};
  height: ${size};
  &:after {
    border-radius: 50%;
    width: ${size};
    height: ${size};
  }
`

Spinner.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  color: PropTypes.string,
  thumbColor: PropTypes.string,
  size: PropTypes.string,
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Spinner
