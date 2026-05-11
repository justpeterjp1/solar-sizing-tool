import { useState } from 'react';
import ResultsSection from '@/components/output/ResultsSection'
import Header from '../components/layout/Header'
import MainLayout from '../components/layout/MainLayout'


import './App.css'

function App() {
    const [ results, setResults ] = useState('');
 
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <MainLayout onCalculate={setResults} />
          <div
          
           className="p-6 border rounded-lg">
            <ResultsSection results={results} />
        </div>
    
        </div>
      </main>
    </>
  )
}

export default App
