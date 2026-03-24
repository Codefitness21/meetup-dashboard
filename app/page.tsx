import DashboardCard from "@/components/dashboard/DashboardCard";
// import { NumberField, NumberFieldGroup, NumberFieldInput } from "@base-ui/react";
import { Folder, Newspaper, Users } from "lucide-react";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
// import EventsTable from "@/components/events/EventsTable";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl text-center bg-white py-3">Tech Networking Dashboard</h1>
      <div className="flex flex-row w-full py-20">
        <div className="event-section flex justify-center w-3/6">
          <div className="flex flex-col lg:flex-row justify-center w-full opacity-85 font-bold">
            <DashboardCard
              title="Meetup Events"
              icon={<Newspaper className="text-slate-500 " />}
            />
          </div>
        </div>

        <div className="tally-section flex flex-col items-center w-3/6 opacity-85 font-bold">
          
          <div className="flex flex-col justify-center w-full md:flex-row mb-5 h-40">
            <DashboardCard
              title="Total number of invested connections"
              count={58}
              icon={<Users className=" text-slate-500" />}
            />
          </div>
          <div className="flex flex-col justify-center w-full md:flex-row mb-5 h-40">
            <DashboardCard
              title="Total number of meetups"
              count={24}
              icon={<Folder className="text-slate-500" />}
            />
          </div>
        </div>
      </div>
      <AnalyticsChart />
      {/* <EventsTable limit={10} /> */}
    </>
  );
}
