import React, {Component} from "react";
import '../css/tabs.css';
class Tabs extends Component {
    render() {
        return(
            <div>
                <div className="tab">
                    <button className="tablinks">Donación 1</button>
                    <button className="tablinks">Donación 2</button>
                </div>
            </div>
        );
    }
}
export default Tabs;