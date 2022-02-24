import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';
import { useSelector } from 'react-redux';
import Loading from './Loading';

function Layout(props) {
   const isLoading = useSelector(state => state.request.loading);
    return ( 
        <div>
            <MainNavigation />
            {isLoading && <Loading />}
            <main className={classes.main}>
                {!isLoading && props.children}
            </main>
        </div>
    )
}

export default Layout;