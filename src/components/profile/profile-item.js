import React from "react";


const ProfileItem = ({title, fieldName, value, placeholder, onChange}) => {
    return (
        <div class="input-field field">
        <label>{title}</label>
        <div>
          <input
            name={fieldName}
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={onChange}
          />
        </div>
      </div>
    )
}

export default ProfileItem