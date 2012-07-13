Ext.application({
	name        : 'configCenter',
	appFolder   : 'app',
	controllers : [ 'users' ],

	launch : function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                	xtype: 'userlogin',
                }
            ]
        });
	}
});


