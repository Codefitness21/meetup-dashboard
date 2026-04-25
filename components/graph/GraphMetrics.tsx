import { getGoogleSheet } from "@/src/action";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";

export async function GraphMetrics() {

   
const data = await getGoogleSheet(); 
const chartData = data?.slice(1).reduce((acc, col) =>  {
if (col[0]){ 
acc.push({
  month: col[0],
  events: 0,
  people: 0,
})
acc[acc.length-1].events += Number(col[3] || [])
  acc[acc.length-1].people += Number(col[4] || [])
}else {
  acc[acc.length-1].events += Number(col[3] || [])
  acc[acc.length-1].people += Number(col[4] || [])
}
 return acc; 
}, []);

 return (
        <AnalyticsChart chartData={chartData}/>
    )}
export default GraphMetrics;


