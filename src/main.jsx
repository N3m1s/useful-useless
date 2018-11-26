import * as React from 'react';
import { render } from 'react-dom';
import 'whatwg-fetch';
import 'bulma/css/bulma.css';
import Layout from './components/Layout';

const root = document.getElementById('root');

render(<Layout />, root);
