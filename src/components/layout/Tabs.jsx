import CategoryMode from '../inputs/CategoryMode'
import ManualMode from '../inputs/ManualMode'
import QuickEstimate from '../inputs/QuickEstimate'

const Tabs = ({ activeTab }) => {
    if (activeTab === 'quick-estimate') {
        return <QuickEstimate />
    }
    if (activeTab === 'category-mode') {
        return <CategoryMode />
    }
    if (activeTab === 'advanced-mode') {
        return <ManualMode />
    }
}

export default Tabs