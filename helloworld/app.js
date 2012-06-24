Ext.Loader.setConfig({
	enabled : true
});

Ext.application({
	// requires: 'Ext.container.Viewport',
	name : 'AM',

	appFolder : 'app',

	controllers : [ 'Users' ],


	launch : function() {
		Ext.create('Ext.container.Viewport', {
			layout : 'fit',
			items : {
				xtype : 'userlist'
			}
		});
	}
});