/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.FlexBoxCssPropertyMap");

sap.m.FlexBoxCssPropertyMap = {
	'spec0907': {
		'display': {
			'flex': {
				'display': 'box'
			},
			'inline-flex': {
				'display': 'inline-box'
			}
		},
		'flex-direction': {
			'row': {
				'box-orient': 'horizontal',
				'box-direction': 'normal'
			},
			'row-reverse': {
				'box-orient': 'horizontal',
				'box-direction': 'reverse'
			},
			'column': {
				'box-orient': 'vertical',
				'box-direction': 'normal'
			},
			'column-reverse': {
				'box-orient': 'vertical',
				'box-direction': 'reverse'
			}
		},
		'flex-wrap': {
			'no-wrap': {
				'box-lines': 'single'
			},
			'wrap': {
				'box-lines': 'multiple'
			},
			'wrap-reverse': null
		},
		'flex-flow': null,
		'order': {
			'<number>': {
				'box-ordinal-group': '<integer>'
			}
		},
		'flex-grow': {
			'<number>': {
				'box-flex': '<number>'
			}
		},
		'flex-shrink': null,
		'flex-basis': null,
		'flex': {
			'[flex-grow] | [flex-shrink] | [flex-basis]': {
				'box-flex': '[flex-grow]'
			}
		},
		'justify-content': {
			'flex-start': {
				'box-pack': 'start'
			},
			'flex-end': {
				'box-pack': 'end'
			},
			'center': {
				'box-pack': 'center'
			},
			'space-between': {
				'box-pack': 'justify'
			},
			'space-around': null
		},
		'align-items': {
			'flex-start': {
				'box-align': 'start'
			},
			'flex-end':{
				'box-align': 'end'
			},
			'center': {
				'box-align': 'center'
			},
			'baseline': {
				'box-align': 'baseline'
			},
			'stretch': {
				'box-align': 'stretch'
			}
		},
		'align-self': null,
		'align-content': null
	},
	'specie10': {
		'display': {
			'flex': {
				'display': 'flexbox'
			},
			'inline-flex': {
				'display': 'inline-flexbox'
			}
		},
		'flex-direction': {
			'row': {
				'flex-direction': 'row'
			},
			'row-reverse': {
				'flex-direction': 'row-reverse'
			},
			'column': {
				'flex-direction': 'column'
			},
			'column-reverse': {
				'flex-direction': 'column-reverse'
			}
		},
		'flex-wrap': {
			'no-wrap': {
				'flex-wrap': 'none'
			},
			'wrap': {
				'box-lines': 'multiple'
			},
			'wrap-reverse': null
		},
		'flex-flow': null,
		'order': {
			'<number>': {
				'flex-order': '<integer>'
			}
		},
		'flex-grow': {
			'<number>': {
				'flex-positive': '<number>',
				'flex-preferred-size': 'auto'
			}
		},
		'flex-shrink': {
			'<number>': {
				'flex-negative': '<number>' 
			}
		},
		'flex-basis': {
			'<number>': {
				'flex-preferred-size': '<number>'
			}
		},
		'flex': {
			'[flex-grow] | [flex-shrink] | [flex-basis]': {
				'flex': '[flex-grow] | [flex-shrink] | [flex-basis]'
			}
		},
		'justify-content': {
			'flex-start': {
				'flex-pack': 'start'
			},
			'flex-end': {
				'flex-pack': 'end'
			},
			'center': {
				'flex-pack': 'center'
			},
			'space-between': {
				'flex-pack': 'justify'
			},
			'space-around': null
		},
		'align-items': {
			'flex-start': {
				'flex-align': 'start'
			},
			'flex-end':{
				'flex-align': 'end'
			},
			'center': {
				'flex-align': 'center'
			},
			'baseline': {
				'flex-align': 'baseline'
			},
			'stretch': {
				'flex-align': 'stretch'
			}
		},
		'align-self': null,
		'align-content': null
	}
};