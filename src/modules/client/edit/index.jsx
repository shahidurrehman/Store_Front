import Tab from "common/components/tab";
import { useState } from "react";
import { useParams } from "react-router-dom";
import TopContainer from "../../../common/components/overview";
// import Tab from "../../../common/components/tab";
import TabNavbar from "../../../common/components/tab/nav-tab";
import { ClientTabItem } from "../../../common/components/tabsNav";
import ClientForm from "../components/client-form";
import Directors from "../components/directors";
import GroupStructure from "../components/group-structure";
import ClientServicesNew from "../components/service-new";
import ClientTaxStructure from "../components/tax-structure";
import ContactList from "../list/components/client-contact";

function EditClient() {

  const { clientId } = useParams();

  const [active, setActive] = useState(1);
  const handleToggle = (index) => {
    setActive(index);
  };

  const handleNext = (index) => {
    setActive(prev => prev + 1);
  };

  return (
    <>
      <TopContainer title="Edit Client" />
      <div className="page-body">
        <div className="container-xl">
          <div className="row">
            <div className="col-12 col-md-3 px-4 bg-white rounded">
              <div
                className="list-group list-group-transparent mb-3 ml-3 mt-3"
                role="button"
              >
                <TabNavbar
                  navItem={ClientTabItem}
                  active={active}
                  handleToggle={handleToggle}
                  disabled={clientId ? false : true}
                />
              </div>
            </div>
            {active === 1 && (
              <Tab title="General Information"
                component={<ClientForm handleNext={handleNext} clientId={clientId} />} />
            )}
            {active === 2 && (
              <Tab
                component={<ContactList clientId={clientId} />} button="Add Contact" />
            )}
            {active === 3 && (
              <Tab title="Ownership Structure" component={<Directors />} />
            )}
            {active === 4 && (
              <Tab title="Services" component={<ClientServicesNew clientId={clientId} />} />
            )}
            {active === 5 && (
              <Tab title="Group Structure" component={<GroupStructure clientId={clientId} />} />
            )}
            {active === 6 && (
              <Tab title="Tax Structure" component={<ClientTaxStructure clientId={clientId} />} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default EditClient;
