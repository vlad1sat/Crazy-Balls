import React, {StrictMode} from "react";
import App from "./App";
import * as ReactDOMClient from 'react-dom/client';
import './css/style.css';

const app = ReactDOMClient.createRoot(document.getElementById('app'));
app.render(<StrictMode>
    <App />
</StrictMode>);