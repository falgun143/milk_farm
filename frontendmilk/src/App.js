import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect} from "react";
import SummaryApi from "./common";
import Context from "./context";
import { useDispatch } from "react-redux";
import { loginRedux } from "./store/userSlice";
import $ from "jquery";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const dispatch = useDispatch();

  const fetchUserDetails = async () => {
    const dataResponse = await fetch(SummaryApi.current_user.url, {
      method: SummaryApi.current_user.method,
      credentials: "include",
    });

    const dataApi = await dataResponse.json();
    console.log(dataApi);
    if (dataApi.success) {
      dispatch(loginRedux(dataApi.data));
    }
  };

  useEffect(() => {
    /**user Details */
    fetchUserDetails();
  }, []);

  useEffect(() => {
    const spinner = function () {
      setTimeout(function () {
        if ($("#spinner").length > 0) {
          $("#spinner").removeClass("show");
        }
      }, 1);
    };
    spinner();
  }, []);

  return (
    <>
      <Context.Provider
        value={{
          fetchUserDetails, // user detail fetch
        }}
      >
        {/* Spinner Start */}
        <div
          id="spinner"
          className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div
            className="spinner-border position-relative text-primary"
            style={{ width: "6rem", height: "6rem" }}
            role="status"
          ></div>
          <img
            className="position-absolute top-50 start-50 translate-middle"
            src="img/icons/icon-1.png"
            alt="Icon"
          />
        </div>
        {/* Spinner End */}
        <Header />
        <ScrollToTop />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          style={{ width: "auto", maxWidth: "500px" }} // Adjust the width of the ToastContainer
        />
        <Outlet />
        <Footer />
      </Context.Provider>
    </>
  );
}

export default App;
