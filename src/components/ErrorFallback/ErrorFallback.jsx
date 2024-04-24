import { Button } from "@mui/material";
import React from "react";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <p className="text-red-400 font-semibold">Something went wrong:</p>
      <pre className="font-mono my-4">{error.message}</pre>
      <Button color="error" variant="outlined" onClick={resetErrorBoundary}>
        Reset
      </Button>
    </div>
  );
};

export default ErrorFallback;
