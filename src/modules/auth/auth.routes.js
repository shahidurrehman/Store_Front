import Signin from "./signin";
import { AuthModule } from "./AuthModule";
import EmailVerification from "./VerifyEmail";
import ChangePassword from "./change-password";
import ForgotPassword from "./forgotpassword/forgot-password";
import ForgotPasswordComplete from "./forgotpassword/forgot-password-complete";
import CompleteEmailVerification from "./email-verification";


export const AuthRoute = {
  title: "Auth",
  path: "/auth",
  // icon: HomeIcon,
  component: AuthModule,
  guard: false,
  subRoutes: [
    { path: "signin", component: Signin, },
    { path: "forgot-password", component: ForgotPassword, },
    { path: "change-password", component: ChangePassword, },
    { path: "forgot-password-complete", component: ForgotPasswordComplete },
    { path: "complete-email-verification", component: CompleteEmailVerification },
  ],
};
