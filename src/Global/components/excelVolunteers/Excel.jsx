import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Container from "react-bootstrap/Container";
import {OutTable, ExcelRenderer} from 'react-excel-renderer';
import logovol from "../../../images/logo.png";
import oficial from "../../../images/oficial.png";
import "../../css/Excel.css"


class Excel extends Component{
    constructor(props) {
        super(props);
        this.state = {
      rows: [],
      cols: []
    }
  }

  fileHandler = (event) => {
    let fileObj = event.target.files[0];

    //just pass the fileObj as parameter
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      }
      else {
        this.setState({
          cols: resp.cols,
          rows: resp.rows
        });
      }
    });

  }

  render() {
    return (
      <div id="all">
        <Container fluid className={"site-section heading site-color how computer-footer"}>
          <div>
            <h4>Subir archivo Excel</h4>
            <div className="dropDown">
              <input
                className="btn"
                type="file"
                onChange={this.fileHandler.bind(this)}
                style={{ padding: "10px" }}
              />
              <OutTable
                data={this.state.rows}
                columns={this.state.cols}
                tableClassName="ExcelTable2007"
                tableHeaderRowClass="heading"
              />
            </div>
          </div>
          <div  id="icons">
            <a href="https://voluntariadoing.ucc.edu.ar/">
              <img

                alt="ucc"
                src={logovol}
                width="50"
                height="50"
                className="d-inline-block align-top"

              />
            </a>
            <a href="https://ucc.edu.ar">
              <img

                alt="ucc"
                src={oficial}
                width="90"
                height="50"
                className="d-inline-block align-top"

              /></a></div>
          <div className="bottomButton">

            <Button
              className="forwardButton btn"
              onClick={this.continue}
              variant="contained"
              type="submit"
            >Continuar
            </Button>
          </div>
        </Container>
      </div>

    );
  }
}
export default Excel;
