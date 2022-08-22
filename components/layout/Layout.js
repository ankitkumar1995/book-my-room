/** @format */
import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";
const Layout = ({ children, title = "Book best hotels for your day" }) => {
  return (
    <div>
      <Head>
        <meta charSet='UTF-8'></meta>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'></meta>
        <link
          rel='stylesheet'
          type='text/css'
          href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
        />
        <title>{title}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
