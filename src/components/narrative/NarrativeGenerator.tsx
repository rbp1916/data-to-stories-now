
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Copy, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

interface NarrativeGeneratorProps {
  chartType: string;
  data: string[][];
  chartTitle: string;
  className?: string;
}

const NarrativeGenerator: React.FC<NarrativeGeneratorProps> = ({ 
  chartType, 
  data, 
  chartTitle,
  className 
}) => {
  const [userContext, setUserContext] = useState('');
  const [narrative, setNarrative] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  // This would use an actual API in a real implementation
  const generateNarrative = () => {
    setIsGenerating(true);
    
    // Simulating API call delay
    setTimeout(() => {
      // Generate a sample narrative based on the chart type and data
      let generatedNarrative = '';
      
      if (!data || data.length < 2) {
        generatedNarrative = 'Unable to generate a narrative without sufficient data.';
      } else {
        const headers = data[0];
        const values = data.slice(1);
        
        // Find numeric columns
        const numericColumns = headers.filter((_, idx) => 
          !isNaN(parseFloat(values[0][idx]))
        );
        
        if (chartType === 'bar') {
          generatedNarrative = `This ${chartTitle ? chartTitle.toLowerCase() : 'bar chart'} shows a comparison of ${numericColumns.join(' and ')} across different categories. `;
          
          // Find highest value
          let highestValue = 0;
          let highestCategory = '';
          let highestColumn = '';
          
          numericColumns.forEach((column, colIdx) => {
            values.forEach((row, rowIdx) => {
              const value = parseFloat(row[headers.indexOf(column)]);
              if (value > highestValue) {
                highestValue = value;
                highestCategory = row[0];
                highestColumn = column;
              }
            });
          });
          
          generatedNarrative += `The highest ${highestColumn} (${highestValue.toLocaleString()}) was recorded for ${highestCategory}. `;
          
          if (userContext) {
            generatedNarrative += `Considering your context that "${userContext}", this suggests potential opportunities for targeted strategies focusing on high-performing areas.`;
          } else {
            generatedNarrative += `This insight can be used to identify high-performing areas and develop targeted strategies.`;
          }
        } else if (chartType === 'line') {
          generatedNarrative = `This ${chartTitle ? chartTitle.toLowerCase() : 'line chart'} illustrates trends in ${numericColumns.join(' and ')} over time. `;
          
          // Check if there's an overall upward or downward trend
          const firstColumn = headers.indexOf(numericColumns[0]);
          const firstValue = parseFloat(values[0][firstColumn]);
          const lastValue = parseFloat(values[values.length - 1][firstColumn]);
          
          if (lastValue > firstValue) {
            const percentIncrease = ((lastValue - firstValue) / firstValue * 100).toFixed(1);
            generatedNarrative += `There's an overall upward trend with ${numericColumns[0]} increasing by approximately ${percentIncrease}% from beginning to end. `;
          } else {
            const percentDecrease = ((firstValue - lastValue) / firstValue * 100).toFixed(1);
            generatedNarrative += `There's an overall downward trend with ${numericColumns[0]} decreasing by approximately ${percentDecrease}% from beginning to end. `;
          }
          
          if (userContext) {
            generatedNarrative += `Given your context that "${userContext}", these trends suggest implications for future planning and strategy adjustment.`;
          } else {
            generatedNarrative += `Understanding these trends can help with forecasting and strategic planning for future periods.`;
          }
        } else if (chartType === 'pie') {
          generatedNarrative = `This ${chartTitle ? chartTitle.toLowerCase() : 'pie chart'} presents the distribution of ${headers[1]} across different ${headers[0]} categories. `;
          
          // Calculate total and find largest slice
          let total = 0;
          let largestValue = 0;
          let largestCategory = '';
          
          values.forEach(row => {
            const value = parseFloat(row[1]);
            total += value;
            
            if (value > largestValue) {
              largestValue = value;
              largestCategory = row[0];
            }
          });
          
          const largestPercentage = ((largestValue / total) * 100).toFixed(1);
          generatedNarrative += `${largestCategory} accounts for the largest portion at ${largestPercentage}% of the total. `;
          
          if (userContext) {
            generatedNarrative += `Considering your input "${userContext}", these proportions highlight key areas that may deserve additional focus or resources.`;
          } else {
            generatedNarrative += `Understanding this distribution can help prioritize resources and attention effectively.`;
          }
        } else if (chartType === 'scatter') {
          generatedNarrative = `This ${chartTitle ? chartTitle.toLowerCase() : 'scatter plot'} explores the relationship between ${headers[1]} and ${headers[2]}. `;
          
          // Simplified correlation description
          generatedNarrative += `The data points suggest a potential relationship between these variables that merits further investigation. `;
          
          if (userContext) {
            generatedNarrative += `Given your context "${userContext}", understanding this correlation could provide valuable insights for decision-making.`;
          } else {
            generatedNarrative += `Identifying such relationships can lead to better predictions and more informed strategic decisions.`;
          }
        }
      }
      
      setNarrative(generatedNarrative);
      setIsGenerating(false);
    }, 1500); // Simulate delay
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(narrative);
    toast.success('Narrative copied to clipboard');
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          Data Narrative
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Textarea
            placeholder="Provide additional context about your data (optional)"
            value={userContext}
            onChange={(e) => setUserContext(e.target.value)}
            className="h-24 resize-none border-gray-300 focus:border-storysheets-indigo focus:ring-storysheets-indigo/30"
          />
        </div>
        
        <Button
          className="gradient-button w-full"
          onClick={generateNarrative}
          disabled={isGenerating}
        >
          {isGenerating ? 'Generating Story...' : 'Generate Story ➔'}
        </Button>
        
        {narrative && (
          <div className="mt-4 relative">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-gray-800">{narrative}</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="absolute top-2 right-2"
              onClick={copyToClipboard}
            >
              <Copy className="h-4 w-4" />
              <span className="sr-only">Copy to clipboard</span>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default NarrativeGenerator;
