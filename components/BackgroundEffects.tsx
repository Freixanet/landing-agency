import React from 'react';

export const BackgroundEffects: React.FC = () => {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none bg-subtle-grid opacity-30"></div>
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
    </>
  );
};