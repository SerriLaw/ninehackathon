import React from "react";

import fetchSpecific from "../../lib/fetchSpecific";
import "./style.css";
import Loading from "../../images/loading.gif";
import ResultsBlock from "../../components/ResultBlock/index";

export default class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      results: {}
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { term }
      }
    } = this.props;

    const results = await fetchSpecific(term);
    this.setState({ loading: false, results });
  }

  render() {
    const {
      match: {
        params: { term }
      }
    } = this.props;

    return this.state.loading ? (
      <div className="results">
        <img className="results-loading" src={Loading} alt="loading" />
        <p>loading...</p>
      </div>
    ) : (
      <div className="searched">
        <div className="searched-header">{`Searched for ${term}`}</div>
        <ResultsBlock result={this.state.results} />;
      </div>
    );
  }
}
