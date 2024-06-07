import ImageBreadcrumb from 'common/components/breadcrumb/breadcrumb';
import TableComponent from 'common/components/c_table/whishlisttable';
import ProductWhishList from 'common/components/c_table/whishlisttable';
import ShareButtons from 'common/components/sharebuttons/sharebutton';
import FollowUs from 'common/components/store_footer/store_footer';
import CTable from 'common/components/table';


function WhishListPage() {
  const thValues = ['X', 'Image', 'PRODUCT NAME', 'UNIT PRICE', 'STOCK STATUS'];
  const tdValues = ['×', '../assets/img/banner5.jpg', 'Center Table', 'Rs:1200', 'In stock'];

  return (
    <>

      <div className="page-body mb-0 pt-5">
        <ImageBreadcrumb imageUrl="../assets/img/banner5.jpg" pageName="WhishList" />
        {/* <FilterArea form={<StaffFilterForm handleSubmit={handleSubmit} />} title="Staff Search" /> */}
        <div className="container-xl pt-4">
          <div className='row'>
            <div class="col-md-12 mb-3">
              <h1>My Wishlist</h1>
            </div>
            <TableComponent thValues={thValues} tdValues={tdValues} />
            <ShareButtons/>
          </div>
        </div>
        <FollowUs />

      </div>

    </>


  );
}

export default WhishListPage;