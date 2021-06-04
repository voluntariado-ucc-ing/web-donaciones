import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Container from "react-bootstrap/Container";
import {OutTable, ExcelRenderer} from 'react-excel-renderer';

// import "./css/Excel.css"

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
      if(err){
        console.log(err);            
      }
      else{
        this.setState({
          cols: resp.cols,
          rows: resp.rows
        });
      }
    });               
    
}

render() {
    return (
        <div>
            <div>
            <h4>Subir archivo Excel</h4>
            
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
            
            <div className="bottomButton">
            <Button
                className="forwardButton btn"
                onClick={this.continue}
                variant="contained"
                type="submit"
            >Continuar</Button>
            </div>
        </div>
        
      );
}}


export default Excel;
