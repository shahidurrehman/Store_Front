import React, { useState } from "react";
import TopContainer from "../../../common/components/overview";
import Tab from "../../../common/components/tab";
import TabNavbar from "../../../common/components/tab/nav-tab";
import { ClientOneTabItem, ClientTabItem } from "../../../common/components/tabsNav";
import ClientForm from "../components/client-form";

function AddClient() {

  const [active, setActive] = useState(1);

  const handleToggle = (index) => {
    setActive(index);
  };

  const handleNext = (index) => {
    setActive(prev => prev + 1);
  };


  return (
    <>
      <TopContainer title="Add Client" />

      <div className="page-body">
        <div className="container-xl">
          <div className="row">
            <div className="col-12 col-md-3 px-4 bg-white rounded">
              <div
                className="list-group list-group-transparent mb-3 ml-3 mt-3"
                role="button"
              >
                <TabNavbar
                  navItem={ClientOneTabItem}
                  active={active}
                  handleToggle={handleToggle}
                  disable={true}
                />
              </div>
            </div>
            {active === 1 && (
              <Tab title="General Information"
                component={<ClientForm />} />
            )}
            {/* {active === 2 && (
              <Tab title="Contact" component={<ClientContact />} />
            )}
            {active === 3 && (
              <Tab title="Directors" component={<Directors />} />
            )} */}
          </div>
        </div>
      </div>
    </>
  );
}

export default AddClient;
