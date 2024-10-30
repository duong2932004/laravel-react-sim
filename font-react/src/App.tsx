// App.tsx
import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "@/routes";
import LayoutMain from "@/layouts/LayoutMain";
import { FC } from "react";
import { ChildrenITF } from "@/interface/Children";
import ScrollToTop from "@/components/ScrollToTop";
import { PreviousPathProvider } from "@/contexts/PreviousPathContext";

function App() {
  return (
    <Router>
      <PreviousPathProvider>
        <ScrollToTop />
        <div className="App">
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              let Layout: FC<ChildrenITF> = LayoutMain;

              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }

              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </PreviousPathProvider>
    </Router>
  );
}

export default App;
