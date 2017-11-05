import React, { Component } from 'react';
import './ProgressBars.css';
import {Line} from 'rc-progress';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class ProgressBars extends Component {

    constructor(props){
        super(props);
        this.state= {selectedBar: 0};
    }
    componentWillMount(){
        this.props.fetchProgressBars();
    }

    render() {
        const {progressBars} = this.props;

        return (
            <div className="app">
                <div>{this.renderProgressBars(progressBars.bars, progressBars.limit)}</div>
                <div className="buttons">{this.renderButtons(progressBars.buttons)}</div>
                <div>{this.renderDropdown(progressBars.bars)}</div>
            </div>
        );
    }

    renderButtons(buttons){
        if(buttons){
            return buttons.map(button => <button key={button} onClick={()=> this.modifyBar(button)}>{button}</button>);
        }
    }

    modifyBar(value){
        this.props.modifyBar(this.state.selectedBar,value);
    }

    renderDropdown(bars){
        if(bars){
            let options = bars.map((bar, idx) => {
                return {value: idx, label: 'bar ' + (idx+1), clearableValue: false}
            });

            return (
                <Select
                  value={this.state.selectedBar}
                  options={options}
                  onChange={(val)=>{
                       if(val){
                           this.setState({selectedBar: val.value});
                       }
                  }}
                />
            );
        }
    }

    renderProgressBars(bars, limit){

        if(bars){
            return bars.map((bar, idx) =>
            <div className="bar" key={idx}>
                <Line percent={Math.floor((bar/limit)*100)} strokeWidth="7" trailWidth="7" strokeColor={(bar/limit)===1?'red':'#2db7f5'}/>
                <span className="percentage">{Math.floor((bar/limit)*100)}%</span>
            </div>
            );
        }
    }
}

export default ProgressBars;
