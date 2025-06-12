import { Customer } from '@/components/customer/customer';
import { Heading } from '@/components/ui/Heading';
import { SubHeading } from '@/components/ui/SubHeading';
import { Fragment } from 'react';
import { type NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Fragment>
      <div className="mx-auto mt-9 flex max-w-7xl flex-col gap-7">
        <Heading
          heading="Dashboard"
          description="Overview of your sales performance and customer interactions."
        />
        {/* <SubHeading heading="Sales Performance" /> */}
        <SubHeading heading="Customer Overview" />
        <Customer />
      </div>
    </Fragment>
  );
};

export default Home;
