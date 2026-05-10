import { useState } from 'react';
import CategoryMode from '../inputs/CategoryMode'
import ManualMode from '../inputs/ManualMode'
import QuickEstimate from '../inputs/QuickEstimate'

const Tabs = ({ activeTab, onCalculate }) => {
    const [devices, setDevices] = useState([]);
    if (activeTab === 'quick-estimate') {
        return <QuickEstimate onCalculate={onCalculate} />
    }
    if (activeTab === 'category-mode') {
        return <CategoryMode onCalculate={onCalculate} />
    }
    if (activeTab === 'advanced-mode') {
        return <ManualMode 
        onCalculate={onCalculate}
        devices={devices}
        setDevices={setDevices}
         />
    }
}

export default Tabs