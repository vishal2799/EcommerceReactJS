/* eslint-disable react/prop-types */
import { useState } from 'react';
const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };
  return (
    <div className='mx-auto'>
      <div className='flex overflow-x-scroll gap-x-9 md:overflow-x-hidden md:gap-x-12 md:justify-center mb-8'>
        {children.map((child) => (
          <button
            key={child.props.label}
            className={`${
              activeTab === child.props.label
                ? 'text-black font-medium'
                : 'text-[#9F9F9F] font-normal'
            } text-2xl text-nowrap`}
            onClick={(e) => handleClick(e, child.props.label)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className='py-1'>
        {children.map((child) => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};
const Tab = ({ label, children }) => {
  return (
    <div label={label} className='hidden'>
      {children}
    </div>
  );
};
export { Tabs, Tab };
