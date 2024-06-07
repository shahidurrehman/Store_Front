import { IconEye, IconHeart } from '@tabler/icons-react';
import React from 'react';

const FeatureProduct = ({ product }) => {
  return (
    
    <div className="col-md-3 mb-2">
      <div className="card card-sm">
        {product.discountPrice && (
          <div className="ribbon ribbon-top ribbon-bookmark bg-yellow">
            Sale
          </div>
        )}
        <div className="card-body">
          <h3 className="card-title">{product.name}</h3>
          <div className="box">
            <div className="img-responsive img-responsive-1x1 rounded border div-bg">
              {/* Render the product image here */}
            </div>
            <div className="box-overlay"></div>
            <div className="box-content">
              <div className="inner-content">
                <span className="post">
                  <ul className="icon position-absolute top-0 px-5">
                    <li className="text-center">
                      <div className="align-items-center dve">
                        <button
                          className="switch-icon switch-icon-scale text-light"
                          data-bs-toggle="switch-icon"
                        >
                          <IconHeart/>
                          {/* Render the switch icon here */}
                        </button>
                      </div>
                    </li>
                    <li className="pt-3 text-center">
                      <a href="./shop/product-view.html">
                        <IconEye/>
                        {/* Render the eye icon here */}
                      </a>
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
          <div className="mt-2 px-1">
            <div className="row">
              <div className="mt-2">
                <div className="row">
                  <div className="col">
                    <div className="avatar-list avatar-list-stacked">
                      <a
                        href="#"
                        className="text-decoration-none undrlne text-reset"
                      >
                        <h4>Add to Cart</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-auto">
                    <h4 className="mb-0">Rs:{product.price}</h4>
                    {product.discountPrice && (
                      <small>
                        <strike>Rs:{product.discountPrice}</strike>
                      </small>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;
