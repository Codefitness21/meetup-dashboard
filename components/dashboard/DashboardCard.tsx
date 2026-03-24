import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  count: number;
  icon: React.ReactElement<LucideIcon>;
}

const DashboardCard = ({ title, count, icon }: DashboardCardProps) => {
  return (
    <Card className="bg-slate-100 w-9/12 text-2xl dark:bg-slate-800 pb-0">
      <CardContent>
        <div className="flex gap-3 justify-center items-center">
          <h3 className="flex-row text-center">
            {icon}
          </h3>
          {title}
        </div>

        <h3 className="text-5xl font-semibold text-slate-500 dark:text-slate-200 text-center py-4">
          {count}
        </h3>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
