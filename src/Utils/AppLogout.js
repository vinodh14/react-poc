import { useEffect } from "react";
import { useSelector } from "react-redux";

const events = [
    "load",
    "mousemove",
    "mousedown",
    "click",
    "scroll",
    "keypress",
  ];
  
  export const AppLogout = () => {
    const state = useSelector((state) => state.handleAuth);
    const { isLoggedIn } = state;
    let timer;
  
  const handleLogoutTimer = () => {
    timer = setTimeout(() => {
      resetTimer();
      events.forEach((item) => {
        window.removeEventListener(item, resetTimer);
      });

      logoutAction();
    }, 5000);
  };
  
  const resetTimer = () => {
    if (timer) clearTimeout(timer);
  };

  useEffect(() => {
    events.forEach((item) => {
      window.addEventListener(item, () => {
        resetTimer();
        handleLogoutTimer();
      });
    });
  }, []);
  
  const logoutAction = () => {
    localStorage.clear();
    window.location.pathname = "/";
  };
  
    //return children;
}