import React from "react";
import axios from "axios";
import Chart from "chart.js/auto";

class Charttwo extends React.Component {
  state = {
    BitPrices: [],
    filter: {
      startDate: "",
      endDate: "",
      currency: "",
    },
  };

  componentDidMount = (prevState, prevProps) => {
    axios
    .get("http://api.coindesk.com/v1/bpi/historical/close.json")
    .then((response) => {
        this.setState({ BitPrices: { ...response.data.bpi } });
          
        const dates = new dates(document.getElementById("startDate"), {
        id:"startDate",
        label: "Starting Date",
        type: "date",
        defaultValue: "dd-mm-yyyy",
          
        id:"endDate",
        label: "Ending Date",
        type: "date",
        defaultValue: "dd-mm-yyyy"}
    

      )
      .catch((err) => {
        console.log(err);
      })
    },
    };
  componentDidUpdate = () => {
    if (this.state.startDate !== prevState.startDate ||
        this.state.endDate !== prevState.endDate ||
        this.state.currency !== prevState.currency) 
        {
    const chart = new Chart(document.getElementById("myChart"), {
      type: "line",
      data: {
        labels: Object.keys(this.state.BitPrices),
        datasets: [
          {
            label: "Variacao Bitcoin",
            BackgroundColor: "rgb(200, 100, 100)",
            borderColor: "rgb(255, 99, 132)",
            data: Object.values(this.state.BitPrices),
            fill: true,
          }
        ],
      },
    });
}

  render() {
    return (
      <div>
          <div>
              <textField id="startDate"></textField>
          </div>
          <div>
              <textField id="endDate"></textField>
          </div>
        <canvas id="myChart"></canvas>
      </div>
        )
    }
}

export default Charttwo;
