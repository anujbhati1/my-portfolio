import React from 'react';

interface TitleInfoProps {
  icon?: string;
  name: string;
}

function TitleInfo({ icon, name }: TitleInfoProps) {
  return (
    <div>
      <div className="flex justify-center items-center px-4 py-2 rounded-xl bg-primary/10">
        <span className="mr-1">{icon}</span>
        <span className="text-primary text-sm font-bold">{name}</span>
      </div>
    </div>
  );
}

export default TitleInfo;
