import { type FC } from 'react';

interface HeadingProps {
  heading: string;
  description?: string;
}

export const Heading: FC<HeadingProps> = ({ heading, description }) => {
  return (
    <div className="flex w-full flex-col items-start gap-3 font-inter">
      <h2 className="text-[32px] font-bold text-blackColorOne">{heading}</h2>

      {description && (
        <p className="text-sm font-normal text-cyanColor">{description}</p>
      )}
    </div>
  );
};
