import React from "react";

import fetchData from "../../lib/fetch";
import "./style.css";
import Loading from "../../images/loading.gif";
import ResultsBlock from "../../components/ResultBlock/index";

export default class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      results: []
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { lon, lat }
      }
    } = this.props;

    const results = await fetchData(lat, lon);
    this.setState({ loading: false, results });
  }

  render() {
    const {
      match: {
        params: { lon, lat }
      }
    } = this.props;
    return this.state.loading ? (
      <div className="results">
        <img className="results-loading" src={Loading} />
        <p>loading...</p>
      </div>
    ) : (
      <div className="results">
        {this.state.results.map(result => {
          return <ResultsBlock result={result} />;
        })}
      </div>
    );
  }
}
