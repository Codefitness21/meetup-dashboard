"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import data from "@/data/analytics";

const AnalyticsChart = () => {
  return (
    <>
      <Card className="opacity-85 mx-14 mb-5">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">2026 Analytics</CardTitle>
          <CardDescription>Views Per Month</CardDescription>
        </CardHeader>
        <CardContent>
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <LineChart width={1100} height={300} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name"/>
                <YAxis />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </>
  )
};

export default AnalyticsChart;
