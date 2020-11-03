import React, { Component } from 'react';
import "./Grid.css"
//TODO

class Grid_1x1 extends Component{
	render(){
		const gridStyle = {
			color: (this.props.selectedGrid.row_index === this.props.row_index && this.props.selectedGrid.col_index === this.props.col_index) || this.props.conflicted ? "#FFF" : this.props.fixed ? "#666" : "#6CC",
			backgroundColor: this.props.selectedGrid.row_index === this.props.row_index && this.props.selectedGrid.col_index === this.props.col_index ? "#333" : this.props.conflicted ? "#E77" : "#FFF",
			borderLeft: this.props.col_index === 0 ? "1.5px solid transparent" : "1.5px solid #999",
            borderRight: this.props.col_index === 8 ? "1.5px solid #999" : "1.5px solid transparent",
            borderTop: this.props.row_index === 0 ? "1.5px solid #999" : "1.5px solid transparent",
            borderBottom: this.props.row_index === 8 ? "1.5px solid transparent" : "1.5px solid #999",
		};
		return (
			<div className="grid_1x1" id={`grid-${this.props.row_index}*${this.props.col_index}`} tabindex="1" style={gridStyle} onClick={() => this.props.handle_grid_1x1_click(this.props.row_index, this.props.col_index)}>
				{ this.props.value === "0" ? "" : this.props.value}
			</div>
		);
	}
}
export default Grid_1x1;

// Useful hints:
// for React Component:
// const gridStyle = {
//     color: (this.props.selectedGrid.row_index === this.props.row_index && this.props.selectedGrid.col_index === this.props.col_index) || this.props.conflicted ? "#FFF" : this.props.fixed ? "#666" : "#6CC",
//     backgroundColor: this.props.selectedGrid.row_index === this.props.row_index && this.props.selectedGrid.col_index === this.props.col_index ? "#333" : this.props.conflicted ? "#E77" : "#FFF",
// };
// return (
//     <div className="grid_1x1" id={`grid-${this.props.row_index}*${this.props.col_index}`} tabindex="1" style={gridStyle} onClick={() => this.props.handle_grid_1x1_click(this.props.row_index, this.props.col_index)}>
//         { this.props.value === "0" ? "" : this.props.value}
//     </div>
// );

// for React Hook:
// const gridStyle = {
//     color: (props.selectedGrid.row_index === props.row_index && props.selectedGrid.col_index === props.col_index) || props.conflicted ? "#FFF" : props.fixed ? "#666" : "#6CC",
//     backgroundColor: props.selectedGrid.row_index === props.row_index && props.selectedGrid.col_index === props.col_index ? "#333" : props.conflicted ? "#E77" : "#FFF",
// };
// return (
//     <div className="grid_1x1" id={`grid-${props.row_index}*${props.col_index}`} tabindex="1" style={gridStyle} onClick={() => props.handle_grid_1x1_click(props.row_index, props.col_index)}>
//         { props.value === "0" ? "" : props.value}
//     </div>
// );