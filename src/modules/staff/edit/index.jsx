import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import TopContainer from "../../../common/components/overview";
import Tab from "../../../common/components/tab";
import TabNavbar from "../../../common/components/tab/nav-tab";
import { NavItem } from "../../../common/components/tabsNav";
import { getUrlQueryParam } from "../../../common/utils/app.util";
import BankDetail from "../components/bank-detail";
import BasicInformation from "../components/basic-information";
import Education from "../components/education";
import GuardianInformation from "../components/guardian-information";
import LoginDetail from "../components/login-detail";
import NextOfKinInformation from "../components/next-of-kin-information";
import OtherInformation from "../components/other-information";
import PastExperience from "../components/past-experience";
import StatusOfEmplyeement from "../components/status-of-emplyeement";

function EditStaff() {
  const { staffId } = useParams();

  const [active, setActive] = useState(1);

  const handleToggle = (index) => {
    setActive(index);
  };

  const handleNext = (index) => {
    setActive(prev => prev + 1);
  };


  return (
    <>
    {staffId ?
      <TopContainer title="Update Staff" />
      :
      <TopContainer title="Add Staff" />
    }

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
                  disable={staffId ? false : true}
                />
              </div>
            </div>
            {active === 1 && (
              <Tab
                title="Basic Information"
                component={<BasicInformation handleNext={handleNext} staffId={staffId} />}
              />
            )}
            {active === 2 && (
              <Tab
                title="Guardian Information"
                component={<GuardianInformation staffId={staffId} handleNext={handleNext} />}
              />
            )}
            {active === 3 && (
              <Tab
                title="Next of Kin (To be contacted in case of emergency)"
                component={<NextOfKinInformation staffId={staffId} handleNext={handleNext} />}
              />
            )}
            {active === 4 && (
              <Tab title="Bank Account Details" component={<BankDetail staffId={staffId} handleNext={handleNext} />} />
            )}
            {active === 5 && (
              <Tab
                title="Employment & Qualification"
                component={<StatusOfEmplyeement staffId={staffId} handleNext={handleNext} />}
              />
            )}
            {active === 6 && (
              <Tab
                title="Education"
                component={<Education staffId={staffId} handleNext={handleNext} />}
              />
            )}
            {active === 7 && (
              <Tab
                title="Past Experience"
                component={<PastExperience staffId={staffId} handleNext={handleNext} />}
              />
            )}
            {active === 8 && (
              <Tab title="Other Information" component={<OtherInformation staffId={staffId} handleNext={handleNext} />} />
            )}

            {active === 9 && (
              <Tab title="Login Detail" component={<LoginDetail staffId={staffId} handleNext={handleNext} />} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default EditStaff;
