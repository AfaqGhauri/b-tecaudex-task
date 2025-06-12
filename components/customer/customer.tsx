import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { customerData } from '@/content/customerData';
import { ICustomers } from '@/types';

export const Customer: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Last Interaction</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customerData.map((customer: ICustomers) => (
            <TableRow key={customer.id}>
              <TableCell className="font-medium">{customer.client}</TableCell>
              <TableCell className="text-cyanColor">{customer.email}</TableCell>
              <TableCell className="text-cyanColor">{customer.date}</TableCell>
              <TableCell>
                <span className="inline-flex min-w-20 items-center rounded-full bg-greyColorTwo px-12 py-[5.5px] text-sm font-medium">
                  {customer.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
