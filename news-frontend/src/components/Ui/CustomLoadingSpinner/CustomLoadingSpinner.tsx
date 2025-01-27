const CustomLoadingSpinner = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-transparent backdrop-blur-sm">
      <div className="h-16 w-16 animate-spin rounded-full border-t-2 border-b-2 border-blue-500" />
    </div>
  );
};

export default CustomLoadingSpinner;
