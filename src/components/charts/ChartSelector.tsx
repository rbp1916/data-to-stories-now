
import { useState } from 'react';
import { ChartType } from 'chart.js';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChartOption {
  type: ChartType;
  name: string;
  icon: React.ReactNode;
}

interface ChartSelectorProps {
  currentType: ChartType;
  onSelectChart: (chartType: ChartType) => void;
  className?: string;
}

const chartOptions: ChartOption[] = [
  {
    type: 'bar',
    name: 'Bar Chart',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="12" width="4" height="8" />
        <rect x="10" y="8" width="4" height="12" />
        <rect x="17" y="4" width="4" height="16" />
      </svg>
    )
  },
  {
    type: 'line',
    name: 'Line Chart',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    )
  },
  {
    type: 'pie',
    name: 'Pie Chart',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
        <path d="M22 12A10 10 0 0 0 12 2v10z" />
      </svg>
    )
  },
  {
    type: 'scatter',
    name: 'Scatter Plot',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="7.5" cy="7.5" r="2" />
        <circle cx="16.5" cy="7.5" r="2" />
        <circle cx="7.5" cy="16.5" r="2" />
        <circle cx="16.5" cy="16.5" r="2" />
      </svg>
    )
  }
];

const ChartSelector: React.FC<ChartSelectorProps> = ({ currentType, onSelectChart, className }) => {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {chartOptions.map((option) => (
        <button
          key={option.type}
          onClick={() => onSelectChart(option.type)}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-lg border transition-all",
            currentType === option.type
              ? "border-storysheets-indigo bg-storysheets-indigo/10 text-storysheets-indigo shadow-sm"
              : "border-gray-200 hover:border-storysheets-indigo/30 hover:bg-gray-50"
          )}
        >
          <span className="w-5 h-5">{option.icon}</span>
          <span>{option.name}</span>
          {currentType === option.type && (
            <Check className="w-4 h-4 text-storysheets-indigo ml-1" />
          )}
        </button>
      ))}
    </div>
  );
};

export default ChartSelector;
