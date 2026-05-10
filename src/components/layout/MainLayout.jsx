import{ useState } from 'react'
import Button from '../shared/Button'
import Tabs from './Tabs'

const MainLayout = () => {
  const [activeTab, setActiveTab] = useState('quick-estimate')
  const [devices, setDevices] = useState([]);

  function handleTabChange(tab) {
    setActiveTab(tab)
    
  }

  return (
        <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="flex border-b border-gray-200">
                <Button
                    className={`flex-1 px-6 py-4 text-center ${activeTab === 'quick-estimate' ? 'active-tab' : ''}`}
                   onClick={() => handleTabChange('quick-estimate')} 
                    >
                  Quick Estimate
                </Button>
                <Button 
                className={`flex-1 px-6 py-4 text-center ${activeTab === 'category-mode' ? 'active-tab' : ''}`}
                   onClick={() => handleTabChange('category-mode')} 
                    >
                  Category Mode
                </Button>
                <Button 
                className={`flex-1 px-6 py-4 text-center ${activeTab === 'advanced-mode' ? 'active-tab' : ''}`}
                   onClick={() => handleTabChange('advanced-mode')} 
                    >
                  Advanced Mode
                </Button>
              </div>
              <div className="p-6">
                    <Tabs activeTab={activeTab} devices={devices} setDevices={setDevices} />
              </div>
            </div>      
          </div>
  )
}

export default MainLayout