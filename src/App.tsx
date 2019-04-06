import React from "react";
import Person from "./Person";
import * as util from "./util";
import Form from "./screens/Form";
import Presentation from "./screens/Presentation";

interface State {
  persons: Person[];
}

export default class App extends React.Component<{}, State> {
  state: State = {
    persons: []
  };

  constructor(props: {}) {
    super(props);

    const urlParams = new URLSearchParams(window.location.search);

    const personsParam = urlParams.get("persons");
    if (personsParam) console.info(util.encrypt(JSON.parse(personsParam)));

    const data = urlParams.get("data");
    const token = urlParams.get("token");
    if (data && token) this.state.persons = util.decrypt(data, token) || [];
  }

  render() {
    const { persons } = this.state;
    if(persons.length === 0) return <Form />;

    return (
      <Presentation persons={persons} />
    );
  }
}
