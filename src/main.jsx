import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { redirectHandler } from "./pages/RedirectPage.jsx";
import Privacy from "./pages/Privacy.jsx";

// BrowserRouter 경로를 HashRouter 경로로 리디렉트
function redirectToHashIfNeeded() {
  const { pathname, search, hash } = window.location;
  // 이미 해시 라우팅이면 무시
  if (hash.startsWith("#/")) return;
  // root만 예외로 두고 싶으면 아래 조건 추가
  if (pathname === "/" && !search) return;
  const newHash = `#${pathname}${search}`;
  window.location.replace(newHash);
}

redirectToHashIfNeeded();

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
  {
    path: "/form",
    element: redirectHandler(
      "https://docs.google.com/forms/d/e/1FAIpQLScoN19fAklBenQlIPES3KYiInuK26iAkyHka6iPTnPdFRKwlQ/viewform?usp=sf_link"
    ),
  },
  {
    path: "/ios",
    element: redirectHandler(
      "https://apps.apple.com/app/%EB%B9%A0%EB%A5%B8-%EC%83%81%EC%83%81%EB%9E%A9/id6648756420"
    ),
  },
  {
    path: "/android",
    element: redirectHandler(
      "https://docs.google.com/forms/d/e/1FAIpQLSfJLIpDF_AaLXocA-saLB3ndBU5Yjjrrts47SH2SVItbPUvAw/viewform?usp=sf_link"
    ),
  },
  {
    path: "*",
    element: <App />, // NotFound 처리: 홈으로
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
