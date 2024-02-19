import { ChangeEvent, useState } from 'react';
import { Field, FieldProps } from 'formik';

import { EyeClose, EyeOpen } from '../../assets/svg';
import { spawn } from 'child_process';

interface IInputFieldProps {
  name: string;
  type: string;
  placeholder: string;
}

export const InputField = ({ name, type, placeholder }: IInputFieldProps) => {
  const [changeType, setChangeType] = useState(type);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void,
    typeInput: string
  ) => {
    typeInput === 'text' && setFieldValue(name, event.target.value.trim().slice(0, 12));
    typeInput === 'password' && setFieldValue(name, event.target.value.trim().slice(0, 16));
  };

  return (
    <Field name={name}>
      {({ form: { setFieldValue }, field, meta }: FieldProps) => {
        return (
          <label className='w-full'>
            <fieldset className='px-3 py-1 w-full border-secondText border-2 rounded flex items-center relative gap-1'>
              <legend>
                {type === 'text' && <span className='px-2 select-none'>{name}</span>}
                {type === 'password' && <span className='px-2 select-none'>{name}</span>}
              </legend>
              <input
                name={name}
                type={changeType}
                value={field.value}
                placeholder={placeholder}
                autoComplete={type === 'password' ? 'on' : 'off'}
                className='w-full bg-transparent focus:outline-none'
                onChange={(event) => handleChange(event, setFieldValue, type)}
              />
              {type === 'password' && (
                <span
                  className='w-3 h-3 '
                  onMouseMove={() => setChangeType('text')}
                  onMouseOut={() => setChangeType('password')}
                >
                  {changeType === 'password' ? (
                    <EyeClose className='w-5' />
                  ) : (
                    <EyeOpen className='w-5' />
                  )}
                </span>
              )}
            </fieldset>
            {meta.touched && meta.error && (
              <span className='w-full text-rose-400 pl-3'>{meta.error}</span>
            )}
          </label>
        );
      }}
    </Field>
  );
};
