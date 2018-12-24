// const { Component } = React;
// const { render } = ReactDOM;

// const Root = () => (
//   <div className="Root">
//     <Tabs selected={1}>
//       <TabList>
//         <Tab>
//           <Button>Foo</Button>
//         </Tab>
//         <Tab>
//           <Button>Bar</Button>
//         </Tab>
//         <Tab>
//           <Button>Baz</Button>
//         </Tab>
//       </TabList>

//       <TabPanel>Related to foo</TabPanel>

//       <TabPanel>Related to bar</TabPanel>

//       <TabPanel>Related to baz</TabPanel>
//     </Tabs>
//   </div>
// );

// /*
//  * Tabs is the stateful component.
//  * You can pass an index in the `selected` prop
//  * to specify which tab is active by default.
//  *
//  * This component handles the entire tabs system.
//  * It transforms its own children (if they are Tab or TabPanel) to pass the
//  * required props in order to run automatically the system.
//  */

// class Tabs extends Component {
//   state = { selected: this.props.selected };

//   setSelected(selected) {
//     if (selected !== this.state.selected) {
//       this.setState({ selected });
//     }
//   }

//   handleClick(tab) {
//     return () => this.setSelected(tab);
//   }

//   renderTabList(child) {
//     let tab = 0;

//     return React.cloneElement(child, {
//       children: React.Children.map(child.props.children, childTab => {
//         if (childTab.type.name === "Tab") {
//           const _isActive = tab === this.state.selected;
//           const _onClick = this.handleClick(tab);

//           tab++;

//           return React.cloneElement(childTab, { _isActive, _onClick });
//         }

//         return childTab;
//       })
//     });
//   }

//   renderChildren(children) {
//     let panel = 0;

//     return React.Children.map(children, child => {
//       if (child.type.name === "TabList") {
//         return this.renderTabList(child);
//       }

//       if (child.type.name === "TabPanel") {
//         const _isActive = panel === this.state.selected;

//         panel++;

//         return React.cloneElement(child, { _isActive });
//       }

//       return child;
//     });
//   }

//   render() {
//     return (
//       <div className="Tabs">{this.renderChildren(this.props.children)}</div>
//     );
//   }
// }

// const TabList = ({ children }) => <ul className="TabList">{children}</ul>;

// const Tab = ({ _onClick, _isActive, children }) => (
//   <li className={`Tab  ${_isActive ? "is-active" : ""}`} onClick={_onClick}>
//     {children}
//   </li>
// );

// const TabPanel = ({ _isActive, children }) => (
//   <div className={`TabPanel  ${_isActive ? "is-active" : ""}`}>{children}</div>
// );

// /* --- */

// const Button = ({ children }) => <button className="Button">{children}</button>;

// render(<Root />, document.querySelector("#root"));

// import React, { Component } from "react";

// export class ex extends Component {
//   state = {
//     result: ""
//   };

//   Clicked = value => {
//     switch (value) {
//       case "=":
//         this.calculate();
//         break;
//       case "C":
//         this.reset();
//         break;
//       case "CE":
//         this.backspace();
//         break;
//       default:
//         this.setState({
//           result: this.state.result + value
//         });
//         break;
//     }
//   };

//   calculate = () => {
//     try {
//       this.setState({
//         // eslint-disable-next-line
//         result: (eval(this.state.result) || "") + ""
//       });
//     } catch (e) {
//       this.setState({
//         result: "error"
//       });
//     }
//   };

//   render() {
//     console.log(this.state.result);
//     return (
//       <div>
//         <button value="1" onClick={e => this.Clicked(e.target.value)}>
//           1
//         </button>
//         <button value="2" onClick={e => this.Clicked(e.target.value)}>
//           2
//         </button>
//         <button value="3" onClick={e => this.Clicked(e.target.value)}>
//           3
//         </button>
//         <button value="+" onClick={e => this.Clicked(e.target.value)}>
//           +
//         </button>
//         <button value="*" onClick={e => this.Clicked(e.target.value)}>
//           x
//         </button>
//         <button value="=" onClick={e => this.Clicked(e.target.value)}>
//           =
//         </button>
//       </div>
//     );
//   }
// }

// export default ex;
