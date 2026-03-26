import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  data?: number;
  icon: React.ReactElement<LucideIcon>;
  events?: string;
}

const DashboardCard = ({ title, data, icon, events }: DashboardCardProps) => {
  return (
    <Card className="bg-slate-100 w-9/12 text-2xl dark:bg-slate-800 pb-0">
      <CardContent>
        <div className="flex flex-row gap-3 justify-center items-center">
          <h3>{icon}</h3>
          {title}
        </div>
        <h6 className="text-base">
          {events}
          </h6>
        <h3 className="text-5xl font-semibold text-slate-500 dark:text-slate-200 text-center py-4">
          {data}
        </h3>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
