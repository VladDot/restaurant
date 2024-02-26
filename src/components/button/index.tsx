import { Link } from 'react-router-dom';

import { getStyles } from './styles';
import { Spinner } from '../spinner';

interface IButtonProps {
  route?: string;
  disabled?: boolean;
  className?: string;
  textContent: string;
  isSubmitting?: boolean;
  onClick?: () => {} | void;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({
  type,
  route,
  onClick,
  disabled,
  className,
  textContent,
  isSubmitting,
}: IButtonProps) => {
  const { btn, span, squareFrame, rectangularFrame, link } = getStyles(!!disabled, className);

  return (
    <>
      {route && (
        <Link to={route} className={link}>
          <div className={squareFrame} />

          <div className={rectangularFrame} />

          <span className={span}>{textContent}</span>
        </Link>
      )}

      {type && (
        <button type={type} className={btn} disabled={disabled} onClick={onClick}>
          <div className={squareFrame} />

          <div className={rectangularFrame} />

          <span className={span}>
            {!isSubmitting && textContent} {isSubmitting && <Spinner width={24} />}
          </span>
        </button>
      )}
    </>
  );
};