import { Field, FieldProps } from 'formik';
import { useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import './style.css';
import { formatDateToString } from '../../helpers';
interface IInputDateProps {
  name: string;
  type: 'date';
}

export const InputDate = ({ name, type }: IInputDateProps) => {
  const refPicker = useRef<DatePicker>(null);

  if (type !== 'date') return null;

  const onClick = () => {
    if (refPicker.current) {
      refPicker.current.setOpen(true);
    }
  };

  return (
    <Field name={name}>
      {({ form: { setFieldValue }, field, meta }: FieldProps) => {
        const currentDate = new Date();
        const nextMonth = new Date(currentDate);
        nextMonth.setMonth(currentDate.getMonth() + 6);

        const handleChange = (date: any) => {
          console.log(formatDateToString(date));
          if (date < new Date()) {
            console.log(1);
          }
          setFieldValue(name, date);
        };

        return (
          <div className='w-full'>
            <div
              className='px-3 cursor-pointer py-1 w-full border-solid border-secondText border-[2px] rounded flex items-center relative gap-1'
              onClick={onClick}
            >
              <span className='w-[95%] text-fourth'>{formatDateToString(field.value)}</span>

              <DatePicker
                minDate={currentDate}
                maxDate={nextMonth}
                ref={refPicker}
                selected={field.value}
                onChange={handleChange}
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
