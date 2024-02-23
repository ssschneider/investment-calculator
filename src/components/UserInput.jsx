export function UserInput ({ label, placeholder, id }) {
    return (
        <div className="input-group">
            <label htmlFor={id}>{label}:</label>
            <input type="number" placeholder={placeholder} id={id} />
        </div>
    );
};