import { Field, FieldProps } from 'formik';

interface IInputDateProps {
  name: string;
  type: string;
  placeholder: string;
}

export const InputDate = ({ name, type, placeholder }: IInputDateProps) => {
  return (
    <Field>
      {({ form, field, meta }: FieldProps) => {
        return (
          <div className='px-3 py-1 w-full border-secondText border-2 rounded flex items-center relative gap-1'>
            <input
              name={name}
              type={type}
              placeholder={placeholder}
              className='w-full bg-transparent focus:outline-none'
            />
          </div>
        );
      }}
    </Field>
  );
};
