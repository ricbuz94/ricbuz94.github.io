import "./form-input.css";

interface FormInputProps {
  label: string;
  type: string;
  isTextArea?: boolean;
}

const FormInput = ({ label, type, isTextArea }: FormInputProps) => {
  return (
    <div className="form-input-cpntainer">
      <h5>{label}</h5>
      {isTextArea ? <textarea rows={5} /> : <input type={type} />}
    </div>
  );
};

export default FormInput;
