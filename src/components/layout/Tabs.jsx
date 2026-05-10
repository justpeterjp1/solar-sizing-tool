import CategoryMode from '../inputs/CategoryMode'
import ManualMode from '../inputs/ManualMode'
import QuickEstimate from '../inputs/QuickEstimate'

const Tabs = ({ activeTab, devices, setDevices, onCalculate }) => {
    if (activeTab === 'quick-estimate') {
        return <QuickEstimate onCalculate={onCalculate} />
    }
    if (activeTab === 'category-mode') {
        return <CategoryMode onCalculate={onCalculate} />
    }
    if (activeTab === 'advanced-mode') {
        return <ManualMode 
        devices={devices} 
        setDevices={setDevices} />
    }
}

export default Tabs