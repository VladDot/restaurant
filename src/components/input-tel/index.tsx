import { ChangeEvent } from 'react';
import { Field, FieldProps } from 'formik';
import ReactInputMask from 'react-input-mask';
import { getStyles } from './styles';

interface IInputTelProps {
  name: string;
  type: string;
  placeholder: string;
  disabled?: boolean;
}

export const InputNumbers = ({ name, type, placeholder, disabled }: IInputTelProps) => {
  return (
    <Field name={name}>
      {({ form, field, meta }: FieldProps) => {
        const { fieldset, legend, fieldValue } = getStyles({
          disabled: disabled,
        });

        const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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
          <label className='w-full'>
            <fieldset className={fieldset}>
              <legend className={legend}>{placeholder}</legend>
              {type !== 'tel' && (
                <input
                  name={name}
                  type={type}
                  value={field.value}
                  disabled={disabled}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className={fieldValue}
                />
              )}
              {type === 'tel' && (
                <ReactInputMask
                  value={field.value}
                  disabled={disabled}
                  onChange={handleChange}
                  placeholder={placeholder}
                  mask={'+38(999)999 99 99'}
                  className={fieldValue}
                />
              )}
            </fieldset>
            {meta.error && meta.touched && (
              <span className='w-full text-rose-400 pl-3'>{meta.error}</span>
            )}
          </label>
        );
      }}
    </Field>
  );
};
