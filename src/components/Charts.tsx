import {
  BarChart as RechartsBarChart,
  Bar,
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

interface ChartDataPoint {
  name: string;
  value: number;
  [key: string]: any;
}

interface ChartProps {
  data: ChartDataPoint[];
}

export const BarChart = ({ data }: ChartProps) => {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'var(--background)', 
              borderColor: 'var(--border)',
              borderRadius: '8px'
            }} 
          />
          <Legend />
          <Bar dataKey="value" fill="#2b5797" name="Results" />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export const LineChart = ({ data }: ChartProps) => {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'var(--background)', 
              borderColor: 'var(--border)',
              borderRadius: '8px'
            }} 
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#2b5797" 
            activeDot={{ r: 8 }} 
            name="Performance"
          />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
};
