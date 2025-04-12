import './App.css'
import InvoiceForm from './components/Invoiceform'
import Header from './components/Header'
import PdfViewer from './components/PdfViewer'


function App() {
  
  return (
    <div >
     
      <Header/>
      <div className='flex flex-col md:flex md:flex-row md:justify-around '>
        <div className='w-full'>
      <PdfViewer/>
      </div>
      <div className='w-full'>
      <InvoiceForm/>
      </div>
      </div>
      
    </div>
  )
}

export default App
