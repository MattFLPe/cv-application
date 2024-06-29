export default function GenericInput({ label, type, value, onChange }) {
    return (
        <label>
            {label}:
            <input
                type={type}
                value={value} 
                onChange={(e) => onChange(e.target.value)}
            />
        </label>
    )
}