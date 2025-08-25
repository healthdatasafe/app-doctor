import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getAppManaging } from "../services/dr-lib";
import type AppManagingAccount from "hds-lib-js/types/appTemplates/AppManagingAccount";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [appManaging, setAppManaging] = useState<AppManagingAccount | null | undefined>(undefined);
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      const app = getAppManaging();
      setAppManaging(app);
    };
    checkAuth();
  }, []);


  if (appManaging == null) {
    // return 'Should show login';
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}
