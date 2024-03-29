import clsx from "clsx";

interface IStylesProps {
    isValue?: boolean;
    isActive: boolean;
    disabled?: boolean;
}

export const getStyles = ({ disabled, isValue, isActive }: IStylesProps) => ({
    fieldset: clsx(
        "px-3  py-1 w-full border-solid  border-[2px] rounded flex items-center relative gap-1",
        {
            " border-disabled cursor-default": disabled,
            " border-secondText cursor-pointer": !disabled,
        },
        { element: isActive, "": !isActive }
    ),

    span: clsx("w-[50%]", {
        "text-disabled select-none": disabled,
        "text-fourth": isValue && !disabled,
        "text-secondText": !isValue && !disabled,
    }),

    legend: clsx("px-2", { "text-disabled": disabled }),
});
