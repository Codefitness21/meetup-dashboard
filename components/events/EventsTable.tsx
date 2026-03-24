// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
//   TableCaption,
// } from "@/components/ui/table";
// import Link from "next/link";
// import events from "@/data/events";
// import { Events } from "@/types/events";

// interface EventsTableProps {
//   limit?: number;
//   title?: string;
// }

// const EventsTable = ({ limit, title }: EventsTableProps) => {
//     const sortedEvents: Events[] = [...events].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// const filteredEvents = limit ? sortedEvents.slice(0, limit) : sortedEvents;

//   return (
//     <div className="mt-10">
//       <h3 className="text-2xl mb-4 font-semibold">
//         {title ? title : "Events"}
//       </h3>
//       <Table>
//         <TableCaption>A list of recent events</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Day</TableHead>
//             <TableHead>Date</TableHead>
//             <TableHead>Title</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {filteredEvents.map((events) => (
//             <TableRow key={events.id}>
//               <TableCell>{events.day}</TableCell>
//               <TableCell>{events.date}</TableCell>
//               <TableCell>{events.title}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default EventsTable;
