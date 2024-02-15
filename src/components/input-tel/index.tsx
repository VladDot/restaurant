import { ChangeEvent } from 'react';
import { Field, FieldProps } from 'formik';
import ReactInputMask from 'react-input-mask';

interface IInputTelProps {
  name: string;
  type: string;
  placeholder: string;
}

//TODO : 30 string

export const InputNumbers = ({ name, type, placeholder }: IInputTelProps) => {
  return (
    <Field name={name}>
      {({ form, field, meta }: FieldProps) => {
        const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
          console.log(event.target.value);
          if (type === 'number' && Number(event.target.value) < 1) {
            form.setFieldError(name, 'min persons 1');
            form.setFieldTouched(name, true, false);
            form.setFieldValue(name, '');
            return;
          }

          if (type === 'number' && Number(event.target.value) > 60) {
            form.setFieldError(name, 'Value must be 60 or less');
            form.setFieldTouched(name, true, false);
            return;
          }

          form.setFieldTouched(name, true, false);
          form.setFieldValue(name, event.target.value.trim());
        };
        return (
          <div className='w-full'>
            <div className='px-3 py-1 w-full border-secondText border-2 rounded flex items-center relative gap-1'>
              {type !== 'tel' && (
                <input
                  name={name}
                  type={type}
                  value={field.value}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className='w-full bg-transparent focus:outline-none'
                />
              )}
              {type === 'tel' && (
                <ReactInputMask
                  onChange={handleChange}
                  placeholder={placeholder}
                  mask={'+38(999)999 99 99'}
                  className='w-full bg-transparent focus:outline-none'
                />
              )}
            </div>
            {meta.error && meta.touched && (
              <span className='w-full text-rose-400 pl-3'>{meta.error}</span>
            )}
          </div>
        );
      }}
    </Field>
  );
};
