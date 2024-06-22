import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function CarStoreLayout({ children }) {
    return (
   
      
        <div>
        {children}
        <ToastContainer />
          </div> 
        
 
    );
  }
  