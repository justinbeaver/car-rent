import { MediaQueriesProvider } from "./context/mediaQueriesContext";

function App() {
  return (
    <MediaQueriesProvider>
      <div>App</div>
    </MediaQueriesProvider>
  );
}
export default App;
