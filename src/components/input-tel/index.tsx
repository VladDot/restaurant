import { ChangeEvent, KeyboardEvent, useState } from "react";

import { Field, FieldProps } from "formik";
import ReactInputMask from "react-input-mask";

import { getStyles } from "./styles";

interface IInputTelProps {
    name: string;
    type: string;
    disabled?: boolean;
    placeholder: string;
}

//TODO edit arrows in InputNumbers type-number

export const InputNumbers = ({
    name,
    type,
    disabled,
    placeholder,
}: IInputTelProps) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <Field name={name}>
            {({ form, field, meta }: FieldProps) => {
                const { fieldset, legend, fieldValue } = getStyles({
                    isActive,
                    disabled: disabled,
                });

                const KeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
                    if (e.key === "e" || e.key === "E") {
                        return;
                    }
                };

                const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
                    if (type === "number" && Number(event.target.value) < 1) {
                        form.setFieldError(name, "min persons 1");
                        form.setFieldTouched(name, true, false);
                        form.setFieldValue(name, "");
                        return;
                    }

                    if (type === "number" && Number(event.target.value) > 60) {
                        form.setFieldError(name, "Value must be 60 or less");
                        form.setFieldTouched(name, true, false);
                        return;
                    }

                    form.setFieldTouched(name, true, false);
                    form.setFieldValue(name, event.target.value.trim());
                };
                return (
                    <label
                        className="w-full"
                        onFocus={() => setIsActive(true)}
                        onBlur={() => setIsActive(false)}
                    >
                        <fieldset className={fieldset}>
                            <legend className={legend}>{placeholder}</legend>
                            
                            {type !== "tel" && (
                                <input
                                    name={name}
                                    type={type}
                                    value={field.value}
                                    disabled={disabled}
                                    onKeyDown={KeyDown}
                                    className={fieldValue}
                                    onChange={handleChange}
                                    placeholder={placeholder}
                                />
                            )}

                            {type === "tel" && (
                                <ReactInputMask
                                    value={field.value}
                                    disabled={disabled}
                                    className={fieldValue}
                                    onChange={handleChange}
                                    placeholder={placeholder}
                                    mask={"+38(999)999 99 99"}
                                />
                            )}
                        </fieldset>

                        {meta.error && meta.touched && (
                            <span className="w-full text-rose-400 pl-3  bg-transparent">
                                {meta.error}
                            </span>
                        )}
                    </label>
                );
            }}
        </Field>
    );
};
