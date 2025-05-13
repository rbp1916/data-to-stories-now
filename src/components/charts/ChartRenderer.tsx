
import { useState, useEffect, useRef } from 'react';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement,
  BarElement,
  ArcElement,
  ScatterController,
  LineController,
  BarController,
  PieController,
  Title,
  Tooltip, 
  Legend,
  ChartType,
  ChartData,
  ChartOptions
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { cn } from '@/lib/utils';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  ScatterController,
  LineController,
  BarController,
  PieController,
  Title,
  Tooltip,
  Legend
);

// Define chart theme colors
const chartTheme = {
  backgroundColor: [
    'rgba(99, 102, 241, 0.7)',
    'rgba(139, 92, 246, 0.7)',
    'rgba(45, 212, 191, 0.7)',
    'rgba(250, 204, 21, 0.7)',
    'rgba(248, 113, 113, 0.7)',
    'rgba(74, 222, 128, 0.7)',
    'rgba(125, 211, 252, 0.7)',
    'rgba(251, 146, 60, 0.7)',
  ],
  borderColor: [
    'rgba(99, 102, 241, 1)',
    'rgba(139, 92, 246, 1)',
    'rgba(45, 212, 191, 1)',
    'rgba(250, 204, 21, 1)',
    'rgba(248, 113, 113, 1)',
    'rgba(74, 222, 128, 1)',
    'rgba(125, 211, 252, 1)',
    'rgba(251, 146, 60, 1)',
  ],
  gridColor: 'rgba(226, 232, 240, 0.5)',
  textColor: 'rgba(100, 116, 139, 1)',
};

// Get colors for datasets
const getDatasetColors = (index: number) => ({
  backgroundColor: chartTheme.backgroundColor[index % chartTheme.backgroundColor.length],
  borderColor: chartTheme.borderColor[index % chartTheme.borderColor.length],
});

interface ChartRendererProps {
  data: string[][];
  chartType: ChartType;
  title?: string;
  xAxisLabel?: string;
  yAxisLabel?: string;
  highlightedPoint?: number;
  className?: string;
}

const ChartRenderer: React.FC<ChartRendererProps> = ({ 
  data, 
  chartType, 
  title = '', 
  xAxisLabel = '', 
  yAxisLabel = '',
  highlightedPoint = -1,
  className 
}) => {
  const chartRef = useRef<ChartJS | null>(null);
  const [chartData, setChartData] = useState<ChartData<ChartType>>({ datasets: [] });
  const [chartOptions, setChartOptions] = useState<ChartOptions>({});

  useEffect(() => {
    if (!data || data.length < 2) return;

    const headers = data[0];
    const values = data.slice(1);
    
    // Find columns with numeric data
    const numericColumns: number[] = [];
    values[0].forEach((val, idx) => {
      if (!isNaN(parseFloat(val))) {
        numericColumns.push(idx);
      }
    });
    
    // Default to first column as labels if no column is specified
    const labelColumnIndex = 0;
    
    // Extract labels from the specified column
    const labels = values.map(row => row[labelColumnIndex]);
    
    // Create datasets based on chart type
    const datasets = [];
    
    if (chartType === 'pie') {
      // For pie charts, we use the first numeric column
      const dataColumnIndex = numericColumns[0] || 1;
      const pieData = values.map(row => parseFloat(row[dataColumnIndex]) || 0);
      
      datasets.push({
        data: pieData,
        backgroundColor: chartTheme.backgroundColor,
        borderColor: chartTheme.borderColor,
        borderWidth: 1,
      });
    } else {
      // For other chart types, create a dataset for each numeric column
      numericColumns.forEach((colIndex, idx) => {
        if (colIndex !== labelColumnIndex) {
          const datasetValues = values.map(row => parseFloat(row[colIndex]) || 0);
          const colors = getDatasetColors(idx);
          
          datasets.push({
            label: headers[colIndex],
            data: datasetValues,
            ...colors,
            borderWidth: 2,
            pointRadius: 4,
            pointHoverRadius: 6,
            // If there's a highlighted point, emphasize it with a different style
            pointBackgroundColor: highlightedPoint >= 0 ? 
              datasetValues.map((_, i) => i === highlightedPoint ? colors.borderColor : colors.backgroundColor) : 
              colors.backgroundColor,
            pointBorderColor: highlightedPoint >= 0 ? 
              datasetValues.map((_, i) => i === highlightedPoint ? '#ffffff' : colors.borderColor) : 
              colors.borderColor,
            pointStyle: highlightedPoint >= 0 ? 
              datasetValues.map((_, i) => i === highlightedPoint ? 'star' : 'circle') : 
              'circle',
            pointBorderWidth: highlightedPoint >= 0 ? 
              datasetValues.map((_, i) => i === highlightedPoint ? 2 : 1) : 
              1,
            tension: 0.3, // Smooth lines
          });
        }
      });
    }
    
    // Set chart data
    setChartData({
      labels: chartType === 'pie' ? labels : labels,
      datasets,
    });
    
    // Configure chart options based on chart type
    const options: ChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 800,
        easing: 'easeOutQuad',
      },
      plugins: {
        legend: {
          position: chartType === 'pie' ? 'right' : 'top',
          labels: {
            font: {
              family: 'Inter',
            },
            color: chartTheme.textColor,
          },
        },
        title: {
          display: !!title,
          text: title,
          font: {
            family: 'Inter',
            size: 16,
            weight: 'bold',
          },
          color: chartTheme.textColor,
          padding: {
            top: 10,
            bottom: 20,
          },
        },
        tooltip: {
          mode: 'index',
          intersect: false,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          titleColor: '#334155',
          bodyColor: '#334155',
          borderColor: 'rgba(203, 213, 225, 0.5)',
          borderWidth: 1,
          padding: 12,
          cornerRadius: 8,
          // Remove the boxShadow property as it's not supported
          titleFont: {
            family: 'Inter',
            weight: 'bold',
          },
          bodyFont: {
            family: 'Inter',
          },
          displayColors: true,
          boxPadding: 6,
        },
      },
      scales: chartType !== 'pie' ? {
        x: {
          title: {
            display: !!xAxisLabel,
            text: xAxisLabel,
            font: {
              family: 'Inter',
              weight: 'bold',
            },
            color: chartTheme.textColor,
          },
          ticks: {
            font: {
              family: 'Inter',
            },
            color: chartTheme.textColor,
          },
          grid: {
            color: chartTheme.gridColor,
            drawTicks: false,
            tickLength: 0,
          },
        },
        y: {
          title: {
            display: !!yAxisLabel,
            text: yAxisLabel,
            font: {
              family: 'Inter',
              weight: 'bold',
            },
            color: chartTheme.textColor,
          },
          ticks: {
            font: {
              family: 'Inter',
            },
            color: chartTheme.textColor,
            padding: 10,
          },
          grid: {
            color: chartTheme.gridColor,
            drawTicks: false,
            tickLength: 0,
          },
          beginAtZero: true,
        },
      } : undefined,
    };
    
    setChartOptions(options);
  }, [data, chartType, title, xAxisLabel, yAxisLabel, highlightedPoint]);

  return (
    <div className={cn("chart-container w-full h-80 lg:h-96", className)}>
      {chartData.datasets.length > 0 && (
        <Chart
          ref={chartRef}
          type={chartType}
          data={chartData}
          options={chartOptions}
        />
      )}
    </div>
  );
};

export default ChartRenderer;
