
import React, { createContext, useState, ReactNode } from 'react';

interface DataContextType {
  data: {
    rawData: string[][];
    fileName: string;
  } | null;
  setData: React.Dispatch<React.SetStateAction<{
    rawData: string[][];
    fileName: string;
  } | null>>;
}

export const DataContext = createContext<DataContextType>({
  data: null,
  setData: () => null,
});

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<{
    rawData: string[][];
    fileName: string;
  } | null>(null);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
