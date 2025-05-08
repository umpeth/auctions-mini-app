import React from "react";

interface SimpleLayoutProps {
  title?: string;
  children: React.ReactNode;
  isLoading?: boolean;
}

const SimpleLayout: React.FC<SimpleLayoutProps> = ({
  title,
  children,
  isLoading,
}) => {
  return (
    <main className="grow bg-white">
      {title && (
        <header className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl leading-tight font-bold tracking-tight text-gray-900">
              {title}
            </h1>
          </div>
        </header>
      )}
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        {isLoading ? (
          <div className="flex items-center justify-center">
            <div className="absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 transform text-center">
              <div className="mx-auto size-16 animate-spin rounded-full border-4 border-solid border-current border-t-transparent"></div>
              <p className="mt-4 text-lg font-semibold text-gray-700">
                Loading...
              </p>
            </div>
          </div>
        ) : (
          children
        )}
      </div>
    </main>
  );
};

export default SimpleLayout;
