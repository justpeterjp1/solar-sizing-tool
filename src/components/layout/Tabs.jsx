import { useState } from 'react';
import { motion } from "framer-motion";
import CategoryMode from '../inputs/CategoryMode';
import ManualMode from '../inputs/ManualMode';
import QuickEstimate from '../inputs/QuickEstimate';

const Tabs = ({ activeTab, onCalculate }) => {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(false);

  let content;

  if (activeTab === 'quick-estimate') {
    content = (
      <QuickEstimate
        loading={loading}
        setLoading={setLoading}
        onCalculate={onCalculate}
      />
    );
  }

  if (activeTab === 'category-mode') {
    content = (
      <CategoryMode
        loading={loading}
        setLoading={setLoading}
        onCalculate={onCalculate}
      />
    );
  }

  if (activeTab === 'advanced-mode') {
    content = (
      <ManualMode
        onCalculate={onCalculate}
        devices={devices}
        setDevices={setDevices}
        loading={loading}
        setLoading={setLoading}
      />
    );
  }

  return (
    <motion.div
  key={activeTab}
  initial={{ opacity: 0, y: 5 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.2 }}
>
      {content}

    </motion.div>
  );
};

export default Tabs;