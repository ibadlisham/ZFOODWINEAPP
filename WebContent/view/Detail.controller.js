sap.ui.controller("sap.ui.demo.myFiori.view.Detail", {
	
	handleNavBack : function (evt) { 
		this.nav.back("Empty");
	},
	
	handleLineItemPress : function (evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("LineItem", context);
	},
	
});
