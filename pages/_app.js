/* eslint-disable react/prop-types */
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
// import { AuthProvider } from '../utils/context/authContext'; // TODO: COMMENT IN FOR AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/ViewDirector'; // TODO: COMMENT IN FOR AUTH

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* TODO: Delete NoAuth component above and comment in code below for authentication */}
      {/* <AuthProvider>
        <ViewDirectorBasedOnUserAuthStatus
          component={Component}
          pageProps={pageProps}
        />
      </AuthProvider> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
