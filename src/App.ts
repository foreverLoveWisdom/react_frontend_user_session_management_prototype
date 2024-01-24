import { AuthContext } from "./context/AuthContext";
import { useAuth } from "./hooks/useAuth";

const App = () => {
  const { user, login, logout, setUser } = useAuth();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </AuthContext.Provider>
  );
};

export default App;
