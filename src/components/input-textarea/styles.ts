import clsx from "clsx";

interface IGetStyles {
    disabled?: boolean;
    isActive: boolean;
}

export const getStyles = ({ disabled, isActive }: IGetStyles) => ({
    fieldset: clsx(
        "px-3 py-1 w-full h-[110px] border-2 rounded flex relative gap-1",
        {
            "border-secondText": !disabled,
            "border-disabled": disabled,
        },
        { element: isActive, "": !isActive }
    ),
    legend: clsx("px-2 select-none", {
        "text-disabled": disabled,
    }),
    fieldValue: clsx("w-full bg-transparent focus:outline-none resize-none", {
        "text-disabled": disabled,
    }),
});
