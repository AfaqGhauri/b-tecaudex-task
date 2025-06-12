import { IconSvgProps } from '@/types';

export const SearchSvg: React.FC<IconSvgProps> = (props) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1_20)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.53 20.47l-4.693-4.694a8.26 8.26 0 10-1.06 1.06l4.692 4.695a.75.75 0 101.062-1.062zM3.75 10.5a6.75 6.75 0 116.75 6.75 6.757 6.757 0 01-6.75-6.75z"
          fill="#4D7399"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_20">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
