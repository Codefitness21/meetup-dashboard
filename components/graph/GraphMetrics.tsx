import { getGoogleSheet } from "@/src/action";

export async function GraphChart() {
const data = await getGoogleSheet(); 
const chartData = data?.slice(1).reduce((acc, col) =>  {
if (col[0]){ 
acc.push({
  month: col[0],
  events: 0,
  people: 0,
})
acc[acc.length-1].events += Number(col[3])
  acc[acc.length-1].people += Number(col[4])
}else {
  acc[acc.length-1].events += Number(col[3])
  acc[acc.length-1].people += Number(col[4])
}
 return acc; 
}, []);
}

export default GraphChart;


