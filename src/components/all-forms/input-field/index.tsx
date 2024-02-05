import { ChangeEvent, useState } from 'react';
import { Field, FieldProps } from 'formik';
import { EyeClose, EyeOpen } from '../../../assets/svg';

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
    typeInput === 'text' && setFieldValue(name, event.target.value.trim().slice(0, 13));
    typeInput === 'password' && setFieldValue(name, event.target.value.slice(0, 17));
  };

  return (
    <Field name={name}>
      {({ form: { setFieldValue }, field, meta }: FieldProps) => {
        return (
          <>
            {type === 'text' && (
              <div className=' border-[#A78963] border-2 rounded w-full px-3 py-1 relative'>
                <input
                  name={name}
                  type={type}
                  value={field.value}
                  placeholder={placeholder}
                  className='w-full bg-transparent focus:outline-none'
                  onChange={(event) => handleChange(event, setFieldValue, type)}
                />
                {meta.touched && meta.error && (
                  <span className='absolute left-2 top-8  select-none'>{meta.error}</span>
                )}
              </div>
            )}
            {type === 'password' && (
              <div className='relative px-3 py-1 flex items-center border-[#A78963] border-2 rounded w-full gap-1'>
                <input
                  name={name}
                  autoComplete='off'
                  type={changeType}
                  value={field.value}
                  placeholder={placeholder}
                  className='w-full bg-transparent focus:outline-none'
                  onChange={(event) => handleChange(event, setFieldValue, type)}
                />
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

                {meta.touched && meta.error && (
                  <span className='absolute left-2 top-8  select-none'>{meta.error}</span>
                )}
              </div>
            )}
          </>
        );
      }}
    </Field>
  );
};
