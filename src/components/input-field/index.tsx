import { ChangeEvent, useState } from 'react';
import { Field, FieldProps } from 'formik';
import { EyeClose, EyeOpen } from '../../assets/svg';

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
          <div className='w-full'>
            <div className='px-3 py-1 w-full border-secondText border-2 rounded flex items-center relative gap-1'>
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
            </div>
            {meta.touched && meta.error && (
              <span className='w-full text-rose-400 pl-3'>{meta.error}</span>
            )}
          </div>
        );
      }}
    </Field>
  );
};
