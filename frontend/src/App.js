import { useEffect } from "react";
import AppRoutes from "./AppRoutes";
import AuthRoute from "./components/AuthRoute/AuthRoute";
import Header from "./components/Header/Header";
import NavMenu from "./components/NavMenu/NavMenu";
import { useAuth } from "./hooks/useAuth";
import Admin from "./admin/Admin";

function App() {
  const { user } = useAuth();
  console.log(user);
  let ok;
  if (user) {
    ok = user.isAdmin;
  } else ok = false;

  return (
    <>
      {ok ? (
        <AuthRoute>
          <Admin />
        </AuthRoute>
      ) : (
        <>
          <Header />
          <AppRoutes />
        </>
      )}
    </>
  );
}

export default App;
