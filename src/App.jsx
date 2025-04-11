import './App.css'
import InvoiceForm from './components/Invoiceform'
import Header from './components/Header'
import PdfViewer from './components/PdfViewer'

function App() {
  
  return (
    <div >
      <Header/>
      <div className='flex'>
      <PdfViewer/>
      <InvoiceForm/>
      </div>
   
    </div>
  )
}

export default App
