// 장고의 loginrequired 장식자(로그인 여부를 판단) 처럼 이를 리액트에서 구현
import { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";

export default function LoginRequiredPage(props) {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const isAuthenticated = Cookies(["access_token", "refresh_token"]);

  useEffect(() => {
    if (document.cookie.length > 0) {
      setIsAuthenticated(true);
    }
  }, []);

  if (isAuthenticated) {
    return props.component;
  }

  return (
    <Navigate to="/accounts/login" replace state={{ from: location.state }} />
  );
}
