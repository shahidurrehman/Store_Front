import React from 'react';

const ImageBreadcrumb = ({ imageUrl, pageName }) => {
  const breadcrumb = `Home > ${pageName}`;
  return (
    <div className="page-body p-0 m-0">
      <div className="col-md-12">
        <div className="img-breadcrumb border d-flex align-items-center justify-content-center" style={{backgroundImage: `url(${imageUrl})`}}>
          <div className="pt-2 m-0">
            <h1 className="mb-1 px-2">{pageName}</h1>
            <div className="row">
              <h4 className="pt-0 m-0 p-0 px-3">{breadcrumb}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageBreadcrumb;

