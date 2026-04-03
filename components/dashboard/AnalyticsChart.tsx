"use client"

import { Area, AreaChart, CartesianGrid, XAxis, YAxis, } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
// import events from "@/data/events";

export const description = "An area chart with a legend"

const chartData = [
  { month: "January", events: 9, people: 28 },
  { month: "February", events: 8, people: 20 },
  { month: "March", events: 7, people: 18 },
  { month: "April", events: 0, people: 0 },
  { month: "May", events: 0, people: 0 },
  { month: "June", events: 0, people: 0 },
  { month: "July", events: 0, people: 0 },
  { month: "August", events: 0, people: 0 },
  { month: "September", events: 0, people: 0 },
  { month: "October", events: 0, people: 0 },
  { month: "November", events: 0, people: 0 },
  { month: "December", events: 0, people: 0 },
]

const chartConfig = {
  events: {
    label: "Events",
    color: "var(--chart-1)",
  },
  people: {
    label: "People",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function AnalyticsChart() {
  
  return (
    <Card className="opacity-90 m-1 lg:mx-14 mb-5">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">2026 Analytics</CardTitle>
        <CardDescription className="text-slate-900">
          Views Per Month
        </CardDescription>
      </CardHeader>
      <CardContent >
        
        <ChartContainer className="h-96 w-full sm:basis-full min-h" config={chartConfig} >
          
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis className="font-bold"
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis className="font-bold"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={10}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="people"
              type="natural"
              fill="var(--color-people)"
              fillOpacity={0.4}
              stroke="var(--color-people)"
              stackId="a"
            
            />
            <Area
              dataKey="events"
              type="natural"
              fill="var(--color-events)"
              fillOpacity={0.4}
              stroke="var(--color-events)"
              stackId="b"
              
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
export default AnalyticsChart;
