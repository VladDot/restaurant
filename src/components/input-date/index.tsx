import { useRef, useState } from "react";

import DatePicker from "react-datepicker";
import { Field, FieldProps } from "formik";

import { formatDateToString } from "../../helpers";

import { getStyles } from "./styles";

import "./style.css";
import "react-datepicker/dist/react-datepicker.css";

interface IInputDateProps {
    name: string;
    disabled?: boolean;
}

export const InputDate = ({ name, disabled }: IInputDateProps) => {
    const [isActive, setIsActive] = useState(false);

    const refPicker = useRef<DatePicker>(null);

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

                const isValue =
                    formatDateToString(field.value) === "дд.мм.рррр";

                const { fieldset, span, legend } = getStyles({
                    isActive,
                    isValue: isValue,
                    disabled: disabled,
                });

                const handleChange = (date: any) => {
                    setFieldValue(name, date);
                };

                return (
                    <label
                        className="w-full"
                        onClick={onClick}
                        onFocus={() => setIsActive(true)}
                        onBlur={() => setIsActive(false)}
                    >
                        <fieldset className={fieldset}>
                            <legend className={legend}>{name}</legend>

                            <span className={span}>
                                {formatDateToString(field.value)}
                            </span>

                            <DatePicker
                                ref={refPicker}
                                disabled={disabled}
                                maxDate={nextMonth}
                                minDate={currentDate}
                                selected={field.value}
                                onChange={handleChange}
                            />
                        </fieldset>

                        {meta.error && meta.touched && (
                            <span className="w-full text-rose-400 pl-3 select-none">
                                {meta.error}
                            </span>
                        )}
                    </label>
                );
            }}
        </Field>
    );
};
