import { Link } from 'react-router-dom';

interface IButtonProps {
  name: string;
  route: string;
  disabled?: boolean;
}

export const Button = ({ name, route, disabled }: IButtonProps) => {
  return (
    <Link
      to={route}
      className="w-[260px] h-[50px] group bg-transparent text-center flex items-center relative before:border-2 before:border-[#A78963] before:w-[100%] before:h-[70%] before:content-[''] before:block before:absolute before:top-[15%] before:bg-transparent"
    >
      <div className="w-full h-full absolute before:border-2 before:border-[#A78963] before:w-[94%] before:h-[100%] before:content-[''] before:block before:absolute before:left-[3%] before:bg-transparent"></div>
      <div className='absolute rounded w-full bg-[#A78963] insert-auto h-0 group-hover:h-full transition-all ease-in-out duration-500 '></div>
      <span className='w-full relative z-50 text-black group-hover:text-white delay-[200ms]'>
        {name}
      </span>
    </Link>
  );
};
