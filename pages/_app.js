import '../styles/bootstrap.min.css'
import '../styles/flaticon.css'
import '../styles/fontawesome.min.css'
import '../node_modules/react-modal-video/css/modal-video.min.css'
import 'react-accessible-accordion/dist/fancy-example.css'
import 'react-image-lightbox/style.css'
import '../styles/style.css'
import '../styles/responsive.css'

import Layout from '../components/_App/Layout';

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp