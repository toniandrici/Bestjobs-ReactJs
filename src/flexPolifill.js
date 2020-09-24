// Flexbox display
export function flexbox() {
	return `
	  display: -webkit-box;
	  display: -moz-box;
	  display: -ms-flexbox;
	  display: -webkit-flex;
	  display: flex;
	`;
  };
  
  // The 'flex' shorthand
  // - applies to: flex items
  // <positive-number>, initial, auto, or none
  export function flex(values) {
	return `
	  -webkit-box-flex: ${values};
	  -moz-box-flex: ${values};
	  -webkit-flex: ${values};
	  -ms-flex: ${values};
	  flex: ${values};
	`;
  };
  
  // Flex Flow Direction
  // - applies to: flex containers
  // row | row-reverse | column | column-reverse
  export function flexDirection(direction) {
	return `
	  -webkit-flex-direction: ${direction};
	  -moz-flex-direction: ${direction};
	  -ms-flex-direction: ${direction};
	  flex-direction: ${direction};
	`;
  };
  
  // Flex Line Wrapping
  // - applies to: flex containers
  // nowrap | wrap | wrap-reverse
  export function flexWrap(wrap) {
	return `
	  -webkit-flex-wrap: ${wrap};
	  -moz-flex-wrap: ${wrap};
	  -ms-flex-wrap: ${wrap};
	  flex-wrap: ${wrap};
  `;
  };
  
  // Flex Direction and Wrap
  // - applies to: flex containers
  // <flex-direction> || <flex-wrap>
  export function flexFlow(flow) {
	return `
	  -webkit-flex-flow: ${flow};
	  -moz-flex-flow: ${flow};
	  -ms-flex-flow: ${flow};
	  flex-flow: ${flow};
  `;
  };
  
  // Display Order
  // - applies to: flex items
  // <integer>
  export function order(val) {
	return `
	  -webkit-box-ordinal-group: ${val};
	  -moz-box-ordinal-group: ${val};
	  -ms-flex-order: ${val};
	  -webkit-order: ${val};
	  order: ${val};
  `;
  };
  
  // Flex grow factor
  // - applies to: flex items
  // <number>
  export function flexGrow(grow) {
	return `
	  -webkit-flex-grow: ${grow};
	  -moz-flex-grow: ${grow};
	  -ms-flex-grow: ${grow};
	  flex-grow: ${grow};
  `;
  };
  
  // Flex shrink
  // - applies to: flex item shrink factor
  // <number>
  export function flexShrink(shrink) {
	return `
	  -webkit-flex-shrink: ${shrink};
	  -moz-flex-shrink: ${shrink};
	  -ms-flex-shrink: ${shrink};
	  flex-shrink: ${shrink};
  `;
  };
  
  // Flex basis
  // - the initial main size of the flex item
  // - applies to: flex itemsnitial main size of the flex item
  // <width>
  export function flexBasis(width) {
	return `
	  -webkit-flex-basis: ${width};
	  -moz-flex-basis: ${width};
	  -ms-flex-basis: ${width};
	  flex-basis: ${width};
  `;
  };
  
  // Axis Alignment
  // - applies to: flex containers
  // flex-start | flex-end | center | space-between | space-around
  export function justifyContent(justify) {
	return `
	  -webkit-justify-content: ${justify};
	  -moz-justify-content: ${justify};
	  -ms-justify-content: ${justify};
	  justify-content: ${justify};
	  -ms-flex-pack: ${justify};
  `;
  };
  
  // Packing Flex Lines
  // - applies to: multi-line flex containers
  // flex-start | flex-end | center | space-between | space-around | stretch
  export function alignContent(align) {
	return `
	  -webkit-align-content: ${align};
	  -moz-align-content: ${align};
	  -ms-align-content: ${align};
	  align-content: ${align};
  `;
  };
  
  // Cross-axis Alignment
  // - applies to: flex containers
  // flex-start | flex-end | center | baseline | stretch
  export function alignItems(align) {
	return `
	  -webkit-align-items: ${align};
	  -moz-align-items: ${align};
	  -ms-align-items: ${align};
	  align-items: ${align};
  `;
  };
  
  // Cross-axis Alignment
  // - applies to: flex items
  // auto | flex-start | flex-end | center | baseline | stretch
  export function alignSelf(align) {
	return `
	  -webkit-align-self: ${align};
	  -moz-align-self: ${align};
	  -ms-align-self: ${align};
	  align-self: ${align};
  `;
  };