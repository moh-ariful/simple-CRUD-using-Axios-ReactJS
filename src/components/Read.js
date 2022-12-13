import React, { useEffect, useState } from "react";
import { Button, Table } from "semantic-ui-react";
import axios from "axios";

export default function Read() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/").then((getData) => {
      setApiData(getData.data);
    });
  });
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Nama Siswa</Table.HeaderCell>
            <Table.HeaderCell>Asal Siswa</Table.HeaderCell>
            <Table.HeaderCell>Edit</Table.HeaderCell>
            <Table.HeaderCell>Hapus</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {apiData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.id} </Table.Cell>
                <Table.Cell>{data.name} </Table.Cell>
                <Table.Cell>{data.asal} </Table.Cell>
                <Table.Cell>
                    <Button color="purple">Edit</Button>
                </Table.Cell>
                <Table.Cell>
                    <Button color="red">Hapus</Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
