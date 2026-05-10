import { useState } from 'react';

import CategoryMode from '../inputs/CategoryMode';
import ManualMode from '../inputs/ManualMode';
import QuickEstimate from '../inputs/QuickEstimate';

import ConfirmModal from '../shared/ConfirmModal';

const Tabs = ({ activeTab, onCalculate }) => {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(false);

  const [modal, setModal] = useState(null);

  let content;

  if (activeTab === 'quick-estimate') {
    content = (
      <QuickEstimate
        loading={loading}
        setLoading={setLoading}
        onCalculate={onCalculate}
        setModal={setModal}
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
    <>
      {content}

      {modal && (
        <ConfirmModal
          modal={modal}
          onClose={() => setModal(null)}
        />
      )}
    </>
  );
};

export default Tabs;