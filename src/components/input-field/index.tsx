import { ChangeEvent, useState } from "react";

import { Field, FieldProps } from "formik";

import { EyeClose, EyeOpen } from "../../assets/svg";

import { getStyles } from "./styles";

interface IInputFieldProps {
    name: string;
    type: string;
    disabled?: boolean;
    placeholder: string;
}

export const InputField = ({
    name,
    type,
    disabled,
    placeholder,
}: IInputFieldProps) => {
    const [isActive, setIsActive] = useState(false);

    const [changeType, setChangeType] = useState(type);

    const handleChange = (
        event: ChangeEvent<HTMLInputElement>,
        setFieldValue: (
            value: any,
            field: string,
            shouldValidate?: boolean
        ) => void,
        typeInput: string
    ) => {
        typeInput === "text" &&
            setFieldValue(name, event.target.value.trim().slice(0, 12));
        typeInput === "password" &&
            setFieldValue(name, event.target.value.trim().slice(0, 16));
        typeInput === "email" &&
            setFieldValue(name, event.target.value.trim().slice(0, 30));
    };

    return (
        <Field name={name}>
            {({ form: { setFieldValue }, field, meta }: FieldProps) => {
                const { fieldset, legend, fieldValue } = getStyles({
                    disabled: disabled,
                    isActive,
                });
                return (
                    <label
                        className="w-full"
                        onFocus={() => setIsActive(true)}
                        onBlur={() => setIsActive(false)}
                    >
                        <fieldset className={fieldset}>
                            <legend className={legend}>
                                <span>{name}</span>
                            </legend>

                            <input
                                name={name}
                                type={changeType}
                                value={field.value}
                                disabled={disabled}
                                placeholder={placeholder}
                                autoComplete={
                                    type === "password" ? "on" : "off"
                                }
                                className={fieldValue}
                                onChange={(event) =>
                                    handleChange(event, setFieldValue, type)
                                }
                            />

                            {type === "password" && (
                                <span
                                    className="w-3 h-3 "
                                    onMouseMove={() => setChangeType("text")}
                                    onMouseOut={() => setChangeType("password")}
                                >
                                    {changeType === "password" ? (
                                        <EyeClose className="w-5" />
                                    ) : (
                                        <EyeOpen className="w-5" />
                                    )}
                                </span>
                            )}
                        </fieldset>
                        {meta.touched && meta.error && (
                            <span className="w-full text-rose-400 pl-3">
                                {meta.error}
                            </span>
                        )}
                    </label>
                );
            }}
        </Field>
    );
};
