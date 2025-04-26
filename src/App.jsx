import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./Utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchVideo from "./components/watchVideo";
function App() {


  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Body />,
      children:[
        {
          path:"/",
          element:<MainContainer />
        },
        {
          path:"watch",
          element:<WatchVideo />
        }
      ],
    }
  ])
  return (
    <>
    <Provider store={store}>
     <Head />
     <RouterProvider router={appRouter} />
    </Provider>
      
    </>
  )
}

export default App;
