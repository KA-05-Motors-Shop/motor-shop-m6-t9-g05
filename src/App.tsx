import { Toaster } from "react-hot-toast";
import Router from "./routes";

const App = () => {
  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            fontFamily: "Inter, sans-serif",
          },
        }}
      />
      <Router />
    </>
  );
};

export default App;
