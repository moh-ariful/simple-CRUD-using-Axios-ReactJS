import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";


export default function Create() {
  const [name, setName] = useState("");
  const [asal, setAsal] = useState("");

  console.log(name);
  console.log(asal);

  const sendDataToAPI  = () => {
    axios.post('http://127.0.0.1:8000/api/', {
        name,
        asal
    })
  }
  return (
    <div>
      <Form>
        <Form.Field>
          <label>Nama Siswa</label>
          <input name="name" onChange={(e) => setName(e.target.value)} placeholder="First Name" />
        </Form.Field>
        <Form.Field>
          <label>Asal Siswa</label>
          <input name="asal" onChange={(e) => setAsal(e.target.value)} placeholder="Last Name" />
        </Form.Field>
        <Button type="submit" onClick={sendDataToAPI}>Submit</Button>
      </Form>
    </div>
  );
}
