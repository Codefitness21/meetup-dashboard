import DashboardCard from "@/components/dashboard/DashboardCard";
import { Folder, Newspaper, Users } from "lucide-react";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import { getGoogleSheet } from "@/src/action";


export default async function Home() {
  const data = await getGoogleSheet();
  console.log("Home data", data);

  const events = data?.slice(1).map((col: any) => {
    return {
      month: col[0],
      date: col[1],
      place: col[2],
      id: col[0] + col[1] + col[2],
    };
  });

  const monthlyEvents = events?.map((event) => {
    return (
      <ul key={event.id}>
        <li className="text-slate-900 mb-1 text-2xl">{event.month}</li>
          <li className="text-slate-900">{event.date } -
        {event.place }</li>
      </ul>
    );
  });


  const totalConnections = data
    ?.slice(1)
    .reduce((sum: any, col: any) => sum + Number(col[4] || 0), 0);
  const totalEvents = data
    ?.slice(1)
    .reduce((sum: any, col: any) => sum + Number(col[3] || 0), 0);

  return (
    <>
      <h1 className="text-4xl text-center bg-white py-3">
        Tech Networking Dashboard
      </h1>
      <div className="flex flex-col lg:flex-row md:flex-col justify-center w-full py-20">
        <div className="event-section flex flex-row justify-center lg:w-3/6">
          <div className="flex flex-row justify-center w-full opacity-85 font-bold lg:mb-0 md:mb-5 mb-5">
            <DashboardCard
              title="Meetup Events"
              place={monthlyEvents}
              icon={<Newspaper className="text-slate-500" />}
            />
          </div>
        </div>

        <div className="tally-section flex flex-col justify-center lg:w-3/6 opacity-85 font-bold">
          <div className="flex flex-row justify-center w-full md:flex-row mb-5 h-35">
            <DashboardCard
              title="Total invested connections"
              data={totalConnections}
              icon={<Users className=" text-slate-500" />}
            />
          </div>
          <div className="flex flex-row justify-center w-full md:flex-row mb-5 h-35">
            <DashboardCard
              title="Total meetup events"
              data={totalEvents}
              icon={<Folder className="text-slate-500" />}
            />
          </div>
        </div>
      </div>
      <AnalyticsChart />
    </>
  );
}
