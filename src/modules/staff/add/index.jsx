import React, { useState, useEffect } from "react";
import TopContainer from "../../../common/components/overview";
import Tab from "../../../common/components/tab";
import TabNavbar from "../../../common/components/tab/nav-tab";
import { NavItem } from "../../../common/components/tabsNav";
import { getUrlQueryParam } from "../../../common/utils/app.util";
import BasicInformation from "../components/basic-information";
import PersonalInformation from "../components/basic-information";


function AddStaff() {
  const [active, setActive] = useState(1);

  const handleToggle = (index) => {
    setActive(index);
  };

  const handleNext = (index) => {
    setActive(prev => prev + 1);
  };

  useEffect(() => {
    const code = getUrlQueryParam("code");
    if (code) {
      setActive(9);
    }
  }, []);

  return (
    <>
      <TopContainer title="Add Staff" />

      <div className="page-body">
        <div className="container-xl">
          <div className="row">
            <div className="col-12 col-md-3 px-4 bg-white rounded">
              <div
                className="list-group list-group-transparent mb-3 ml-3 mt-3 "
                role="button"
              >
                <TabNavbar
                  handleToggle={handleToggle}
                  active={active}
                  navItem={NavItem}
                  disable={true}
                />
              </div>
            </div>
            {active === 1 && (
              <Tab
                title="Basic Information"
                component={<BasicInformation handleNext={handleNext} />}
              />
            )}
            {/* {active === 2 && (
              <Tab
                title="Guardian Information"
                component={<GuardianInformation />}
              />
            )}
            {active === 3 && (
              <Tab
                title="Next Of Kin (To be contacted in case of emergency)"
                component={<NextOfKinInformation />}
              />
            )}
            {active === 4 && (
              <Tab title="Bank Account Detail" component={<BankDetail />} />
            )}
            {active === 5 && (
              <Tab
                title=" Status Of Employment & Qualification"
                component={<StatusOfEmplyeement />}
              />
            )}
            {active === 6 && (
              <Tab
                title="Education (Professional and latest two)"
                component={<Education />}
              />
            )}
            {active === 7 && (
              <Tab
                title="Past Experience (If any)"
                component={<PastExperience />}
              />
            )}
            {active === 8 && (
              <Tab title="Other Information" component={<OtherInformation />} />
            )}

            {active === 9 && (
              <Tab title="Login Detail" component={<LoginDetail />} />
            )} */}
          </div>
        </div>
      </div>
    </>
  );
}

export default AddStaff;
