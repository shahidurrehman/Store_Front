import { clientGetCompaniesByIdAction } from "app-redux/client/clientActions";
import { selectClientCompanies } from "app-redux/client/clientSlice";
import { useAppDispatch, useAppSelector } from "app-redux/hooks";
import IconAddPlus from "assets/icons/add_plus";
import Button from "common/components/button";
import CInput from "common/components/c_input";
import { useFormik } from "formik";
import { useEffect, useState } from "react";

// const holdingCompanyitems = {
//   holdingName: "",
// }

const associatedCompanyitems = {
  associatedName: "",
}
const subsidiariesItems = {
  subsidiariesName: "",
}
// const companiesItems = {
//   clientCompanyId: 0,
//   clientId: 0,
//   companyName: "",
//   companyType: ""
// }
function GroupStructure({ clientId }) {

  const dispatch = useAppDispatch();
  const clientCompanies = useAppSelector(selectClientCompanies)

  const [holdingCompanyId, setHoldingCompanyId] = useState(0);
  const [associated, setAssociated] = useState([]);
  const [subsidiary, setSubsidiary] = useState([]);

  const [messages, setMessages] = useState("");
  const [isFormik, setIsFormik] = useState(false);

  // const [show, setShow] = useState(false);
  const formik = useFormik({
    initialValues: {
      // companies: [companiesItems],
      holdingCompany: [],
      associatedCompany: [associated],
      Subsidiaries: [subsidiary],
    },
    // validationSchema: signinFormValidation,
    onSubmit: (values) => {

      const holdingCompanies = {
        
      }


      const model = {
        companies: values.companies
        //  holdingCompanyitems: values.holdingCompany,
        // associatedCompanyitems: values.associatedCompany,
        // subsidiariesItems: values.Subsidiaries,
      };
      console.log("model", values);
    },
  });

  const addNewHolding = () => {
    const { holdingCompany } = formik.values;
    formik.setFieldValue("holdingCompany", [...holdingCompany, ""]);
  };

  const addAssociate = () => {
    const { associatedCompany } = formik.values;
    formik.setFieldValue("associatedCompany", [...associatedCompany, associatedCompanyitems])
  }

  const addSubsidiaries = () => {
    const { Subsidiaries } = formik.values;
    formik.setFieldValue("Subsidiaries", [...Subsidiaries, subsidiariesItems])
  }

  const concatHoldingCompanyNames = (holdingCompany) => {
    return holdingCompany.reduce((acc, cur) => {
      return acc + cur.holdingName + ' ';
    }, '').trim();
  }

  const concatAssociatedCompanyNames = (holdingCompany) => {
    return holdingCompany.reduce((acc, cur) => {
      return acc + cur.associatedName + ' ';
    }, '').trim();
  }
  const concatSubsadriesCompanyNames = (holdingCompany) => {
    return holdingCompany.reduce((acc, cur) => {
      return acc + cur.subsidiariesName + ' ';
    }, '').trim();
  }

  useEffect(() => {
    if (clientId && clientId)
      dispatch(clientGetCompaniesByIdAction(clientId))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientId])

  useEffect(() => {
    if (clientCompanies && clientCompanies.data) {
      const companiesData = clientCompanies.data;

      const holdingCompanies = companiesData.filter(r => r.companyType === "Holding");
      if (holdingCompanies != null && holdingCompanies.length > 0) {
        formik.setFieldValue("holdingCompany", holdingCompanies[0].companyName.split(','));
        setHoldingCompanyId(holdingCompanies[0].clientCompanyId)
      }
      else formik.setFieldValue("holdingCompany", "");


      const associatedCompanies = companiesData.filter(r => r.companyType === "Associated");
      const associated = associatedCompanies != null && associatedCompanies.length > 0 ? associatedCompanies[0].companyName.split(',') : [];
      setAssociated(associated);

      const subsidiaryCompanies = companiesData.filter(r => r.companyType === "Subsidiary");
      const subsidiares = subsidiaryCompanies != null && subsidiaryCompanies.length > 0 ? subsidiaryCompanies[0].companyName.split(',') : [];
      setSubsidiary(subsidiares);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientCompanies]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className=" row-xl-12 ">
        {formik.values.holdingCompany.map((item, i) =>
          <div className="mb-3 col-xl-6">
            <label className="form-label">Holding Company:</label>
            <CInput
              name={`holdingCompany[${i}]`}
              value={formik.values.holdingCompany[i]}
              placeholder="Holding Company"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                isFormik
                  ? { type: "formik", error: formik && formik }
                  : { type: "server", error: messages }
              }
              type="text"
            />
          </div>
        )}
        <span className=" col-xl-6 text-end text-indigo bg-transparent cursor-pointer" onClick={addNewHolding}>
          <IconAddPlus /> Add Holding Company
        </span>

        {formik.values.associatedCompany.map((item, i) =>
          <div className="mb-3 mt-3 col-xl-6">
            <label className="form-label">Associated Company:</label>
            <CInput
              name={`associatedCompany[${i}].associatedName`}
              value={formik.values.associatedCompany[i].associatedName}
              placeholder="Holding Company"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                isFormik
                  ? { type: "formik", error: formik && formik }
                  : { type: "server", error: messages }
              }
              type="text"
            />
          </div>
        )}
        <span className=" col-xl-6 text-end text-indigo bg-transparent cursor-pointer" onClick={addAssociate}>
          <IconAddPlus /> Add Associated Company
        </span>

        {formik.values.Subsidiaries.map((item, i) =>
          <div className="mb-3 mt-3 col-xl-6">
            <label className="form-label">Subsidiaries:</label>
            <CInput
              name={`Subsidiaries[${i}].subsidiariesName`}
              value={formik.values.Subsidiaries[i].subsidiariesName}
              placeholder="Subsidiaries Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                isFormik
                  ? { type: "formik", error: formik && formik }
                  : { type: "server", error: messages }
              }
              type="text"
            />
          </div>
        )}
        <span className=" col-xl-6 text-end text-indigo bg-transparent cursor-pointer" onClick={addSubsidiaries}>
          <IconAddPlus /> Add Subsidiaries
        </span>



        <div className="d-xl-flex justify-content-end mt-3">
          <Button name="Save" type="submit" color="btn-info" />
        </div>
      </div>

    </form>
  );
}

export default GroupStructure;
