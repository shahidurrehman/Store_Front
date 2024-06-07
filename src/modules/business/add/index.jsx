import React, { useState } from "react";
import TopContainer from "../../../common/components/overview";
import Tab from "../../../common/components/tab";
import TabNavbar from "../../../common/components/tab/nav-tab";
import { BusinessTabItem, SettingTabItem } from "../../../common/components/tabsNav";
import BusinessInformation from "../../business/add/component/business-info";
import BusniessList from "../list";
import BusinessOffices from "./component/business-offices";
import TaxStructure from "./component/tax-structure";

function Business() {
  const [active, setActive] = useState(1);

  const handleToggle = (index) => {
    setActive(index);
  };
  return (
    <>
      <TopContainer title="Business Information" />

      <div className="page-body">
        <div className="container-xl">
          <div className="row">
            <div className="col-12 col-md-3 px-4 bg-white rounded">
              <div
                className="list-group list-group-transparent mb-3 mt-3 ml-3 "
                role="button"
              >
                <TabNavbar
                  navItem={BusinessTabItem}
                  active={active}
                  handleToggle={handleToggle}
                />
              </div>
            </div>
            {active === 1 && (
              <Tab title="Busniess Information" component={<BusinessInformation />} />
            )}
            {active === 2 && (
              <Tab title="Busniess Offices" component={<BusniessList />} />
            )}
             {active === 3 && (
              <Tab title="Tax Structure" component={<TaxStructure />} />
            )}

          </div>
        </div>
      </div>
    </>
  );
}

export default Business;
