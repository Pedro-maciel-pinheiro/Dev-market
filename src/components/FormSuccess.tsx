
import { CheckCheckIcon } from "lucide-react";

interface FormSuccessProps {
  message?: string;
}

export const FormSucces = ({ message }: FormSuccessProps) => {
  if (!message) return null;

  return (
    <div className="bg-emerald-500/15 p-3
     rounded-md flex items-center gap-x-2 
     text-emerald-500 text-sm">
      <CheckCheckIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
