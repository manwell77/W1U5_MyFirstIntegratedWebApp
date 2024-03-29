/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.Popover.
jQuery.sap.declare("sap.m.Popover");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new Popover.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * 
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 *
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getPlacement placement} : sap.m.PlacementType (default: sap.m.PlacementType.Right)</li>
 * <li>{@link #getShowHeader showHeader} : boolean (default: true)</li>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getModal modal} : boolean (default: false)</li>
 * <li>{@link #getOffsetX offsetX} : int (default: 0)</li>
 * <li>{@link #getOffsetY offsetY} : int (default: 0)</li>
 * <li>{@link #getContentWidth contentWidth} : sap.ui.core.CSSSize</li>
 * <li>{@link #getContentHeight contentHeight} : sap.ui.core.CSSSize</li>
 * <li>{@link #getEnableScrolling enableScrolling} : boolean (default: true)</li>
 * <li>{@link #getVerticalScrolling verticalScrolling} : boolean (default: true)</li>
 * <li>{@link #getHorizontalScrolling horizontalScrolling} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li>
 * <li>{@link #getCustomHeader customHeader} : sap.ui.core.Control</li>
 * <li>{@link #getFooter footer} : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getLeftButton leftButton} : string | sap.m.Button</li>
 * <li>{@link #getRightButton rightButton} : string | sap.m.Button</li>
 * <li>{@link #getInitialFocus initialFocus} : string | sap.ui.core.Control</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.Popover#event:afterOpen afterOpen} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.Popover#event:afterClose afterClose} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.Popover#event:beforeOpen beforeOpen} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.Popover#event:beforeClose beforeClose} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Popover is to present information temporarily but in a way that does not take over the entire screen. The popover content is layered on top of your existing content and it remains visible until the user taps outside of the popover when modal is set to false or you explicitly dismiss it when modal is set to true. The switching between modal and non-modal can also be done when the popover is already opened.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.15.0-SNAPSHOT
 *
 * @constructor   
 * @public
 * @name sap.m.Popover
 */
sap.ui.core.Control.extend("sap.m.Popover", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"close", "openBy", "isOpen"
	],

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"placement" : {type : "sap.m.PlacementType", group : "Behavior", defaultValue : sap.m.PlacementType.Right},
		"showHeader" : {type : "boolean", group : "Appearance", defaultValue : true},
		"title" : {type : "string", group : "Appearance", defaultValue : null},
		"modal" : {type : "boolean", group : "Behavior", defaultValue : false},
		"offsetX" : {type : "int", group : "Appearance", defaultValue : 0},
		"offsetY" : {type : "int", group : "Appearance", defaultValue : 0},
		"contentWidth" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"contentHeight" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"enableScrolling" : {type : "boolean", group : "Misc", defaultValue : true, deprecated: true},
		"verticalScrolling" : {type : "boolean", group : "Misc", defaultValue : true},
		"horizontalScrolling" : {type : "boolean", group : "Misc", defaultValue : true}
	},
	defaultAggregation : "content",
	aggregations : {
    	"content" : {type : "sap.ui.core.Control", multiple : true, singularName : "content"}, 
    	"customHeader" : {type : "sap.ui.core.Control", multiple : false}, 
    	"footer" : {type : "sap.ui.core.Control", multiple : false}, 
    	"_internalHeader" : {type : "sap.m.Bar", multiple : false, visibility : "hidden"}
	},
	associations : {
		"leftButton" : {type : "sap.m.Button", multiple : false}, 
		"rightButton" : {type : "sap.m.Button", multiple : false}, 
		"initialFocus" : {type : "sap.ui.core.Control", multiple : false}
	},
	events : {
		"afterOpen" : {}, 
		"afterClose" : {}, 
		"beforeOpen" : {}, 
		"beforeClose" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.Popover with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @name sap.m.Popover.extend
 * @function
 */

sap.m.Popover.M_EVENTS = {'afterOpen':'afterOpen','afterClose':'afterClose','beforeOpen':'beforeOpen','beforeClose':'beforeClose'};


/**
 * Getter for property <code>placement</code>.
 * This is the information about on which side will the popover be placed at. Possible values are sap.m.PlacementType.Left, sap.m.PlacementType.Right, sap.m.PlacementType.Top, sap.m.PlacementType.Bottom, sap.m.PlacementType.Vertical, sap.m.PlacementType.Left.Horizontal, sap.m.PlacementType.Left.Auto. The default value is sap.m.PlacementType.Right. Setting this property while popover is open won't cause any rerendering of the popover, but it will take effect when it's opened again.
 *
 * Default value is <code>Right</code>
 *
 * @return {sap.m.PlacementType} the value of property <code>placement</code>
 * @public
 * @name sap.m.Popover#getPlacement
 * @function
 */

/**
 * Setter for property <code>placement</code>.
 *
 * Default value is <code>Right</code> 
 *
 * @param {sap.m.PlacementType} oPlacement  new value for property <code>placement</code>
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Popover#setPlacement
 * @function
 */


/**
 * Getter for property <code>showHeader</code>.
 * If a header should be shown at the top of the popover.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showHeader</code>
 * @public
 * @name sap.m.Popover#getShowHeader
 * @function
 */

/**
 * Setter for property <code>showHeader</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowHeader  new value for property <code>showHeader</code>
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Popover#setShowHeader
 * @function
 */


/**
 * Getter for property <code>title</code>.
 * Title text appears in the header. This property will be ignored when showHeader is set to false.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.m.Popover#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Popover#setTitle
 * @function
 */


/**
 * Getter for property <code>modal</code>.
 * If the popover will not be closed when tapping outside the popover. It also blocks any interaction with the background. The default value is false.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>modal</code>
 * @public
 * @name sap.m.Popover#getModal
 * @function
 */

/**
 * Setter for property <code>modal</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bModal  new value for property <code>modal</code>
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Popover#setModal
 * @function
 */


/**
 * Getter for property <code>offsetX</code>.
 * The offset for the popover placement in the x axis. It's with unit pixel.
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>offsetX</code>
 * @public
 * @name sap.m.Popover#getOffsetX
 * @function
 */

/**
 * Setter for property <code>offsetX</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iOffsetX  new value for property <code>offsetX</code>
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Popover#setOffsetX
 * @function
 */


/**
 * Getter for property <code>offsetY</code>.
 * The offset for the popover placement in the y axis. It's with unit pixel.
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>offsetY</code>
 * @public
 * @name sap.m.Popover#getOffsetY
 * @function
 */

/**
 * Setter for property <code>offsetY</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iOffsetY  new value for property <code>offsetY</code>
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Popover#setOffsetY
 * @function
 */


/**
 * Getter for property <code>contentWidth</code>.
 * Set the width of the content area inside Popover. When controls which adapt their size to the parent control are added directly into Popover, for example sap.m.Page control, a size needs to be specified to the content area of the Popover. Otherwise, Popover control isn't able to display the content in the right way. This values isn't necessary for controls added to Popover directly which can decide their size by themselves, for exmaple sap.m.List, sap.m.Image etc., only needed for controls that adapt their size to the parent control.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>contentWidth</code>
 * @public
 * @since 1.9.0
 * @name sap.m.Popover#getContentWidth
 * @function
 */

/**
 * Setter for property <code>contentWidth</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sContentWidth  new value for property <code>contentWidth</code>
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * @since 1.9.0
 * @name sap.m.Popover#setContentWidth
 * @function
 */


/**
 * Getter for property <code>contentHeight</code>.
 * Set the height of the content area inside Popover. When controls which adapt their size to the parent control are added directly into Popover, for example sap.m.Page control, a size needs to be specified to the content area of the Popover. Otherwise, Popover control isn't able to display the content in the right way. This values isn't necessary for controls added to Popover directly which can decide their size by themselves, for exmaple sap.m.List, sap.m.Image etc., only needed for controls that adapt their size to the parent control.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>contentHeight</code>
 * @public
 * @since 1.9.0
 * @name sap.m.Popover#getContentHeight
 * @function
 */

/**
 * Setter for property <code>contentHeight</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sContentHeight  new value for property <code>contentHeight</code>
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * @since 1.9.0
 * @name sap.m.Popover#setContentHeight
 * @function
 */


/**
 * Getter for property <code>enableScrolling</code>.
 * This property is deprecated. Please use properties verticalScrolling and horizontalScrolling instead. If you still use this property it will be mapped on the new properties verticalScrolling and horizontalScrolling.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enableScrolling</code>
 * @public
 * @deprecated Since version 1.15.0. 
 * This property is deprecated. Please use properties verticalScrolling and horizontalScrolling instead. If you still use this property it will be mapped on the new properties verticalScrolling and horizontalScrolling.
 * @name sap.m.Popover#getEnableScrolling
 * @function
 */

/**
 * Setter for property <code>enableScrolling</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnableScrolling  new value for property <code>enableScrolling</code>
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.15.0. 
 * This property is deprecated. Please use properties verticalScrolling and horizontalScrolling instead. If you still use this property it will be mapped on the new properties verticalScrolling and horizontalScrolling.
 * @name sap.m.Popover#setEnableScrolling
 * @function
 */


/**
 * Getter for property <code>verticalScrolling</code>.
 * This property indicates if user can scroll vertically inside popover when the content is bigger than the content area. However, when scrollable control (sap.m.ScrollContainer, sap.m.Page) is in the popover, this property needs to be set to false to disable the scrolling in popover in order to make the scrolling in the child control work properly.
 * Popover detects if there's sap.m.NavContainer, sap.m.Page, or sap.m.ScrollContainer as direct child added to Popover. If there is, Popover will turn off scrolling by setting this property to false automatically ignoring the existing value of this property.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>verticalScrolling</code>
 * @public
 * @since 1.15.0
 * @name sap.m.Popover#getVerticalScrolling
 * @function
 */

/**
 * Setter for property <code>verticalScrolling</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVerticalScrolling  new value for property <code>verticalScrolling</code>
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * @since 1.15.0
 * @name sap.m.Popover#setVerticalScrolling
 * @function
 */


/**
 * Getter for property <code>horizontalScrolling</code>.
 * This property indicates if user can scroll horizontally inside popover when the content is bigger than the content area. However, when scrollable control (sap.m.ScrollContainer, sap.m.Page) is in the popover, this property needs to be set to false to disable the scrolling in popover in order to make the scrolling in the child control work properly.
 * Popover detects if there's sap.m.NavContainer, sap.m.Page, or sap.m.ScrollContainer as direct child added to Popover. If there is, Popover will turn off scrolling by setting this property to false automatically ignoring the existing value of this property.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>horizontalScrolling</code>
 * @public
 * @since 1.15.0
 * @name sap.m.Popover#getHorizontalScrolling
 * @function
 */

/**
 * Setter for property <code>horizontalScrolling</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bHorizontalScrolling  new value for property <code>horizontalScrolling</code>
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * @since 1.15.0
 * @name sap.m.Popover#setHorizontalScrolling
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * The content inside the popover.
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.m.Popover#getContent
 * @function
 */


/**
 * Inserts a content into the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content is inserted at 
 *             the last position        
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Popover#insertContent
 * @function
 */

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Popover#addContent
 * @function
 */

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * @name sap.m.Popover#removeContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.Popover#removeAllContent
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.m.Popover#indexOfContent
 * @function
 */
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Popover#destroyContent
 * @function
 */


/**
 * Getter for aggregation <code>customHeader</code>.<br/>
 * Any control that needed to be displayed in the header area. When this is set, the showHeader property is ignored, and only this customHeader is shown on the top of popover.
 * 
 * @return {sap.ui.core.Control}
 * @public
 * @name sap.m.Popover#getCustomHeader
 * @function
 */


/**
 * Setter for the aggregated <code>customHeader</code>.
 * @param oCustomHeader {sap.ui.core.Control}
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Popover#setCustomHeader
 * @function
 */
	

/**
 * Destroys the customHeader in the aggregation 
 * named <code>customHeader</code>.
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Popover#destroyCustomHeader
 * @function
 */


/**
 * Getter for aggregation <code>footer</code>.<br/>
 * This is optional footer which is shown on the bottom of the popover.
 * 
 * @return {sap.ui.core.Control}
 * @public
 * @name sap.m.Popover#getFooter
 * @function
 */


/**
 * Setter for the aggregated <code>footer</code>.
 * @param oFooter {sap.ui.core.Control}
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Popover#setFooter
 * @function
 */
	

/**
 * Destroys the footer in the aggregation 
 * named <code>footer</code>.
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Popover#destroyFooter
 * @function
 */


/**
 * LeftButton is shown at the left edge of the bar in iOS, and at the right side of the bar for the other platforms. Please set this to null if you want to remove the left button from the bar. And the button is only removed from the bar, not destroyed. When showHeader is set to false, this property will be ignored.
 *
 * @return {string} Id of the element which is the current target of the <code>leftButton</code> association, or null
 * @public
 * @name sap.m.Popover#getLeftButton
 * @function
 */

/**
 * LeftButton is shown at the left edge of the bar in iOS, and at the right side of the bar for the other platforms. Please set this to null if you want to remove the left button from the bar. And the button is only removed from the bar, not destroyed. When showHeader is set to false, this property will be ignored.
 *
 * @param {string | sap.m.Button} vLeftButton 
 *    Id of an element which becomes the new target of this <code>leftButton</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Popover#setLeftButton
 * @function
 */


	
/**
 * RightButton is always shown at the right edge of the bar. Please set this to null if you want to remove the right button from the bar. And the button is only removed from the bar, not destroyed. When showHeader is set to false, this property will be ignored.
 *
 * @return {string} Id of the element which is the current target of the <code>rightButton</code> association, or null
 * @public
 * @name sap.m.Popover#getRightButton
 * @function
 */

/**
 * RightButton is always shown at the right edge of the bar. Please set this to null if you want to remove the right button from the bar. And the button is only removed from the bar, not destroyed. When showHeader is set to false, this property will be ignored.
 *
 * @param {string | sap.m.Button} vRightButton 
 *    Id of an element which becomes the new target of this <code>rightButton</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Popover#setRightButton
 * @function
 */


	
/**
 * Focus is set to the popover in the sequence of leftButton and rightButton when available. But if some other control neends to get the focus other than one of those two buttons, set the initialFocus with the control which should be focused on.
 *
 * @return {string} Id of the element which is the current target of the <code>initialFocus</code> association, or null
 * @public
 * @since 1.15.0
 * @name sap.m.Popover#getInitialFocus
 * @function
 */

/**
 * Focus is set to the popover in the sequence of leftButton and rightButton when available. But if some other control neends to get the focus other than one of those two buttons, set the initialFocus with the control which should be focused on.
 *
 * @param {string | sap.ui.core.Control} vInitialFocus 
 *    Id of an element which becomes the new target of this <code>initialFocus</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * @since 1.15.0
 * @name sap.m.Popover#setInitialFocus
 * @function
 */


	
/**
 * This event will be fired after the popover is opened. 
 *
 * @name sap.m.Popover#afterOpen
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.core.Control} oControlEvent.getParameters.openBy This refers to the control which opens the popover.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'afterOpen' event of this <code>sap.m.Popover</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Popover</code>.<br/> itself. 
 *  
 * This event will be fired after the popover is opened. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.Popover</code>.<br/> itself.
 *
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Popover#attachAfterOpen
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'afterOpen' event of this <code>sap.m.Popover</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Popover#detachAfterOpen
 * @function
 */

/**
 * Fire event afterOpen to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'openBy' of type <code>sap.ui.core.Control</code> This refers to the control which opens the popover.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.Popover#fireAfterOpen
 * @function
 */


/**
 * This event will be fired after the popover is closed. 
 *
 * @name sap.m.Popover#afterClose
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.core.Control} oControlEvent.getParameters.openBy This refers to the control which opens the popover.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'afterClose' event of this <code>sap.m.Popover</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Popover</code>.<br/> itself. 
 *  
 * This event will be fired after the popover is closed. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.Popover</code>.<br/> itself.
 *
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Popover#attachAfterClose
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'afterClose' event of this <code>sap.m.Popover</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Popover#detachAfterClose
 * @function
 */

/**
 * Fire event afterClose to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'openBy' of type <code>sap.ui.core.Control</code> This refers to the control which opens the popover.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.Popover#fireAfterClose
 * @function
 */


/**
 * This event will be fired before the popover is opened. 
 *
 * @name sap.m.Popover#beforeOpen
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.core.Control} oControlEvent.getParameters.openBy This refers to the control which opens the popover.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'beforeOpen' event of this <code>sap.m.Popover</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Popover</code>.<br/> itself. 
 *  
 * This event will be fired before the popover is opened. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.Popover</code>.<br/> itself.
 *
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Popover#attachBeforeOpen
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'beforeOpen' event of this <code>sap.m.Popover</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Popover#detachBeforeOpen
 * @function
 */

/**
 * Fire event beforeOpen to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'openBy' of type <code>sap.ui.core.Control</code> This refers to the control which opens the popover.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.Popover#fireBeforeOpen
 * @function
 */


/**
 * This event will be fired before the popover is closed. 
 *
 * @name sap.m.Popover#beforeClose
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.core.Control} oControlEvent.getParameters.openBy This refers to the control which opens the popover.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'beforeClose' event of this <code>sap.m.Popover</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Popover</code>.<br/> itself. 
 *  
 * This event will be fired before the popover is closed. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.Popover</code>.<br/> itself.
 *
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Popover#attachBeforeClose
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'beforeClose' event of this <code>sap.m.Popover</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Popover#detachBeforeClose
 * @function
 */

/**
 * Fire event beforeClose to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'openBy' of type <code>sap.ui.core.Control</code> This refers to the control which opens the popover.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.Popover#fireBeforeClose
 * @function
 */


/**
 * Close the popover
 *
 * @name sap.m.Popover.prototype.close
 * @function

 * @type void
 * @public
 */


/**
 * Open the popover.
 *
 * @name sap.m.Popover.prototype.openBy
 * @function
 * @param {object} 
 *         oControl
 *         This is the control to which the popover will be placed. It can be not only a UI5 control, but also an existing dom reference. The side of the placement depends on the placement property set in the popover.

 * @type void
 * @public
 */


/**
 * The method checks if the Popover is open. It returns true when the Popover is currently open (this includes opening and closing animations), otherwise it returns false.
 *
 * @name sap.m.Popover.prototype.isOpen
 * @function

 * @type boolean
 * @public
 * @since 1.9.1
 */


// Start of sap\m\Popover.js
jQuery.sap.require("sap.ui.core.Popup");
jQuery.sap.require("sap.m.Bar");
jQuery.sap.require("sap.ui.core.delegate.ScrollEnablement");
jQuery.sap.require("sap.m.InstanceManager");
jQuery.sap.require("sap.ui.core.theming.Parameters");

/* =========================================================== */
/*                   begin: lifecycle methods                  */
/* =========================================================== */
sap.m.Popover._bOneDesign = (sap.ui.core.theming.Parameters.get("sapMPlatformDependent") !== 'true');
sap.m.Popover._bIE9 = (jQuery.browser.msie && jQuery.browser.fVersion < 10);
/**
 * Initializes the popover control
 * @private
 */
sap.m.Popover.prototype.init = function(){
	this._firstOpen = true;

	// The offset of the arrow must be more than _arrowOffsetThreshold from the border of the popover content
	this._arrowOffsetThreshold = 15; // 10 (rounded corner) + 5 (rotate)
	
	this._marginTopInit = false;
	// The following 4 values are the margins which are used to avoid making the popover very near to the border of the screen
	this._marginTop = (!sap.m.Popover._bOneDesign && jQuery.os.ios) ? 44 : 48; //This is the default value, and dynamic calculation will be done in afterRendering
	
	this._marginLeft = 10;
	this._marginRight = 10;
	this._marginBottom = 10;
	
	this._$window = jQuery(window);
	
	this.oPopup = new sap.ui.core.Popup();
	this.oPopup.setShadow(true);
	this.oPopup.setAutoClose(true);
	this.oPopup.setAnimations(this._openAnimation, this._closeAnimation);
	
	// This is data used to position the popover depending on the placement property
	this._placements = [sap.m.PlacementType.Top, sap.m.PlacementType.Right, sap.m.PlacementType.Bottom, sap.m.PlacementType.Left, sap.m.PlacementType.Vertical, sap.m.PlacementType.Horizontal, sap.m.PlacementType.Auto];
	this._myPositions = ["center bottom", "begin center", "center top", "end center"];
	this._atPositions = ["center top", "end center", "center bottom", "begin center"];
	this._offsets = ["0 -18", "18 0", "0 18", "-18 0"];
	
	this._arrowOffset = 18;
	
	// used to judge if enableScrolling needs to be disabled
	this._scrollContentList = [sap.m.NavContainer, sap.m.Page, sap.m.ScrollContainer];
	
	// Make this.oPopup call this._setArrowPosition each time after its position is changed
	this._fnSetArrowPosition = jQuery.proxy(this._setArrowPosition, this);
	
	//the orientationchange event listener
	this._fnOrientationChange = jQuery.proxy(this._onOrientationChange, this);
	
	//CSN 0001875244 2013: on desktop explicitly close popover if position of triggering
	//element is moved. Make use of popup's 'followOf' feature. This ensures that popover is
	//closed when a containing scroll container is scrolled, be it via scrollbar or using the
	//mousewheel.
	//There is no need to do this for non desktop environments because the popover is closed
	//in those already, when scrolling in a container occurs. Using 'followOf' in that scenario
	//would lead to an error (I have tried it with an IPad)
	if(jQuery.device.is.desktop) {
		//the 'followOf' handler for our popup
		this.oPopup.setFollowOf(jQuery.proxy(function() {
			this.close();
		}, this));
	}
	
	var that = this;
	this.oPopup._applyPosition = function(oPosition){
		// avoid calling on being closed instances
		if(this.getOpenState() === sap.ui.core.OpenState.CLOSING){
			return;
		}
		//set flag to avoid double calculation
		if (!that._bPosCalced) {
			that._bCalSize = true;
			that._clearCSSStyles();
		}
		//calculate the best placement of the popover if placementType is horizontal,  vertical or auto
		var iPlacePos = jQuery.inArray(that.getPlacement(), that._placements);
		if (iPlacePos > 3 && !that._bPosCalced) {
			that._calcPlacement(that);
			return;
		}
		//update the "of" property on oPosition because parent can be already rerendered
		oPosition.of = (that._oOpenBy instanceof sap.ui.core.Control) ? that._oOpenBy.getDomRef() : that._oOpenBy;
		sap.ui.core.Popup.prototype._applyPosition.call(this, oPosition);
		that._fnSetArrowPosition();
		//reset the flags
		that._bCalSize = false;
		that._bPosCalced = false;
	};
	
	// when popup's close method is called by autoclose handler, the beforeClose event also needs to be fired.
	// popup's close method has been inherited here in order to fire the beforeClose event for calling close on
	// autoclose.
	this.oPopup.close = function(bBeforeCloseFired){
		if(!bBeforeCloseFired){
			that.fireBeforeClose({openBy: that._oOpenBy});
		}
		sap.ui.core.Popup.prototype.close.apply(this, Array.prototype.slice.call(arguments, 1));
	};
};

sap.m.Popover.prototype.onBeforeRendering = function() {
	if(this._sResizeListenerId){
		sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
		this._sResizeListenerId = null;
	}
	//if content has scrolling, disable scrolling automatically
	if(this._hasSingleScrollableContent()){
		this._forceDisableScrolling = true;
		jQuery.sap.log.info("VerticalScrolling and horizontalScrolling in sap.m.Popover with ID " + this.getId() +" has been disabled because there's scrollable content inside");
	}else{
		this._forceDisableScrolling = false;
	}
	
	if(!this._forceDisableScrolling){
		if(!this._oScroller){
			this._oScroller = new sap.ui.core.delegate.ScrollEnablement(this, this.getId() + "-scroll", {
				horizontal: this.getHorizontalScrolling(),
				vertical: this.getVerticalScrolling(),
				zynga: false,
				preventDefault: false,
				nonTouchScrolling: "scrollbar"
			});
		}
	}
};	

sap.m.Popover.prototype.onAfterRendering = function(){
	var $openedBy, $page, $header;

	//calculate the height of the header in the current page
	//only for the first time calling after rendering
	if(!this._marginTopInit){
		this._marginTop = 2;
		if(this._oOpenBy){
			$openedBy = (this._oOpenBy instanceof sap.ui.core.Control) ? this._oOpenBy.$() : jQuery(this._oOpenBy);
			//first check if the openedBy isn't inside a header
			if(!($openedBy.closest("header.sapMBar").length > 0)){
				$page = $openedBy.closest(".sapMPage");
				if($page.length > 0){
					$header = $page.children("header.sapMBar");
					if($header.length > 0){
						this._marginTop += $header.outerHeight();
					}
				}
			}
			this._marginTopInit = true;
		}
	}
	
	this._restoreFocus();
};

/**
 * Destroys the popover control
 * @private
 */
sap.m.Popover.prototype.exit = function(){
	if (this._sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
		this._sResizeListenerId = null;
	}
	this._$window.unbind("resize", this._fnOrientationChange);
	
	if(this.oPopup){
		this.oPopup.destroy();
		this.oPopup = null;
	}
	
	if(this._oScroller){
		this._oScroller.destroy();
		this._oScroller = null;
	}
	
	if(this._internalHeader){
		this._internalHeader.destroy();
		this._internalHeader = null;
	}
	
	if(this._headerTitle){
		this._headerTitle.destroy();
		this._headerTitle = null;
	}
};
/* =========================================================== */
/*                   end: lifecycle methods                    */
/* =========================================================== */



/* =========================================================== */
/*                   begin: API method                         */
/* =========================================================== */
/**
 * Opens the popover and set the popover position according to the {placement} property
 * around the {oControl} parameter.
 *
 * @param {object} oControl The control to which the popover is aligned based on the {placement} property
 * @public
 *
 */
sap.m.Popover.prototype.openBy = function(oControl, bSkipInstanceManager){
	// If already opened with the needed content then return
	var oPopup = this.oPopup,
		ePopupState = this.oPopup.getOpenState(),
		// The control that needs to be focused after popover is open is calculated in following sequence:
		// initialFocus, leftButton, rightButton, and popover itself.
		// focus has to be inside/on popover otherwise autoclose() would not work
		sFocusId = this.getInitialFocus() || this.getLeftButton() || this.getRightButton() || this.getId(),
		oParentDomRef, iPlacePos;
		
	if (ePopupState === sap.ui.core.OpenState.OPEN || ePopupState === sap.ui.core.OpenState.OPENING){
		if(this._oOpenBy === oControl) {
			//if the popover is open, and is opening by the same control again, just return
			return;
		}else{
			//if the popover is open, and is opening by another control, then first close it and open later.
			var afterClosed = function(){
				oPopup.detachEvent("closed", afterClosed, this);
				this.openBy(oControl);
			};
			oPopup.attachEvent("closed", afterClosed, this);
			this.close();
			return;
		}
	}
	
	if(!oControl){
		return;
	}
	
	//bind the resize event to window
	//CSN 2012 4216945
	//binding should be registered here (very early) because when keyboard in android closes at the same time, resize event needs to be reacted in order to
	//reposition the popover after the keyboard fully closes.
	if(jQuery.support.touch){
		this._$window.bind("resize", this._fnOrientationChange);
	}
	
	if(!this._oOpenBy || oControl !== this._oOpenBy){
		this._oOpenBy = oControl;
	}

	this.fireBeforeOpen({openBy: this._oOpenBy});
	
	oPopup.attachEvent("opened", this._handleOpened, this);
	oPopup.setInitialFocusId(sFocusId);
	// Open popup
	iPlacePos = jQuery.inArray(this.getPlacement(), this._placements);
	if(iPlacePos > -1){
		oParentDomRef = (this._oOpenBy instanceof sap.ui.core.Control) ? this._oOpenBy.getDomRef() : this._oOpenBy;
		oPopup.setAutoCloseAreas([oParentDomRef]);
		oPopup.setContent(this);
		//if position has to be calculated wait until it is calculated with setting the position
		if (iPlacePos <= 3) {
			oPopup.setPosition(this._myPositions[iPlacePos], this._atPositions[iPlacePos], oParentDomRef, this._calcOffset(this._offsets[iPlacePos]), "fit");
		}
		var that = this;
		var fCheckAndOpen = function(){
			if(oPopup.getOpenState() === sap.ui.core.OpenState.CLOSING){
				setTimeout(fCheckAndOpen, 150);
			}else{
				oPopup.open();
				
				//if popover shouldn't be managed by Instance Manager
				//e.g. SplitContainer in PopoverMode, the popover which contains the master area should be managed by the SplitContainer control
				if(!bSkipInstanceManager){
					sap.m.InstanceManager.addPopoverInstance(that);
				}
			}
		};
		fCheckAndOpen();
	}else{
		jQuery.sap.log.error(this.getPlacement() + "is not a valid value! It can only be top, right, bottom or left");
	}
	return this;
};

/**
 * Closes the popover when it's already opened.
 * @public
 */
sap.m.Popover.prototype.close = function(){
	var eOpenState = this.oPopup.getOpenState();
	if(!(eOpenState === sap.ui.core.OpenState.CLOSED || eOpenState === sap.ui.core.OpenState.CLOSING)){
		this.fireBeforeClose({openBy: this._oOpenBy});
		//beforeCloseEvent is already fired here, the parameter true needs to be passed into the popup's close method.
		this.oPopup.close(true);
	}
	return this;
};


sap.m.Popover.prototype.isOpen = function(){
	return this.oPopup && this.oPopup.isOpen();
};
/* =========================================================== */
/*                     end: API method                         */
/* =========================================================== */


/* =========================================================== */
/*                      begin: event handlers                  */
/* =========================================================== */

sap.m.Popover.prototype._clearCSSStyles = function() {
	var oStyle = this.getDomRef().style,
		$content = jQuery.sap.byId(this.getId() + "-cont"),
		$scrollArea = $content.children(".sapMPopoverScroll"),
		oContentStyle = $content[0].style,
		bSAreaPosAbs = $scrollArea.css("position") === "absolute",
		iContentWidth = this.getContentWidth(),
		iContentHeight = this.getContentHeight(),
		$arrow = jQuery.sap.byId(this.getId() + "-arrow");
	
	oStyle.overflow = "";

	oContentStyle.width = iContentWidth || bSAreaPosAbs ? $scrollArea.outerWidth(true) : "";
	oContentStyle.height = iContentHeight || bSAreaPosAbs ? $scrollArea.outerHeight(true) : "";
	oContentStyle.maxWidth = "";

	oStyle.left = "";
	oStyle.right = "";
	oStyle.top = "";
	oStyle.bottom = "";
	oStyle.width = "";
	oStyle.height = "";

	$scrollArea[0].style.width = "";
	
	// clear arrow styles
	$arrow.removeClass("sapMPopoverArrRight sapMPopoverArrLeft sapMPopoverArrDown sapMPopoverArrUp sapMPopoverCrossArr sapMPopoverFooterAlignArr sapMPopoverHeaderAlignArr");
	$arrow.css({
		left : "",
		top : ""
	});
};

sap.m.Popover.prototype._onOrientationChange = function(){
	if(this._bCalSize){
		return;
	}
	
	var ePopupState = this.oPopup.getOpenState();
	if(!(ePopupState === sap.ui.core.OpenState.OPEN || ePopupState === sap.ui.core.OpenState.OPENING)){
		return;
	}
	this.oPopup._applyPosition(this.oPopup._oLastPosition);
};

/**
 * Register the listener to close the popover when user taps outside both of the popover and the control that opens the popover.
 * @private
 */
sap.m.Popover.prototype._handleOpened = function(){
	var that = this;
	this.oPopup.detachEvent("opened", this._handleOpened, this);
	this.oPopup.attachEvent("closed", this._handleClosed, this);
	
//	recalculate the arrow position when the size of the popover changes.
	if(!jQuery.support.touch){
		setTimeout(function(){
			that._$window.bind("resize", that._fnOrientationChange);
		}, 0);
	}
	
	//register resize listener on scroll area
	if(!that._sResizeListenerId){
		that._sResizeListenerId = sap.ui.core.ResizeHandler.register(jQuery.sap.domById(that.getId() + "-scroll"),  that._fnOrientationChange);
	}

	this.fireAfterOpen({openBy: this._oOpenBy});
	this._firstOpen = false;
};

sap.m.Popover.prototype._handleClosed = function(){
	this.oPopup.detachEvent("closed", this._handleClosed, this);

	if (this._sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
		this._sResizeListenerId = null;
	}
	
	sap.m.InstanceManager.removePopoverInstance(this);
	this.fireAfterClose({openBy: this._oOpenBy});
};
/* =========================================================== */
/*                      end: event handlers                  */
/* =========================================================== */



/* =========================================================== */
/*                      begin: internal methods                  */
/* =========================================================== */
/**
 * This method detects if there's a sap.m.NavContainer instance added as a single child into popover's content aggregation or through one or more sap.ui.mvc.View controls.
 * If there is, sapMPopoverNav style class will be added to the root node of the control in order to apply some special css styles to the inner dom nodes.
 */
sap.m.Popover.prototype._hasSingleNavContent = function(){
	var aContent = this.getAggregation("content");
	
	while(aContent.length === 1 && aContent[0] instanceof sap.ui.core.mvc.View){
		aContent = aContent[0].getAggregation("content");
	}
	
	if(aContent.length === 1 && aContent[0] instanceof sap.m.NavContainer){
		return true;
	}else{
		return false;
	}
};

/**
 * This method detects if there's a sap.m.Page instance added as a single child into popover's content aggregation or through one or more sap.ui.mvc.View controls.
 * If there is, sapMPopoverPage style class will be added to the root node of the control in order to apply some special css styles to the inner dom nodes.
 */
sap.m.Popover.prototype._hasSinglePageContent = function(){
	var aContent = this.getAggregation("content");
	
	while(aContent.length === 1 && aContent[0] instanceof sap.ui.core.mvc.View){
		aContent = aContent[0].getAggregation("content");
	}
	
	if(aContent.length === 1 && aContent[0] instanceof sap.m.Page){
		return true;
	}else{
		return false;
	}
};

/**
 * If a scrollable control (sap.m.NavContainer, sap.m.ScrollContainer, sap.m.Page) is added to popover's content aggregation as a single child or through one or more sap.ui.mvc.View instances,
 * the scrolling inside popover will be disabled in order to avoid wrapped scrolling areas.
 * 
 * If more than one scrollable control is added to popover, the scrolling needs to be disabled manually.
 */
sap.m.Popover.prototype._hasSingleScrollableContent = function(){
	var aContent = this.getAggregation("content"), i;
	
	while(aContent.length === 1 && aContent[0] instanceof sap.ui.core.mvc.View){
		aContent = aContent[0].getAggregation("content");
	}
	
	if(aContent.length === 1){
		for(i = 0 ; i < this._scrollContentList.length ; i++){
			if(aContent[0] instanceof this._scrollContentList[i]){
				return true;
			}
		}
		return false;
	}else{
		return false;
	}
};


sap.m.Popover.prototype._calcOffset = function(sOffset){
	var iOffsetX = this.getOffsetX(),
		iOffsetY = this.getOffsetY();
	
	var aParts = sOffset.split(" ");
	return  (parseInt(aParts[0], 10) + iOffsetX) + " " + (parseInt(aParts[1], 10) + iOffsetY);
};

sap.m.Popover.prototype._calcPlacement = function() {
	var oPlacement = this.getPlacement();
	var oParentDomRef = (this._oOpenBy instanceof sap.ui.core.Control) ? this._oOpenBy.getDomRef() : this._oOpenBy;
	
	//calculate the position of the popover
	switch (oPlacement) {
	case sap.m.PlacementType.Auto:
		this._calcAuto();
		break;
	case sap.m.PlacementType.Vertical:
		this._calcVertical();
		break;
	case sap.m.PlacementType.Horizontal:
		this._calcHorizontal();
		break;
	}
	//set flag to avoid calling _applyPosition
	this._bPosCalced = true;

	//set position of popover to calculated position
	var iPlacePos = jQuery.inArray(this._oCalcedPos, this._placements);
	this.oPopup.setPosition(this._myPositions[iPlacePos], this._atPositions[iPlacePos], oParentDomRef, this._calcOffset(this._offsets[iPlacePos]), "fit");
};

sap.m.Popover.prototype._calcVertical = function() {
	var $parent = (this._oOpenBy instanceof sap.ui.core.Control) ? this._oOpenBy.$() : jQuery(this._oOpenBy);
	var iTopSpace = $parent.offset().top - this._marginTop + this.getOffsetY();
	var iParentBottom = $parent.offset().top + $parent.outerHeight();
	var iBottomSpace = this._$window.height() - iParentBottom - this._marginBottom - this.getOffsetY();

	// check on which side (top/bottom) of the parent is more space
	if (iTopSpace > iBottomSpace) {
		this._oCalcedPos = sap.m.PlacementType.Top;
	} else {
		this._oCalcedPos = sap.m.PlacementType.Bottom;
	}
};

sap.m.Popover.prototype._calcHorizontal = function() {
	var $parent = (this._oOpenBy instanceof sap.ui.core.Control) ? this._oOpenBy.$() : jQuery(this._oOpenBy);
	var iLeftSpace = $parent.offset().left - this._marginLeft + this.getOffsetX();
	var iParentRight = $parent.offset().left + $parent.outerWidth();
	var iRightSpace = this._$window.width() - iParentRight - this._marginRight - this.getOffsetX();

	// check on which side (left/right) of the parent is more space
	if (iLeftSpace > iRightSpace) {
		this._oCalcedPos = sap.m.PlacementType.Left;
	} else {
		this._oCalcedPos = sap.m.PlacementType.Right;
	}
};

sap.m.Popover.prototype._calcAuto = function() {
	//calculate which position is the best
	if (this._$window.width() > this._$window.height()) {
		//in "landscape" mode horizontal is preferred, therefore it is checked first
		if (this._checkHorizontal()) {
			this._calcHorizontal();
		} else if (this._checkVertical()) {
			this._calcVertical();
		} else {
			this._calcBestPos();
		}
	} else {
		if (this._checkVertical()) {
			this._calcVertical();
		} else if (this._checkHorizontal()) {
			this._calcHorizontal();
		} else {
			this._calcBestPos();
		}
	}

};

sap.m.Popover.prototype._checkHorizontal = function() {
	//check if there is enough space
	var $parent = (this._oOpenBy instanceof sap.ui.core.Control) ? this._oOpenBy.$() : jQuery(this._oOpenBy);
	var iLeftSpace = $parent.offset().left - this._marginLeft + this.getOffsetX();
	var iParentRight = $parent.offset().left + $parent.outerWidth();
	var iRightSpace = this._$window.width() - iParentRight - this._marginRight - this.getOffsetX();

	var $this = this.$();
	var iWidth = $this.outerWidth() + this._arrowOffset;
	
	if ((iWidth <= iLeftSpace) || (iWidth <= iRightSpace)) {
		return true;
	}
};

sap.m.Popover.prototype._checkVertical = function() {
	//check if there is enough space
	var $parent = (this._oOpenBy instanceof sap.ui.core.Control) ? this._oOpenBy.$() : jQuery(this._oOpenBy);
	var iTopSpace = $parent.offset().top - this._marginTop + this.getOffsetY();
	var iParentBottom = $parent.offset().top + $parent.outerHeight();
	var iBottomSpace = this._$window.height() - iParentBottom - this._marginBottom - this.getOffsetY();
	
	var $this = this.$();
	var iHeight = $this.outerHeight() + this._arrowOffset;
	
	if ((iHeight <= iTopSpace) || (iHeight <= iBottomSpace)) {
		return true;
	}
};

sap.m.Popover.prototype._calcBestPos = function() {
	// if all positions are not big enough, we calculate which position covers the most of the popover
	var $this = this.$();
	var iHeight = $this.outerHeight();
	var iWidth = $this.outerWidth();
	
	var $parent = (this._oOpenBy instanceof sap.ui.core.Control) ? this._oOpenBy.$() : jQuery(this._oOpenBy);
	var iTopSpace = $parent.offset().top - this._marginTop + this.getOffsetY();
	var iParentBottom = $parent.offset().top + $parent.outerHeight();
	var iBottomSpace = this._$window.height() - iParentBottom - this._marginBottom - this.getOffsetY();
	var iLeftSpace = $parent.offset().left - this._marginLeft + this.getOffsetX();
	var iParentRight = $parent.offset().left + $parent.outerWidth();
	var iRightSpace = this._$window.width() - iParentRight - this._marginRight - this.getOffsetX();
	
	//calculation for every possible position how many percent of the popover can be covered
	var fPopoverSize = iHeight * iWidth;
	var fAvailableHeight;
	var fAvaliableWidth;
	
	if ((this._$window.height() - this._marginTop - this._marginBottom) >= iHeight) {
		fAvailableHeight = iHeight;
	} else {
		fAvailableHeight = this._$window.height() - this._marginTop - this._marginBottom;
	}
	
	if ((this._$window.width() - this._marginLeft - this._marginRight) >= iWidth) {
		fAvaliableWidth = iWidth;
	} else {
		fAvaliableWidth = this._$window.width() - this._marginLeft - this._marginRight;
	}
	
	var fLeftCoverage = (fAvailableHeight * (iLeftSpace)) / fPopoverSize;
	var fRightCoverage = (fAvailableHeight * (iRightSpace)) / fPopoverSize;
	var fTopCoverage = (fAvaliableWidth * (iTopSpace)) / fPopoverSize;
	var fBottomCoverage = (fAvaliableWidth * (iBottomSpace)) / fPopoverSize;
	
	//choosing of the position with the biggest coverage and setting of the associated position
	var fMaxCoverageHorizontal = Math.max(fLeftCoverage, fRightCoverage);
	var fMaxCoverageVertical = Math.max(fTopCoverage, fBottomCoverage);
	
	if (fMaxCoverageHorizontal > fMaxCoverageVertical) {
		if (fMaxCoverageHorizontal === fLeftCoverage) {
			this._oCalcedPos = sap.m.PlacementType.Left;
		} else if(fMaxCoverageHorizontal === fRightCoverage) {
			this._oCalcedPos = sap.m.PlacementType.Right;
		}
	} else if (fMaxCoverageVertical > fMaxCoverageHorizontal) {
		if (fMaxCoverageVertical === fTopCoverage) {
			this._oCalcedPos = sap.m.PlacementType.Top;
		} else if(fMaxCoverageVertical === fBottomCoverage) {
			this._oCalcedPos = sap.m.PlacementType.Bottom;
		}
	} else if (fMaxCoverageVertical === fMaxCoverageHorizontal) {
		if (this._$window.height() > this._$window.width()) {
			// in portrait vertical is preferred
			if (fMaxCoverageVertical === fTopCoverage) {
				this._oCalcedPos = sap.m.PlacementType.Top;
			} else if(fMaxCoverageVertical === fBottomCoverage) {
				this._oCalcedPos = sap.m.PlacementType.Bottom;
			}
		} else {
			// in landscape horizontal is preferred
			if (fMaxCoverageHorizontal === fLeftCoverage) {
				this._oCalcedPos = sap.m.PlacementType.Left;
			} else if(fMaxCoverageHorizontal === fRightCoverage) {
				this._oCalcedPos = sap.m.PlacementType.Right;
			}
		}
	}
};
/**
 * Rearrange the arrow and the popover position.
 * @private
 */
sap.m.Popover.prototype._setArrowPosition = function() {
	var ePopupState = this.oPopup.getOpenState();
	if(!(ePopupState === sap.ui.core.OpenState.OPEN || ePopupState === sap.ui.core.OpenState.OPENING)){
		return;
	}

	var $parent = (this._oOpenBy instanceof sap.ui.core.Control) ? this._oOpenBy.$() : jQuery(this._oOpenBy),
		$this = this.$(),
		iPopoverBorderLeft = window.parseInt($this.css("border-left-width"), 10),
		iPopoverBorderRight = window.parseInt($this.css("border-right-width"), 10),
		iPopoverBorderTop = window.parseInt($this.css("border-top-width"), 10),
		iPopoverBorderBottom = window.parseInt($this.css("border-bottom-width"), 10),
		iPosTop = window.parseInt($this.css("top"), 10),
		iPosLeft = window.parseInt($this.css("left"), 10),
		sPlacement = this._oCalcedPos,
		$arrow = jQuery.sap.byId(this.getId() + "-arrow"),
		iArrowHeight = $arrow.outerHeight(true),
		$offset = $this.offset(),
		iOffsetX = this.getOffsetX(),
		iOffsetY = this.getOffsetY(),
		iWidth = $this.outerWidth(),
		iHeight = $this.outerHeight(),
		$content = jQuery.sap.byId(this.getId() + "-cont"),
		$scrollArea = $content.children(".sapMPopoverScroll"),
		bSAreaPosAbs = $scrollArea.css("position") === "absolute",
		iContentMarginLeft = window.parseInt($content.css("margin-left"), 10),
		iContentMarginRight = window.parseInt($content.css("margin-right"), 10),
		$header = $this.children(".sapMPopoverHeader"),
		$footer = $this.children(".sapMPopoverFooter"),
		iMaxContentHeight, iMaxWidth, oArrowPos, oFooterPos,
		iPosArrow, iHeaderHeight = 0, iFooterHeight = 0;
	
	if($header.length > 0){
		iHeaderHeight = $header.outerHeight(true);
	}
	if($footer.length > 0){
		iFooterHeight = $footer.outerHeight(true);
	}
	
	//calculates the current window borders
	var iWindowLeft = this._$window.scrollLeft(),
		iWindowTop = this._$window.scrollTop(),
		iWindowRight = this._$window.width(),
		iWindowBottom = this._$window.height();
	
	var iMarginLeft = this._marginLeft,
		iMarginRight = this._marginRight,
		iMarginTop = this._marginTop,
		iMarginBottom = this._marginBottom;
	
	var iLeft, iRight, iTop, iBottom;
	//make the popover never cover the control or dom node that opens the popvoer
	switch(sPlacement){
		case sap.m.PlacementType.Left:
			iMarginRight = iWindowRight - $parent.offset().left + this._arrowOffset - this.getOffsetX();
			iRight = iMarginRight;
			break;
		case sap.m.PlacementType.Right:
			iMarginLeft = $parent.offset().left + $parent.outerWidth() + this._arrowOffset + this.getOffsetX();
			iLeft = iMarginLeft;
			break;
		case sap.m.PlacementType.Top:
			iMarginBottom = iWindowBottom - $parent.offset().top + this._arrowOffset - this.getOffsetY();
			iBottom = iMarginBottom;
			break;
		case sap.m.PlacementType.Bottom:
			iMarginTop = $parent.offset().top + $parent.outerHeight() + this._arrowOffset + this.getOffsetY();
			iTop = iMarginTop;
			break;
	}
	
	//check the position of the popover, and do adjustment if necessary
	var bExceedHorizontal = (iWindowRight - iWindowLeft - iMarginRight - iMarginLeft) < iWidth,
		bExceedVertical = (iWindowBottom - iWindowTop - iMarginTop - iMarginBottom) < iHeight,
		bOverLeft = ($offset.left - iWindowLeft) < iMarginLeft,
		bOverRight = (iWindowRight - $offset.left - iWidth) < iMarginRight,
		bOverTop = ($offset.top - iWindowTop) < iMarginTop,
		bOverBottom = (iWindowBottom - $offset.top - iHeight) < iMarginBottom;
	
	if(bExceedHorizontal){
		iLeft = iMarginLeft;
		iRight = iMarginRight;
	}else{
		if(bOverLeft){
			iLeft = iMarginLeft;
		}else if(bOverRight){
			iRight = iMarginRight;
			//also move the left position of popover when there's enough space left.
			if(iPosLeft - iMarginRight > iMarginLeft){
				iLeft = iPosLeft - iMarginRight;
			}
		}
	}
	
	if(bExceedVertical){
		iTop = iMarginTop;
		iBottom = iMarginBottom;
	}else{
		if(bOverTop){
			iTop = iMarginTop;
		}else if(bOverBottom){
			iBottom = iMarginBottom;
			//also move the top position of popover when there's enough space left.
			if(iPosTop - iMarginBottom > iMarginTop){
				iTop = iPosTop - iMarginBottom;
			}
		}
	}
	
	$this.css({
		top: iTop,
		bottom: iBottom,
		left: iLeft,
		right: iRight
	});
	
	//set arrow offset
	if(sPlacement === sap.m.PlacementType.Left || sPlacement === sap.m.PlacementType.Right){
		iPosArrow = $parent.offset().top - $this.offset().top - iPopoverBorderTop + iOffsetY + 0.5 * ($parent.outerHeight(false) - $arrow.outerHeight(false));
		iPosArrow = Math.max(iPosArrow, this._arrowOffsetThreshold);
		iPosArrow = Math.min(iPosArrow, iHeight - this._arrowOffsetThreshold - $arrow.outerHeight());
		$arrow.css("top", iPosArrow);
	}else if(sPlacement === sap.m.PlacementType.Top || sPlacement === sap.m.PlacementType.Bottom){
		iPosArrow = $parent.offset().left - $this.offset().left - iPopoverBorderLeft + iOffsetX + 0.5 * ($parent.outerWidth(false) - $arrow.outerWidth(false));
		iPosArrow = Math.max(iPosArrow, this._arrowOffsetThreshold);
		iPosArrow = Math.min(iPosArrow, iWidth - this._arrowOffsetThreshold - $arrow.outerWidth());
		$arrow.css("left", iPosArrow);
	}
	
	//set arrow style
	switch(sPlacement){
		case sap.m.PlacementType.Left:
			$arrow.addClass("sapMPopoverArrRight");
			break;
			
		case sap.m.PlacementType.Right:
			$arrow.addClass("sapMPopoverArrLeft");
			break;
			
		case sap.m.PlacementType.Top:
			$arrow.addClass("sapMPopoverArrDown");
			break;
			
		case sap.m.PlacementType.Bottom:
			$arrow.addClass("sapMPopoverArrUp");
			break;
	}
	
	//adapt the width to screen
	if(sPlacement === sap.m.PlacementType.Left){
		iMaxWidth = $this.offset().left + iWidth - this._marginLeft;
	}else{
		iMaxWidth = iWindowRight - $this.offset().left - this._marginRight;
	}
	
	iMaxWidth -= (iPopoverBorderLeft + iPopoverBorderRight);
	
	if(bSAreaPosAbs){
		iMaxWidth -= (iContentMarginLeft + iContentMarginRight);
	}
	
	//adapt the height to screen
	iMaxContentHeight = $this.height() - iHeaderHeight - iFooterHeight - parseInt($content.css("margin-top"), 10) - parseInt($content.css("margin-bottom"), 10);
	//make sure iMaxContentHeight is NEVER less than 0
	iMaxContentHeight = Math.max(iMaxContentHeight, 0);
	
	$content.css({
		"max-width": iMaxWidth + "px",
		"height": iMaxContentHeight + "px"
	});
	
	//disable the horizontal scrolling when content inside can fit the container.
	if($scrollArea.outerWidth(true) <= $content.width()){
		$scrollArea.css("width", "100%");
	}

	//cross header or cross footer detection
	oArrowPos = $arrow.position();
	oFooterPos = $footer.position();
	if(sPlacement === sap.m.PlacementType.Left || sPlacement === sap.m.PlacementType.Right){
		if((oArrowPos.top + iArrowHeight) < iHeaderHeight){
			$arrow.addClass("sapMPopoverHeaderAlignArr");
		}else if( (oArrowPos.top < iHeaderHeight) || ($footer.length && ((oArrowPos.top + iArrowHeight) > oFooterPos.top) && (oArrowPos.top < oFooterPos.top)) ){
			$arrow.addClass("sapMPopoverCrossArr");
		}else if($footer.length && (oArrowPos.top > oFooterPos.top) ){
			$arrow.addClass("sapMPopoverFooterAlignArr");
		}
	}
	
	$this.css("overflow", "visible");
};

/**
 * Determine if the {oDomNode} is inside the popover or inside the control that opens the popover
 * @private
 */
sap.m.Popover.prototype._isPopupElement = function(oDOMNode) {
	var oParentDomRef = (this._oOpenBy instanceof sap.ui.core.Control) ? this._oOpenBy.getDomRef() : this._oOpenBy;
	return !!(jQuery(oDOMNode).closest(sap.ui.getCore().getStaticAreaRef()).length) || !!(jQuery(oDOMNode).closest(oParentDomRef).length);
};

/**
 * If customHeader is set, this will return the customHeaer. Otherwise it creates a header and put the
 * title and buttons if needed inside, and finally return this newly create header.
 * @private
 */
sap.m.Popover.prototype._getAnyHeader = function(){
	if(this.getCustomHeader()){
		return this.getCustomHeader().addStyleClass("sapMHeader-CTX", true);
	}else{
		if(this.getShowHeader()){
			this._createInternalHeader();
			return this._internalHeader.addStyleClass("sapMHeader-CTX", true);
		}
	}
};

sap.m.Popover.prototype._createInternalHeader = function(){
	if(!this._internalHeader){
		var that = this;
		this._internalHeader = new sap.m.Bar(this.getId() + "-intHeader");
		this.setAggregation("_internalHeader", this._internalHeader);
		this._internalHeader.addEventDelegate({
			onAfterRendering: function(){
				that._restoreFocus();
			}
		});
		return true;
	}else{
		return false;
	}
};

sap.m.Popover.prototype._openAnimation = function($Ref, iRealDuration, fnOpened){
	if(sap.m.Popover._bIE9 || (jQuery.os.android && jQuery.os.fVersion < 2.4)){
		//no animation in ie9 transition not supported
		//no animation in android 2.3.x, because it looks laggy.
		fnOpened();
	}else{
		setTimeout(function(){
			$Ref.addClass("sapMPopoverTransparent");
			$Ref.css("display", "block");
			// has to be done in a timeout to ensure transition properties are set
			setTimeout(function(){
				$Ref.bind("webkitTransitionEnd transitionend", function(){
					jQuery(this).unbind("webkitTransitionEnd transitionend");
					fnOpened();
				});
				$Ref.removeClass("sapMPopoverTransparent");
			}, 0);
		}, 0);
	}
};

sap.m.Popover.prototype._closeAnimation = function($Ref, iRealDuration, fnClose){
	if(sap.m.Popover._bIE9 || (jQuery.os.android && jQuery.os.fVersion < 2.4)){
		//no animation in android 2.3.x, because it looks laggy.
		fnClose();
	}else{
		// has to be done in a timeout to ensure transition properties are set
		$Ref.bind("webkitTransitionEnd transitionend", function(){
			jQuery(this).unbind("webkitTransitionEnd transitionend");
			setTimeout(function(){
				fnClose();
				$Ref.removeClass("sapMPopoverTransparent");
			}, 0);
		}).addClass("sapMPopoverTransparent");
	}
};

sap.m.Popover.prototype._restoreFocus = function(){
	if(this.isOpen()){
		//restore the focus after rendering when popover is already open
		var sFocusId = this.getInitialFocus() || this.getLeftButton() || this.getRightButton() || this.getId();
		jQuery.sap.focus(jQuery.sap.domById(sFocusId));
	}
};
/* =========================================================== */
/*                      end: internal methods                  */
/* =========================================================== */


/* ==================================================== */
/*                      begin: Setters                  */
/* ==================================================== */
/**
 * Set the placement of the popover.
 * @public
 *
 */
sap.m.Popover.prototype.setPlacement = function(sPlacement){
	this.setProperty("placement", sPlacement, true);
	var iPlacePos = jQuery.inArray(sPlacement, this._placements);
	if (iPlacePos <= 3) {
		// this variable is internal used for the placement of the popover
		this._oCalcedPos = sPlacement;
	}
	return this;
};

/**
 * The setter of the title property. If you want to show a header in the popover, don't forget to
 * set the {showHeader} to true.
 * @public
 */
sap.m.Popover.prototype.setTitle = function(sTitle){
	if(sTitle){
		this.setProperty("title", sTitle, true);
		if(this._headerTitle){
			this._headerTitle.setText(sTitle);
		}else{
			this._headerTitle = new sap.m.Label(this.getId() + "-title", {
				text: this.getTitle()
			});
			
			this._createInternalHeader();
			
			if(jQuery.os.ios || sap.m.Popover._bOneDesign){
				this._internalHeader.addContentMiddle(this._headerTitle);
			}else{
				this._internalHeader.addContentLeft(this._headerTitle);
			}
		}
	}
	
	return this;
};


/**
 * The setter of the cancelButton. If you want to show a cancel button in the popover, don't forget to
 * set the {showHeader} to true.
 * @public
 */
sap.m.Popover.prototype.setLeftButton = function(oButton){
	if(typeof(oButton) === "string"){
		oButton = sap.ui.getCore().byId(oButton);
	}

	var oOldLeftButton = sap.ui.getCore().byId(this.getLeftButton());

	if(oOldLeftButton === oButton){
		return this;
	}
	
	this._createInternalHeader();
	
	if(oButton){
		if(sap.m.Popover._bOneDesign){
			oButton.setType(sap.m.ButtonType.Transparent);
		}
		if(jQuery.os.ios || sap.m.Popover._bOneDesign){
			if(oOldLeftButton){
				this._internalHeader.removeAggregation("contentLeft", oOldLeftButton, true);
			}
			this._internalHeader.addAggregation("contentLeft", oButton, true);
		}else{
			if(oOldLeftButton){
				this._internalHeader.removeAggregation("contentRight", oOldLeftButton, true);
			}
			this._internalHeader.insertAggregation("contentRight", oButton, 0, true);
		}
		this._internalHeader.invalidate();
	}else{
		if(jQuery.os.ios || sap.m.Popover._bOneDesign){
			this._internalHeader.removeContentLeft(oOldLeftButton);
		}else{
			this._internalHeader.removeContentRight(oOldLeftButton);
		}
	}
	
	this.setAssociation("leftButton", oButton, true);
	return this;
};

/**
 * The setter of the doneButton. If you want to show a done button in the popover, don't forget to
 * set the {showHeader} to true.
 * @public
 */
sap.m.Popover.prototype.setRightButton = function(oButton){
	if(typeof(oButton) === "string"){
		oButton = sap.ui.getCore().byId(oButton);
	}
	
	var oOldRightButton = sap.ui.getCore().byId(this.getRightButton());

	if(oOldRightButton === oButton){
		return this;
	}
	
	this._createInternalHeader();
	
	if(oButton){
		if(sap.m.Popover._bOneDesign){
			oButton.setType(sap.m.ButtonType.Transparent);
		}
		if(oOldRightButton){
			this._internalHeader.removeAggregation("contentRight", oOldRightButton, true);
		}
		this._internalHeader.insertAggregation("contentRight", oButton, 1, true);
		this._internalHeader.invalidate();
	}else{
		this._internalHeader.removeContentRight(oOldRightButton);
	}
	
	this.setAssociation("rightButton", oButton, true);
	return this;
};


sap.m.Popover.prototype.setShowHeader = function(bValue){
	if(bValue === this.getShowHeader() || this.getCustomHeader()){
		return this;
	}
	
	if(bValue){
		//when internal header is created, show header
		//if not, the header will be created when setting title, leftButton, or rightButton
		//the latest time of the header creation before it's rendered is in the renderer, calling get any header.
		if(this._internalHeader){
			this._internalHeader.$().show();
		}
	}else{
		if(this._internalHeader){
			this._internalHeader.$().hide();
		}
	}
	
	//skip the rerendering
	this.setProperty("showHeader", bValue, true);
	
	return this;
};

/**
 * Setter for property <code>modal</code>.
 * This overwrites the default setter of the property <code>modal</code> to avoid rerendering the whole popover control.
 *
 * Default value is <code>false</code>
 *
 * @param {boolean} bModal  new value for property <code>modal</code>.
 * @param {string} [sModalCSSClass] a CSS class (or space-separated list of classes) that should be added to the block layer.
 * @return {sap.m.Popover} <code>this</code> to allow method chaining.
 * @public
 * @name sap.m.Popover#setModal
 * @function
 */
sap.m.Popover.prototype.setModal = function(bModal, sModalCSSClass) {
	if (bModal === this.getModal()) {
		return this;
	}

	this.oPopup.setModal(bModal, jQuery.trim("sapMPopoverBLayer " + sModalCSSClass || ""));

	// suppress re-rendering
	this.setProperty("modal", bModal, true);

	return this;
};

sap.m.Popover.prototype.setOffsetX = function(iValue){
	var ePopupState = this.oPopup.getOpenState(),
		oLastPosition, iPlacePos;
	
	this.setProperty("offsetX", iValue, true);
	
	//if popup isn't open, just return
	if(!(ePopupState === sap.ui.core.OpenState.OPEN)){
		return this;
	}
	
	//popup is open
	oLastPosition = this.oPopup._oLastPosition;
	iPlacePos = jQuery.inArray(this.getPlacement(), this._placements);	
	
	if(iPlacePos > -1){
		oLastPosition.offset = this._calcOffset(this._offsets[iPlacePos]);
		this.oPopup._applyPosition(oLastPosition);
	}
	
	return this;
};

sap.m.Popover.prototype.setOffsetY = function(iValue){
	var ePopupState = this.oPopup.getOpenState(),
		oLastPosition, iPlacePos;
	
	this.setProperty("offsetY", iValue, true);
	
	//if popup isn't open, just return
	if(!(ePopupState === sap.ui.core.OpenState.OPEN)){
		return this;
	}
	
	//popup is open
	oLastPosition = this.oPopup._oLastPosition;
	iPlacePos = jQuery.inArray(this.getPlacement(), this._placements);
	
	if(iPlacePos > -1){
		oLastPosition.offset = this._calcOffset(this._offsets[iPlacePos]);
		this.oPopup._applyPosition(oLastPosition);
	}
	
	return this;
};

sap.m.Popover.prototype.setEnableScrolling = function(bValue) {
	//map deprecated property to new properties
	this.setHorizontalScrolling(bValue);
	this.setVerticalScrolling(bValue);

	var oldValue = this.getEnableScrolling();
	if(oldValue === bValue){
		return;
	}

	this.setProperty("enableScrolling", bValue, true);

	return this;
};

sap.m.Popover.prototype.setVerticalScrolling = function(bValue) {
	var oldValue = this.getVerticalScrolling();
	if(oldValue === bValue) {
		return;
	}

	this.$().toggleClass("sapMPopoverVerScrollDisabled", !bValue);
	this.setProperty("verticalScrolling", bValue, true);

	if(this._oScroller) {
		this._oScroller.setVertical(bValue);
	}

	return this;

};

sap.m.Popover.prototype.setHorizontalScrolling = function(bValue) {
	var oldValue = this.getHorizontalScrolling();
	if(oldValue === bValue){
		return;
	}

	this.$().toggleClass("sapMPopoverHorScrollDisabled", !bValue);
	this.setProperty("horizontalScrolling", bValue, true);

	if(this._oScroller) {
		this._oScroller.setHorizontal(bValue);
	}

	return this;
};

/**
 * Returns the sap.ui.core.ScrollEnablement delegate which is used with this control.
 *
 * @private
 */
sap.m.Popover.prototype.getScrollDelegate = function(){
	return this._oScroller;
};

/* ==================================================== */
/*                      end: Setters                  */
/* ==================================================== */

sap.m.Popover.prototype.forceInvalidate = sap.ui.core.Control.prototype.invalidate;

// stop propagating the invalidate to static UIArea before the popover is opened once
// otherwise the open animation can't be seen for the first time
sap.m.Popover.prototype.invalidate = function(oOrigin){
	if(!this._firstOpen){
		this.forceInvalidate();
	}
};
