import React from 'react'
import Button from '../shared/Button'
import Tabs from './Tabs'

const MainLayout = () => {
  return (
        <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="flex border-b border-gray-200">
                <Button
                    className={`flex-1 px-6 py-4 text-center`}
                   onClick={() => {}} 
                    >
                  Quick Estimate
                </Button>
                <Button 
                className={`flex-1 px-6 py-4 text-center`}
                   onClick={() => {}} 
                    >
                  Category Mode
                </Button>
                <Button 
                className={`flex-1 px-6 py-4 text-center`}
                   onClick={() => {}} 
                    >
                  Advanced Mode
                </Button>
              </div>
              <div className="p-6">
                    <Tabs />
              </div>
            </div>
          </div>
  )
}

export default MainLayout