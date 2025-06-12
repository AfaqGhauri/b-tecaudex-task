import { IconSvgProps } from '@/types';

export const BellSvg: React.FC<IconSvgProps> = (props) => {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1_26)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.328 13.745c-.433-.747-1.078-2.86-1.078-5.62a6.25 6.25 0 10-12.5 0c0 2.76-.645 4.873-1.079 5.62a1.25 1.25 0 001.079 1.88h3.188a3.125 3.125 0 006.124 0h3.188a1.25 1.25 0 001.078-1.88zM10 16.875a1.875 1.875 0 01-1.767-1.25h3.534A1.875 1.875 0 0110 16.875zm-6.25-2.5C4.352 13.341 5 10.944 5 8.125a5 5 0 0110 0c0 2.816.647 5.213 1.25 6.25H3.75z"
          fill="#0D141C"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_26">
          <path fill="#fff" d="M0 0H20V20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
