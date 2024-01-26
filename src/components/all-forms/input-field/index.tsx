import { ChangeEvent, useState } from 'react';
import { Field, FieldProps, FormikFormProps, FormikProps } from 'formik';
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
    form: {
      setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
    }
  ) => {
    form.setFieldValue(name, event.target.value);
  };

  return (
    <>
      {type === 'text' && (
        <Field name={name}>
          {({ form, field, meta }: FieldProps) => {
            return (
              <div className=' border-gray-400 border-2 w-fit'>
                <input
                  name={name}
                  type={type}
                  value={field.value}
                  onChange={(event) => handleChange(event, form)}
                  placeholder={placeholder}
                />
              </div>
            );
          }}
        </Field>
      )}

      {type === 'password' && (
        <Field name={name}>
          {({ form, field, meta }: FieldProps) => {
            return (
              <div className='relative pr-3 flex items-center border-gray-400 border-2 w-fit gap-1'>
                <input
                  name={name}
                  type={changeType}
                  value={field.value}
                  placeholder={placeholder}
                  onChange={(event) => handleChange(event, form)}
                />
                <span
                  className='w-3 h-3 '
                  onMouseDown={() => setChangeType('text')}
                  onMouseOut={() => setChangeType('password')}
                >
                  {changeType === 'password' ? <EyeClose className=' w-4' /> : <EyeOpen />}
                </span>
              </div>
            );
          }}
        </Field>
      )}
    </>
  );
};
