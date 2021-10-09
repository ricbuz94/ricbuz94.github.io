import SiteButton from "../ui/site-button/SiteButton";

interface FormProps {
  title: string;
  children: JSX.Element;
}

const Form = ({ title, children }: FormProps) => (
  <form>
    <h3>{title}</h3>
    <hr />
    {children}
    <SiteButton title="Calcola" isLink={false} />
  </form>
);

export default Form;
