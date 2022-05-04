import React, {useState} from 'react';

export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue)
  const onChange = event => {
    const value = event.target.value
    let willUpdate = true;
    if(typeof validator ==='function') {
      willUpdate = validator(value)
    }

    if(willUpdate) setValue(event.target.value)
    else console.error('value length more than 10')
  }

  return { value, onChange }
}