import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

export default function Create() {
  const [name, setName] = useState("");
  const [asal, setAsal] = useState("");

  console.log(name);
  console.log(asal);
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
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}
