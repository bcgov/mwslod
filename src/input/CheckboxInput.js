import React from 'react'
import PropTypes from 'prop-types'

import { startCase } from 'lodash'

import '../style'

const propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  prefix: PropTypes.string,
  disabled: PropTypes.bool,
  width: PropTypes.string,
}

const defaultProps = {
  prefix: null,
  disabled: null,
  width: null,
}

function onChangeWrapper(wrapped) {
  return evt => wrapped(evt.target.checked)
}

function CheckboxInput(props) {
  const {
    name,
    value,
    onChange,
    prefix,
    disabled,
    width,
  } = props

  const title = startCase(name)
  const inputId = `${prefix || ''}${name}`

  return (
    <label className="control-label" htmlFor={inputId} style={{ width }}>
      <input
        id={inputId}
        value={value}
        onChange={onChangeWrapper(onChange)}
        type="checkbox"
        disabled={disabled}
        style={{ marginRight: '3px' }}
      />
      {title}
    </label>
  )
}

CheckboxInput.propTypes = propTypes
CheckboxInput.defaultProps = defaultProps

export default CheckboxInput
