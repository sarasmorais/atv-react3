import { Header } from "./Header.jsx";
import { Form } from "./Form.jsx";
import { Remember } from "./Remember.jsx";
import { Btn } from "./Btn.jsx";


export default function CardLogin() {
  return (
    <div className="container">
      <Header />
      <Form />
      <Remember />
      <Btn />
    </div>
  )
}