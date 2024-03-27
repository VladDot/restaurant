import clsx from 'clsx';

interface IFormSubTitleProps {
  text: string;
  className?: string;
  uppercase?: boolean;
}

//TODO change the name and exports ...

export const SubTitle = ({ text, uppercase, className }: IFormSubTitleProps) => {
  return (
    <h2
      className={clsx(
        'w-full text-center select-none ',
        {
          uppercase: uppercase,
        },
        className
      )}
    >
      {text[0].toUpperCase() + text.slice(1).toLowerCase()}
    </h2>
  );
};
