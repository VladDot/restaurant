import { ChangeEvent, useState } from "react";

import { Field, FieldProps } from "formik";

import { getStyles } from "./styles";

interface IInputTextareaProps {
    name: string;
    disabled?: boolean;
    placeholder: string;
}

export const InputTextarea = ({
    name,
    disabled,
    placeholder,
}: IInputTextareaProps) => {
    const [isActive, setIsActive] = useState(false);
    const [countValue, setCountValue] = useState(0);

    return (
        <Field name={name}>
            {({ form, field, meta }: FieldProps) => {
                const { fieldset, legend, fieldValue } = getStyles({
                    disabled: disabled,
                    isActive,
                });

                const handleChange = async (
                    event: ChangeEvent<HTMLTextAreaElement>
                ) => {
                    setCountValue(event.target.value.length);
                    await form.setFieldValue(
                        name,
                        event.target.value.slice(0, 129)
                    );
                };

                return (
                    <label
                        className="w-full"
                        onFocus={() => setIsActive(true)}
                        onBlur={() => setIsActive(false)}
                    >
                        <fieldset className={fieldset}>
                            <legend className={legend}>{name}</legend>

                            <textarea
                                name={name}
                                disabled={disabled}
                                value={field.value}
                                className={fieldValue}
                                onChange={handleChange}
                                placeholder={placeholder}
                            />
                        </fieldset>

                        {countValue !== 0 && (
                            <span className="text-fourth">
                                symbols left: {130 - countValue} out of 130
                            </span>
                        )}
                        
                        {meta.error && meta.touched && (
                            <span className="absolute left-2 top-8 select-none">
                                {meta.error}
                            </span>
                        )}
                    </label>
                );
            }}
        </Field>
    );
};
