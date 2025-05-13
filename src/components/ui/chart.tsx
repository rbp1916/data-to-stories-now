
import * as React from "react";

// This is an empty chart component that can be customized as needed
export const Chart = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={className}
    {...props}
  />
));

Chart.displayName = "Chart";
