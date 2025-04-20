import { Loader } from "lucide-react";

const LoaderState = () => {
  return (
    <div className="w-full h-full my-12 rounded-2xl flex gap-2 items-center justify-center">
      <Loader className="w-6 h-6 animate-spin" /> Loading...
    </div>
  );
};

export default LoaderState;
