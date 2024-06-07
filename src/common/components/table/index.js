import React from 'react';
import CInput from '../c_input';
import CSelect from '../c_select';
import IconChevronUp from '../../../assets/icons/chevron-up';
import Pagination from '../pagination';
import IconChevronDown from '../../../assets/icons/chevron-down';
import { get_page_size_options } from '../../utils/app.options';



const CTable = ({ headers = [], rows = [], filterProps, searchable, changePage, handelSortChange, setActionLinks ,total }) => {

    return (
        <>
            <div className="card">
                {filterProps &&
                    <div className="card-body border-bottom py-3">
                        <div className="row justify-content-between mb-2 ">
                            <div className="col-sm-12 col-md-3 mt-2">
                                <div className="text-muted">
                                    Show
                                    <div className="mx-2 d-inline-block">
                                        <CSelect
                                            id="pageSize"
                                            name="pageSize"
                                            value={filterProps.values.pageSize}
                                            onChange={filterProps.handleChange}
                                            onBlur={filterProps.handleBlur}
                                            type="select"
                                            options={get_page_size_options()}
                                        />
                                    </div>
                                    entries
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-3 mt-2">
                                {searchable &&
                                    <CInput
                                        id="search"
                                        name="search"
                                        value={filterProps.values.search}
                                        onChange={filterProps.handleChange}
                                        onBlur={filterProps.handleBlur}
                                        placeholder="Search.."
                                        type="text"
                                    />
                                }
                            </div>
                        </div>
                    </div>
                }
                <div className="table-responsive">
                    <table className="table  table-vcenter table-striped card-table text-nowrap datatable">
                    {/* <table className="table card-table table-vcenter text-nowrap datatable"> */}
                        <thead>
                            <tr className="pt-2 pb-2">
                                {headers.filter(o => !o.hide).map((item, i) =>
                                    <th className={`${item.className}`} key={i}>
                                        {
                                            item.sortable ?
                                                <span onClick={() => handelSortChange(i)} className="nav-link cursor-pointer">
                                                    {item.label}
                                                    {item.sort === true
                                                        ?
                                                        <span className="nav-link-icon d-md-none d-lg-inline-block">
                                                            <IconChevronUp />
                                                        </span>
                                                        :
                                                        <span className="nav-link-icon d-md-none d-lg-inline-block">
                                                            <IconChevronDown />
                                                        </span>
                                                    }
                                                </span>
                                                :
                                                <>
                                                    {item.label}
                                                </>
                                        }
                                    </th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {rows && rows.map((items, j) =>
                                <tr key={j}>
                                    {/* <td><span className="text-muted">{j + 1}</span></td> */}
                                    {headers && headers.filter(o => !o.hide).map((item, k) =>
                                        <td key={k}>
                                            {item.accessor === "no" ?
                                                <span className="text-muted">{j + 1}</span>
                                                :
                                                item.accessor === "actions" ? <span className="text-end">{setActionLinks(items) || ""}</span>
                                                    :
                                                    <span className="text-end">{items[item.accessor]}</span>
                                            }
                                        </td>
                                    )
                                    }
                                </tr>

                            )}
                        </tbody>
                    </table>
                </div>
                {filterProps && 
                    <div className="card-footer d-flex align-items-center">
                        <span>Total Records : {total} </span>
                        <Pagination data={filterProps.values} changePage={changePage} />
                    </div>
                }
            </div>
        </>
    )
}

export default CTable;