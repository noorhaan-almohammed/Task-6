function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-dark-blue">
      <div className="loader relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-b-gray-800 border-t-gray-800 dark:border-t-blue-900 dark:border-b-blue-900 border-l-transparent border-r-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-3 border-4 border-b-gray-400 border-t-gray-400 dark:border-t-blue-300 dark:border-b-blue-300 border-l-transparent border-r-transparent rounded-full animate-spin-reverse"></div>
      </div>
    </div>
  );
}

export default Loader;


