import { CheckOutRoute } from "modules/check_out/checkout-template-route";
import { ViewCartRoute } from "modules/view_cart/viewcart-template-route";
import {  WhishListRoute } from "modules/whishlist/whishlist-template.route";
import { AuthRoute } from "../modules/auth/auth.routes";
import { BusinessRoute } from "../modules/business/business.routes";
import { ClientRoute } from "../modules/client/client.routes";
import { HomeRoute } from "../modules/home/home.routes";
import { InvoiceRoute } from "../modules/invoice/invoice.routes";
import { ManagementRoute } from "../modules/management/management.routes";
import { SettingsRoute } from "../modules/settings/settings.routes";
import { StaffRoute } from "../modules/staff/staff.routes";
import { TaskRoute } from "../modules/task/task.routes";

export const ROUTES = [

    AuthRoute,
    HomeRoute,
    ClientRoute,
    // ServicesRoute,
    TaskRoute,
    StaffRoute,
    WhishListRoute,
    ViewCartRoute,
    CheckOutRoute,
    // InvoiceRoute,
    // ManagementRoute,
    // SettingsRoute,
    // BusinessRoute,

];
