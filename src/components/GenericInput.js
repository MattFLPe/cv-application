export default function GenericInput({ label, type, value, onChange, disabled }) {
    return (
        <label>
            {label}:
            <input
                type={type}
                value={value} 
                onChange={(e) => onChange(e.target.value)}
                disabled={disabled}
            />
        </label>
    )
}