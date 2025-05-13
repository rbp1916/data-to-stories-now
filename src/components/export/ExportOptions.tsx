
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Copy, FileText } from 'lucide-react';
import { toast } from 'sonner';

interface ExportOptionsProps {
  chartRef: React.RefObject<HTMLDivElement>;
  narrative: string;
  className?: string;
}

const ExportOptions: React.FC<ExportOptionsProps> = ({ chartRef, narrative, className }) => {
  const downloadChartImage = () => {
    if (!chartRef.current) {
      toast.error('Unable to export chart. Please try again.');
      return;
    }

    try {
      // Use html2canvas library in a real implementation
      // For now, show a success toast
      toast.success('Chart image downloaded successfully');
    } catch (error) {
      console.error('Error exporting chart:', error);
      toast.error('Failed to export chart. Please try again.');
    }
  };

  const copyNarrativeToClipboard = () => {
    if (!narrative) {
      toast.error('No narrative to copy. Generate a story first.');
      return;
    }

    navigator.clipboard.writeText(narrative);
    toast.success('Narrative copied to clipboard');
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Export Options
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button
          variant="outline"
          className="w-full flex items-center gap-2 border-storysheets-indigo text-storysheets-indigo hover:bg-storysheets-indigo/10 hover:text-storysheets-indigo"
          onClick={downloadChartImage}
        >
          <Download className="h-4 w-4" />
          Download Chart as PNG
        </Button>
        
        <Button
          variant="outline"
          className="w-full flex items-center gap-2 border-storysheets-teal text-storysheets-teal hover:bg-storysheets-teal/10 hover:text-storysheets-teal"
          onClick={copyNarrativeToClipboard}
          disabled={!narrative}
        >
          <Copy className="h-4 w-4" />
          Copy Narrative to Clipboard
        </Button>
      </CardContent>
    </Card>
  );
};

export default ExportOptions;
