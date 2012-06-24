Ext.Loader.setConfig({
	enabled : true
});

Ext.application({
	// requires: 'Ext.container.Viewport',
	name : 'AM',

	appFolder : 'app',

	controllers : [ 'Users' ],


	launch : function() {

	}
});




/**
 * mvc study
 * ============================================
Ext.create('Ext.container.Viewport', {
	layout : 'fit',
	items : {
		xtype : 'userlist'
	}
});
=========*/		
/**
 * automatic loader layout and containsers study
 * =============================================
Ext.create('Ext.panel.Panel', {
    renderTo: Ext.getBody(),
    width: 400,
    height: 300,
    title: 'Container Panel',
    items: [
        {
            xtype: 'panel',
            title: 'Child Panel 1',
            height: 100,
            width: '75%'
        },
        {
            xtype: 'panel',
            title: 'Child Panel 2',
            height: 100,
            width: '75%'
        }
    ]
});

Ext.create('Ext.panel.Panel', {
    renderTo: Ext.getBody(),
    width: 400,
    height: 200,
    title: 'Container Panel',
    layout: 'column',
    items: [
        {
            xtype: 'panel',
            title: 'Child Panel 1',
            height: 100,
            columnWidth: 0.5
        },
        {
            xtype: 'panel',
            title: 'Child Panel 2',
            height: 100,
            columnWidth: 0.5
        }
    ]
});
var containerPanel = Ext.create('Ext.panel.Panel', {
    renderTo: Ext.getBody(),
    width: '100%',
    height: 200,
    title: 'Container Panel',
    layout: 'column',
    suspendLayout: true // Suspend automatic layouts while we do several different things that could trigger a layout on their own
});
// Add a couple of child items.  We could add these both at the same time by passing an array to add(),
// but lets pretend we needed to add them separately for some reason.
containerPanel.add({
    xtype: 'panel',
    title: 'Child Panel 1',
    height: 100,
    columnWidth: 0.5
});
containerPanel.add({
    xtype: 'panel',
    title: 'Child Panel 2',
    height: 100,
    columnWidth: 0.5
});
// Turn the suspendLayout flag off.
containerPanel.suspendLayout = false;
// Trigger a layout.
containerPanel.doLayout();
=========*/	