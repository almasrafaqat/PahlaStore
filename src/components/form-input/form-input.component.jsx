
import React from 'react'
import { FormInputLabel, Group, Input, TextArea } from './form-input.style'

const FormInput = ({ label, textarea, ...otherProps }) => {

  return (
    <Group>

      {textarea ? <TextArea {...otherProps} /> : <Input {...otherProps} />}
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  )
}

export default FormInput