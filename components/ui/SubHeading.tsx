import { type FC } from 'react';

interface SubHeadingProps {
  heading: string;
}

export const SubHeading: FC<SubHeadingProps> = ({ heading }) => {
  return (
    <div className="flex w-full flex-col items-start gap-3 font-inter">
      <h2 className="text-[22px] font-bold text-blackColorOne">{heading}</h2>
    </div>
  );
};
