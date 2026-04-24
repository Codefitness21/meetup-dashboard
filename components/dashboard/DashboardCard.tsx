import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import React from 'react';

interface DashboardCardProps {
  title: string;
  data?: any;
  icon: React.ReactElement<LucideIcon>;
  place?: any;
}

const DashboardCard = ({ title, data, icon, place}: DashboardCardProps) => {

  return (
    <Card className="bg-slate-100 w-9/12 lg:text-2xl dark:bg-slate-800 pb-0">
      <CardContent>
        <div className="flex flex-row gap-3 text-sm justify-center items-center ">
          <h3>{icon}</h3>
          {title}
        </div>
        <div className="flex flex-row justify-center lg:text-5xl text-3xl dark:text-slate-200 text-slate-700 m-1.5">
          {data}
        </div>
        <div className="flex flex-col text-sm dark:text-slate-200 gap-2 h-75 overflow-hidden overflow-y-scroll text-slate-700 pb-5">
          {place }
        </div >
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
