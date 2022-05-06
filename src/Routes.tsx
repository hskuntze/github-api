import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Search from 'pages/Search';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

const Routes = () => {
    return(
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />}/>
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;