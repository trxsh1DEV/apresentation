import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { useQuery } from '@tanstack/react-query';
import requestWithToken from '@/utils/request';
import { UnexpectedError } from '@/data/error/UnexpectedError';
import { ScrollArea } from "@/components/ui/scroll-area";
import { FC } from 'react';
import { LoadingSpinner } from '../ui/myIsLoading';

interface ProductivityProps {
    id: string;
    hoursTotal: number;
}

const useProductivityData = (id: string) => {
    return useQuery({
      queryKey: ["productivityData", id],
      queryFn: async () => {
        try {
          const result = await requestWithToken.get(
            `/productivity-users/${id}?length=10`
          );
          return result.data;
        } catch (error: any) {
          throw new UnexpectedError(
            "Falha ao buscar os dados: " +
              (error.response?.data?.message || error.message)
          );
        }
      },
    });
  };

interface WindowTrackerItem {
  activity: string;
  quantity: number;
  date: string;
}

const calculateTotalQuantity = (data: WindowTrackerItem[]): number => {
  return data.reduce((total, item) => total + item.quantity, 0);
};

const hoursOfUse = (hoursTotal: number, percentUse: number): number => {
  const totalMinutes = hoursTotal * 60;
  const minutesUsed = (totalMinutes * percentUse) / 100;
  return parseFloat(minutesUsed.toFixed(2));
};

const convertMinutesToHoursAndMinutes = (totalMinutes: number): string => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours} hora(s) e ${Math.round(minutes)} minuto(s)`;
};

// Componente customizado para o tooltip
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700">
        <p className="text-white font-medium mb-2">{payload[0].payload.fullActivity}</p>
        <p className="text-gray-300">Quantidade: {payload[0].value}</p>
      </div>
    );
  }
  return null;
};

const ActivityMonitor: FC<ProductivityProps> = ({ id, hoursTotal }) => {
  const { data, isLoading, isError } = useProductivityData(id);

  if (isLoading) {
    return <div className="w-full fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <LoadingSpinner className="w-24 h-24" />
    </div>;
  }

  if (isError) {
    return <div className="w-full h-96 flex items-center justify-center text-4xl">Erro ao carregar dados (Talvez não existam dados o suficiente)</div>;
  }

  if (!data) return null;

  const sortedData = [...data.productivity["2024-11"].windowTracker].sort((a, b) => b.quantity - a.quantity);
  const TOTAL_QTDE = calculateTotalQuantity(sortedData);

  const chartData = sortedData.slice(0, 10).map(item => ({
    ...item,
    fullActivity: item.activity, // Guardamos o nome completo
    activity: item.activity.length > 30 ? item.activity.substring(0, 30) + '...' : item.activity,
  }));

  return (
    <div className="space-y-8 w-full">
      <Card className='bg-gray-800'>
        <CardHeader>
          <CardTitle>Top 10 Janelas Mais Ativas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[600px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={chartData}
                margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
              >
                <XAxis type="number" />
                <YAxis 
                  dataKey="activity"
                  type="category"
                  width={250}
                  tick={{ fontSize: 18, fill: '#fff' }}
                />
                <Tooltip 
                  content={<CustomTooltip />}
                  cursor={false}
                />
                <Bar 
                  dataKey="quantity" 
                  fill="#8884d8"
                  radius={[0, 4, 4, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <ScrollArea className='w-full max-h-[800px] overflow-y-auto'>
        <Card className='bg-gray-800 space-y-6'>
          <CardHeader>
            <CardTitle>Detalhamento de Atividades</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader className='bg-slate-700'>
                <TableRow>
                  <TableHead>Aplicativo/Janela</TableHead>
                  <TableHead className="text-right">Quantidade de Acessos</TableHead>
                  <TableHead className="text-right">Porcentagem de uso</TableHead>
                  <TableHead className="text-right">Tempo de uso</TableHead>
                  <TableHead className="text-left">Data</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedData.map((item, index) => {
                  const percentUse = (item.quantity / TOTAL_QTDE) * 100;
                  const minutesUsed = hoursOfUse(hoursTotal, percentUse);
                  return (
                    <TableRow key={index} className="border-b border-gray-700 text-base">
                      <TableCell className="font-medium">{item.activity}</TableCell>
                      <TableCell className="text-right">{item.quantity}</TableCell>
                      <TableCell className="text-right">{percentUse.toFixed(2)}%</TableCell>
                      <TableCell className="text-right">{convertMinutesToHoursAndMinutes(minutesUsed)}</TableCell>
                      <TableCell>{new Date(item.date).toLocaleDateString('pt-BR')}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </ScrollArea>
    </div>
  );
};

export default ActivityMonitor;