import { FileUp } from "lucide-react";

const PageHeader = () => {
  return (
    <header className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-[1rem]">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
          <FileUp className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-blue-900">Data Import</h1>
          <p className="mt-1 text-sm text-gray-600">
            Streamline the enrollment process by uploading a single data file.
          </p>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
