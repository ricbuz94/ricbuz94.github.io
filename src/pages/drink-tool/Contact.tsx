import { useEffect } from "react";
import Form from "../../components/Form";
import FormInput from "../../ui/form-input/FormInput";

const Contact = () => {
  useEffect(() => {
    let title = document.getElementById("title");
    if (title != null) title.innerHTML = "DrinkTool - Web";
  }, []);

  return (
    <main>
      <div className="dt-card">
        <Form title="Contattaci">
          <>
            <FormInput label="Oggetto" type="text" />
            <FormInput label="Messaggio" type="text" isTextArea />
          </>
        </Form>
      </div>
    </main>
  );
};

export default Contact;
