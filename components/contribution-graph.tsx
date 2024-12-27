"use client";

import { Card } from "@/components/ui/card";
import { ContributionDay } from "@/lib/types";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ContributionGraphProps {
  contributions: ContributionDay[];
}

export function ContributionGraph({ contributions }: ContributionGraphProps) {
  return (
    <Card className="w-full p-6">
      <h3 className="text-lg font-semibold mb-4">Contribution Activity</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={contributions}>
            <XAxis
              dataKey="date"
              tickFormatter={(date) => new Date(date).toLocaleDateString()}
              interval={30}
            />
            <YAxis />
            <Tooltip
              labelFormatter={(date) => new Date(date).toLocaleDateString()}
            />
            <Area
              type="monotone"
              dataKey="count"
              stroke="hsl(var(--chart-1))"
              fill="hsl(var(--chart-1))"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}