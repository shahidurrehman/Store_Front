import React from "react"; 
import ImageBreadcrumb from '../breadcrumb/breadcrumb';
function FilterArea({ form = "", title = "Filters" }) {
    return (
        <div className="container-xxxl mb-2">
         <ImageBreadcrumb imageUrl="../assets/img/banner2.jpg" pageName="Shop" />
            {/* <div className="col-12">
                <div className="card">
                    <div className="card-header"><h3 className="card-title">{title}</h3>
                    </div>
                    <div className="card-body border-bottom py-3">
                        {form}
                    </div>
                </div>
            </div> */}
        </div>

    );
}

export default FilterArea;
