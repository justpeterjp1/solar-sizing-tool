import { useState } from 'react';
import CategoryMode from '../inputs/CategoryMode'
import ManualMode from '../inputs/ManualMode'
import QuickEstimate from '../inputs/QuickEstimate'

const Tabs = ({ activeTab, onCalculate }) => {
    const [devices, setDevices] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState(false);
    if (activeTab === 'quick-estimate') {
        return <QuickEstimate 
                loading={loading}
                setLoading={setLoading}
                onCalculate={onCalculate} />
    }
    if (activeTab === 'category-mode') {
        return <CategoryMode    
                loading={loading}
                setLoading={setLoading}
                onCalculate={onCalculate} />
    }
    if (activeTab === 'advanced-mode') {
        return <ManualMode 
        onCalculate={onCalculate}
        devices={devices}
        setDevices={setDevices}
        loading={loading}
        setLoading={setLoading}
         />
    }
}

export default Tabs