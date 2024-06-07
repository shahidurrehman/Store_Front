import React from 'react';

function CategoryFilter() {
    return (

        <div className="col-3 pt-4">
            <form action="./" method="get" autoComplete="off" noValidate>
                <div className="subheader mb-2">Category</div>
                <div className="list-group list-group-transparent mb-3 px-3">
                    <a className="list-group-item list-group-item-action d-flex align-items-center active" href="#">
                        Games
                        <small className="text-muted ms-auto">24</small>
                    </a>
                    <a className="list-group-item list-group-item-action d-flex align-items-center" href="#">
                        Clothing
                        <small className="text-muted ms-auto">149</small>
                    </a>
                    <a className="list-group-item list-group-item-action d-flex align-items-center" href="#">
                        Jewelery
                        <small className="text-muted ms-auto">88</small>
                    </a>
                    <a className="list-group-item list-group-item-action d-flex align-items-center" href="#">
                        Toys
                        <small className="text-muted ms-auto">54</small>
                    </a>
                </div>
                <div class="subheader mb-2">Rating</div>
                <div class="mb-3 px-3">
                    <label class="form-check">
                        <input type="radio" class="form-check-input" name="form-stars" value="5 stars" checked />
                        <span class="form-check-label">5 stars</span>
                    </label>
                    <label class="form-check">
                        <input type="radio" class="form-check-input" name="form-stars" value="4 stars" />
                        <span class="form-check-label">4 stars</span>
                    </label>
                    <label class="form-check">
                        <input type="radio" class="form-check-input" name="form-stars" value="3 stars" />
                        <span class="form-check-label">3 stars</span>
                    </label>
                    <label class="form-check">
                        <input type="radio" class="form-check-input" name="form-stars" value="2 and less stars" />
                        <span class="form-check-label">2 and less stars</span>
                    </label>
                </div>
                <div class="subheader mb-2">Tags</div>
                <div class="mb-3 px-3">
                    <label class="form-check">
                        <input type="checkbox" class="form-check-input" name="form-tags[]" value="business" checked />
                        <span class="form-check-label">business</span>
                    </label>
                    <label class="form-check">
                        <input type="checkbox" class="form-check-input" name="form-tags[]" value="evening" />
                        <span class="form-check-label">evening</span>
                    </label>
                    <label class="form-check">
                        <input type="checkbox" class="form-check-input" name="form-tags[]" value="leisure" />
                        <span class="form-check-label">leisure</span>
                    </label>
                    <label class="form-check">
                        <input type="checkbox" class="form-check-input" name="form-tags[]" value="party" />
                        <span class="form-check-label">party</span>
                    </label>
                </div>
                <div class="subheader mb-2">Price</div>
                <div class="row g-2 align-items-center mb-3 px-3">
                    <div class="col">
                        <div class="input-group">
                            <span class="input-group-text">
                                $
                            </span>
                            <input type="text" class="form-control" placeholder="from" value="3" autocomplete="off" />
                        </div>
                    </div>
                    <div class="col-auto">—</div>
                    <div class="col">
                        <div class="input-group">
                            <span class="input-group-text">
                                $
                            </span>
                            <input type="text" class="form-control" placeholder="to" autocomplete="off" />
                        </div>
                       
                    </div>
                    <a href="#" class="btn btn-link w-100">
                            Reset to defaults
                        </a>
                </div>
            </form>

        </div>

    );
}

export default CategoryFilter;

