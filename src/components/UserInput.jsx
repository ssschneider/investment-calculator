import { useState } from "react";

export function UserInput ({ label, placeholder, id, userInvestment, onChange }) {
    

    

    return (
        <div className="input-group">
            <label htmlFor={id}>{label}:</label>
            <input 
                type="number" 
                placeholder={placeholder} 
                id={id} 
                onChange={(event) => onChange(id, event.target.value)}
                value={userInvestment}
            />
        </div>
    );
};