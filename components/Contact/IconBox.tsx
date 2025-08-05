import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}

const IconBox = ({ title, children, icon }: Props) => {
  return (
    <div className="flex items-start justify-between gap-1 p-5 border border-gray-100 bg-white drop-shadow rounded-[12px]">
      <div className="flex flex-col gap-1 text-gray-900">
        <p className="text-gray-700 text-sm">{title}</p>
        {children}
      </div>
      <div className="flex items-center justify-center rounded-full bg-primary w-10 h-[40px] text-white shrink-0">
        {icon}
      </div>
    </div>
  );
};

export default IconBox;
