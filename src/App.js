import React, { useEffect, useState, createContext, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import CookieConsent from 'react-cookie-consent';
import Cookies from 'js-cookie';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = React.lazy(() => import('./components/partials/Header'));
const AboutPage = React.lazy(() => import('./components/AboutPage'));
const HomePage = React.lazy(() => import('./components/HomePage'));
const DetailsPage = React.lazy(() => import('./components/DetailsPage'));

export const Context = createContext({});

function App() {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const cookieConsent = Cookies.get('CookieConsent');

    useEffect(() => {
        const getData = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const result = await res.json();
            setData(result);
            setIsLoading(false);
        };
        getData();
    }, []);

    return (
        <Context.Provider value={{ data, isLoading }}>
            <Router>
                <Suspense
                    fallback={
                        <div className="spinner-container">
                            <Spinner animation="border" />
                        </div>
                    }
                >
                    <Header />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/users" component={AboutPage} />
                        <Route path="/:username" component={DetailsPage} />
                    </Switch>
                </Suspense>
                {!cookieConsent && (
                    <CookieConsent debug={true} expires={365}>
                        This site uses cookies to provide you with great experience. See our{' '}
                        <a href="/privacy">privacy policy</a> for more.
                    </CookieConsent>
                )}
            </Router>
        </Context.Provider>
    );
}

export default App;
