
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChartType } from 'chart.js';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ChartRenderer from '@/components/charts/ChartRenderer';
import ChartSelector from '@/components/charts/ChartSelector';
import ChartCustomizer from '@/components/charts/ChartCustomizer';
import NarrativeGenerator from '@/components/narrative/NarrativeGenerator';
import ExportOptions from '@/components/export/ExportOptions';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

// Data context
import { DataContext } from '@/context/DataContext';
import { useContext } from 'react';

// Function to recommend chart type based on data
const recommendChartType = (data: string[][]): ChartType => {
  if (!data || data.length < 2) return 'bar';
  
  const headers = data[0];
  const rows = data.slice(1);
  
  // Check if first column looks like dates or time periods
  const possibleDateColumn = rows.map(row => row[0]);
  const looksLikeTimeSeries = possibleDateColumn.every(val => 
    /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|[0-9]{1,2}\/[0-9]{1,2}|[0-9]{4}|Q[1-4])/.test(val)
  );
  
  if (looksLikeTimeSeries) {
    return 'line';
  }
  
  // Check number of categories
  if (rows.length <= 6) {
    return 'pie';
  }
  
  // Check if data might represent a correlation
  if (headers.length >= 3) {
    const numericColumns = headers.filter((_, idx) => 
      idx > 0 && !isNaN(parseFloat(rows[0][idx]))
    );
    
    if (numericColumns.length >= 2) {
      return 'scatter';
    }
  }
  
  // Default to bar chart
  return 'bar';
};

const Visualization = () => {
  const { data } = useContext(DataContext);
  const navigate = useNavigate();
  const [chartType, setChartType] = useState<ChartType>('bar');
  const [chartTitle, setChartTitle] = useState('');
  const [xAxisLabel, setXAxisLabel] = useState('');
  const [yAxisLabel, setYAxisLabel] = useState('');
  const [highlightedPoint, setHighlightedPoint] = useState<number>(-1);
  const [narrative, setNarrative] = useState('');
  const chartRef = useRef<HTMLDivElement>(null);

  // Redirect if no data is available
  useEffect(() => {
    if (!data || !data.rawData || data.rawData.length === 0) {
      toast.error('No data available. Please upload data first.');
      navigate('/upload');
      return;
    }
    
    // Set default chart title based on file name
    if (data.fileName) {
      const baseName = data.fileName.split('.')[0];
      setChartTitle(baseName.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()));
    }
    
    // Set default axis labels based on data headers
    if (data.rawData && data.rawData.length > 0) {
      const headers = data.rawData[0];
      if (headers.length > 0) {
        setXAxisLabel(headers[0]);
      }
      if (headers.length > 1) {
        setYAxisLabel(headers[1]);
      }
    }
    
    // Recommend chart type
    const recommendedType = recommendChartType(data.rawData);
    setChartType(recommendedType);
    
  }, [data, navigate]);

  // Update narrative when it's generated
  const handleNarrativeGenerated = (generatedNarrative: string) => {
    setNarrative(generatedNarrative);
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="flex-grow container py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Data Visualization</h1>
            <p className="text-gray-600">
              Customize your chart and generate insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold mb-4">Chart Type</h2>
                  <ChartSelector currentType={chartType} onSelectChart={setChartType} />
                </div>
                
                <div className="mt-8" ref={chartRef}>
                  {data?.rawData && (
                    <ChartRenderer
                      data={data.rawData}
                      chartType={chartType}
                      title={chartTitle}
                      xAxisLabel={xAxisLabel}
                      yAxisLabel={yAxisLabel}
                      highlightedPoint={highlightedPoint}
                    />
                  )}
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Customize Chart</h2>
                {data?.rawData && (
                  <ChartCustomizer
                    title={chartTitle}
                    xAxisLabel={xAxisLabel}
                    yAxisLabel={yAxisLabel}
                    highlightedPoint={highlightedPoint}
                    chartType={chartType}
                    dataLength={data.rawData.length}
                    onUpdateTitle={setChartTitle}
                    onUpdateXAxisLabel={setXAxisLabel}
                    onUpdateYAxisLabel={setYAxisLabel}
                    onUpdateHighlightedPoint={setHighlightedPoint}
                  />
                )}
              </div>
            </div>
            
            <div className="space-y-6">
              {data?.rawData && (
                <NarrativeGenerator
                  chartType={chartType}
                  data={data.rawData}
                  chartTitle={chartTitle}
                  className="bg-white rounded-xl shadow-sm"
                />
              )}
              
              <ExportOptions
                chartRef={chartRef}
                narrative={narrative}
                className="bg-white rounded-xl shadow-sm"
              />
              
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-semibold mb-4">Need More Data?</h3>
                <Button asChild variant="outline" className="w-full">
                  <a href="/upload">Upload Another File</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Visualization;
