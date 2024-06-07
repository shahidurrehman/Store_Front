import React, { useState } from "react";
import TopContainer from "../../../common/components/overview";
import Tab from "../../../common/components/tab";
import TabNavbar from "../../../common/components/tab/nav-tab";
import { SettingTabItem } from "../../../common/components/tabsNav";
import BasicInfo from "./component/basic-info";
import ChangeEmail from "./component/change-email";
import ChangePassword from "./component/change-password";

function Setting() {
  const [active, setActive] = useState(1);

  const handleToggle = (index) => {
    setActive(index);
  };
  return (
    <>
      <TopContainer title="Setting" />

      <div className="page-body">
        <div className="container-xl">
          <div className="row">
            <div className="col-12 col-md-3 px-4 bg-white rounded">
              <div
                className="list-group list-group-transparent mb-3 mt-3 ml-3 "
                role="button"
              >
                <TabNavbar
                  navItem={SettingTabItem}
                  active={active}
                  handleToggle={handleToggle}
                />
              </div>
            </div>         
            {active === 1 && (
              <Tab title="Basic Information" component={<BasicInfo />} />
            )}
            {active === 2 && (
              <Tab title="Change Password" component={<ChangePassword />} />
            )}
            {active === 3 && (
              <Tab title="Change Email" component={<ChangeEmail />} />
            )}

          </div>
        </div>
      </div>
    </>
  );
}

export default Setting;
