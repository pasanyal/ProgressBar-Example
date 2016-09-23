'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var ProgressBarList = require('../components/ProgressBarList.jsx');
var ChangeBar = require('../components/ChangeBar.jsx');


describe("ProgressBarList selectbox", () => {
  beforeEach(function() {
    //let { TestUtils, TestUtils: { Simulate } } = React.addons;
  
    let changeBar = TestUtils.renderIntoDocument(
      <ChangeBar />
    );
        
    let select = TestUtils.findRenderedDOMComponentWithTag(
        changeBar, "select"
    );
      
    this.selectDOM = () => ReactDOM.findDOMNode(select);
    this.barsDOM = () => this.selectDOM().children;

    this.selectedBarDOM = () => {
      let selectedBarDOM = undefined;
      let barsDOM = this.barsDOM();
      for(let index = 0; index < barsDOM.length; ++index) {
        if(barsDOM[index].selected) {
          selectedBarDOM = barsDOM[index];
          break;
        }
      }

      return selectedBarDOM;
    };

    this.availableBars = () => {
      let bars = [];
      
      let barsDOM = this.barsDOM();
      for(let index = 0; index < barsDOM.length; ++index) {
        if(barsDOM[index].value.length > 0)
            bars.push({ name: barsDOM[index].textContent, value: barsDOM[index].value });    
      }
      return bars;
    };

    this.Simulate = TestUtils.Simulate;
  });
    
  it('renders the ProgressBarList', function() {
    
    var bars = [{ name: "pb1", width: 0, className: "inner-progress-barB", displayWidth: 0 }, 
                    { name: "pb2", width: 0, className: "inner-progress-barB", displayWidth: 0 }];
    
    var progressBarList = TestUtils.renderIntoDocument(
      <ProgressBarList bars={bars}/>
    );
      
    expect(progressBarList).toBeDefined();      
  });

  it("renders a select box", function() {
    expect(this.selectDOM().tagName).toEqual("SELECT");
  });

  it("has default text selected", function() {
    let selected = this.selectedBarDOM();

    expect(selected).toBeDefined();
    expect(selected.textContent).toEqual("Select Progress bar");
    expect(selected.value).toEqual('');
  });

  it("has all bars", function() {
    let barsPresented = this.availableBars();

    expect(barsPresented.length).toEqual(2);      
  });

  it("allows changing the bars by the user", function() {
    this.Simulate.change(this.selectDOM(), { target: (this.barsDOM())[1] });
    expect(this.selectedBarDOM().value).toEqual("pb1");

    this.Simulate.change(this.selectDOM(), { target: (this.barsDOM())[2] });
    expect(this.selectedBarDOM().value).toEqual("pb2");
  });
});