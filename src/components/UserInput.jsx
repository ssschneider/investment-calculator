export function UserInput ({ label, placeholder, id, onChange, onEnded }) {
    return (
        <div className="input-group">
            <label htmlFor={id}>{label}:</label>
            <input type="number" placeholder={placeholder} id={id} onChange={onChange}  onMouseOut={onEnded} />
        </div>
    );
};