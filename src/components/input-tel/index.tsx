import { Field, FieldProps } from 'formik';
import { ChangeEvent } from 'react';

interface IInputTelProps {
  name: string;
  type: string;
  placeholder: string;
}

export const InputTel = ({ name, type, placeholder }: IInputTelProps) => {
  return (
    <Field name={name}>
      {({ form, field, meta }: FieldProps) => {
        const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
          if (
            (event.key >= '0' && event.key <= '9') ||
            event.key === '+' ||
            event.key === 'Backspace' ||
            event.key === 'Delete'
          ) {
            return;
          } else {
            event.preventDefault();
          }
        };

        const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
          if (type === 'tel' && event.target.value.length - 1 > 12) return;
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

          form.setFieldValue(name, event.target.value.trim());
        };
        return (
          <div className='w-full'>
            <div className='px-3 py-1 w-full border-secondText border-2 rounded flex items-center relative gap-1'>
              <input
                name={name}
                type={type}
                value={field.value}
                onChange={handleChange}
                placeholder={placeholder}
                onKeyPress={handleKeyPress}
                className='w-full bg-transparent focus:outline-none'
              />
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
