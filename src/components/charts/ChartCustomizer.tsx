
import { useState } from 'react';
import { ChartType } from 'chart.js';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CardContent, Card } from '@/components/ui/card';

interface ChartCustomizerProps {
  title: string;
  xAxisLabel: string;
  yAxisLabel: string;
  highlightedPoint: number;
  chartType: ChartType;
  dataLength: number;
  onUpdateTitle: (title: string) => void;
  onUpdateXAxisLabel: (label: string) => void;
  onUpdateYAxisLabel: (label: string) => void;
  onUpdateHighlightedPoint: (index: number) => void;
}

const ChartCustomizer: React.FC<ChartCustomizerProps> = ({
  title,
  xAxisLabel,
  yAxisLabel,
  highlightedPoint,
  chartType,
  dataLength,
  onUpdateTitle,
  onUpdateXAxisLabel,
  onUpdateYAxisLabel,
  onUpdateHighlightedPoint,
}) => {
  const [tempHighlight, setTempHighlight] = useState<number>(highlightedPoint);

  const handleHighlightChange = (index: number) => {
    if (index >= -1 && index < dataLength) {
      setTempHighlight(index);
      onUpdateHighlightedPoint(index);
    }
  };

  return (
    <Card className="bg-white shadow-sm">
      <CardContent className="grid gap-4 p-6">
        <div className="space-y-2">
          <Label htmlFor="chart-title">Chart Title</Label>
          <Input 
            id="chart-title" 
            value={title} 
            onChange={e => onUpdateTitle(e.target.value)} 
            placeholder="Enter chart title"
            className="border-gray-300 focus:border-storysheets-indigo focus:ring-storysheets-indigo/30"
          />
        </div>

        {chartType !== 'pie' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="x-axis-label">X-Axis Label</Label>
                <Input 
                  id="x-axis-label" 
                  value={xAxisLabel} 
                  onChange={e => onUpdateXAxisLabel(e.target.value)} 
                  placeholder="X-Axis Label"
                  className="border-gray-300 focus:border-storysheets-indigo focus:ring-storysheets-indigo/30"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="y-axis-label">Y-Axis Label</Label>
                <Input 
                  id="y-axis-label" 
                  value={yAxisLabel} 
                  onChange={e => onUpdateYAxisLabel(e.target.value)} 
                  placeholder="Y-Axis Label"
                  className="border-gray-300 focus:border-storysheets-indigo focus:ring-storysheets-indigo/30"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="highlight-point">Highlight Point</Label>
              <div className="flex items-center space-x-2">
                <Input
                  id="highlight-point"
                  type="number"
                  min={-1}
                  max={dataLength - 1}
                  value={tempHighlight}
                  onChange={(e) => setTempHighlight(parseInt(e.target.value) || -1)}
                  className="w-24 border-gray-300 focus:border-storysheets-indigo focus:ring-storysheets-indigo/30"
                />
                <Button
                  onClick={() => handleHighlightChange(tempHighlight)}
                  className="gradient-button"
                >
                  Apply
                </Button>
                <Button
                  onClick={() => {
                    setTempHighlight(-1);
                    onUpdateHighlightedPoint(-1);
                  }}
                  variant="outline"
                  className="border-gray-300 text-gray-700"
                >
                  Clear
                </Button>
              </div>
              <p className="text-xs text-gray-500">Enter -1 to clear highlighting, or 0-{dataLength - 2} to highlight a specific point.</p>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ChartCustomizer;
