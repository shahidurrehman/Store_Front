import ImageBreadcrumb from 'common/components/breadcrumb/breadcrumb';
import UpdateCartButton from 'common/components/button1/button1';
import TableComponent from 'common/components/c_table/whishlisttable';
import ProductWhishList from 'common/components/c_table/whishlisttable';
import ProductCounter from 'common/components/productcounter/productcounter';
import ShareButtons from 'common/components/sharebuttons/sharebutton';
import FollowUs from 'common/components/store_footer/store_footer';
import CTable from 'common/components/table';

function ViewCartPage() {

  const thValues = ['X', 'Image', 'PRODUCT', 'PRICE', 'QUANTITY', 'TOTAL'];
  const tdValues = ['×', '../assets/img/avator.jpg', 'Center Table', 'Rs:1200', <ProductCounter/>, 'Rs:1200'];
  

  return (
    <>

      <div className="page-body mb-0 pt-5">
        <ImageBreadcrumb imageUrl="../assets/img/banner6.jpg" pageName="View Cart" />
        {/* <FilterArea form={<StaffFilterForm handleSubmit={handleSubmit} />} title="Staff Search" /> */}
        <div className="container-xl pt-4">
          <div className='row'>
            <div class="col-md-12 mb-3">
              <h1>My Wishlist</h1>
            </div>
            <TableComponent thValues={thValues} tdValues={tdValues} />
           <UpdateCartButton/>
          </div>
        </div>
        <FollowUs />

      </div>

    </>


  );
}

export default ViewCartPage;