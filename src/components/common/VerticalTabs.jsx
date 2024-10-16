import { useState } from 'react';

const VerticalTabs = () => {
  const [selectedTab, setSelectedTab] = useState('bank');

  const tabs = [
    {
      id: 'bank',
      label: 'Bank',
      content:
        'Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.',
    },
    { id: 'card', label: 'Card', content: 'Card Payment Content' },
    { id: 'emi', label: 'EMI', content: 'EMI Payment Content' },
  ];

  return (
    <div className='flex flex-col'>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`flex flex-col gap-y-3 ${
            selectedTab === tab.id ? 'mb-6' : 'mb-3'
          }`}
        >
          <label className='flex items-center'>
            <input
              type='radio'
              name='tabs'
              value={tab.id}
              checked={selectedTab === tab.id}
              onChange={() => setSelectedTab(tab.id)}
              className={`text-base font-normal cursor-pointer ${
                selectedTab === tab.id ? 'accent-black' : 'accent-[#9F9F9F]'
              }`}
            />
            <span
              className={`ml-4 text-base font-normal cursor-pointer ${
                selectedTab === tab.id ? 'text-black' : 'text-[#9F9F9F]'
              }`}
            >
              {tab.label}
            </span>
          </label>
          <div
            key={tab.id}
            className={`tab-content ${
              selectedTab === tab.id ? 'block' : 'hidden'
            }`}
          >
            <p className='text-base font-light text-[#9F9F9F]'>{tab.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalTabs;
