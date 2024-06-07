import React from "react";
import { Link } from "react-router-dom";

function ProfileCard({ user }) {

  return (
    <div className="card">
      <div className="card-body p-4 text-center">
        {user.img && user.img !== "" ? (
          <img
            className="avatar avatar-xl mb-3 avatar-rounded text-muted"
            src={user.img}
          />
        ) : (
          <img
            className="avatar avatar-xl mb-3 avatar-rounded text-muted"
            src={`https://ui-avatars.com/api/?name=${user.displayName}`}
          />
        )}
        <h3 className="m-0 mb-1">
          <Link to={`/staff/edit/${user.userId}`}>{user.displayName}</Link>
        </h3>
        <p className="text-muted">
          {user.email}
        </p>
        <div className="mt-3">
          <span className={`badge bg-green-lt`}>
            {user.designation}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
