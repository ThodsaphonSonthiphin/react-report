import React, { useState, useEffect } from 'react';
import './App.css';
import { Invoice } from "./report/Invoice";
import { PDFViewer } from "@react-pdf/renderer";
import { invoiceData } from './Data/invoice-data';

function App() {
    // State to store the dynamic height
    const [viewerHeight, setViewerHeight] = useState(window.innerHeight);

    useEffect(() => {
        // Function to update the height
        const handleResize = () => {
            setViewerHeight(window.innerHeight);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up function to remove the event listener
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty dependency array means this effect runs only once on mount

    return (
        <div className="App">
            <PDFViewer width="1000" height={viewerHeight} className="app">
                <Invoice invoice={invoiceData} />
            </PDFViewer>
        </div>
    );
}

export default App;
