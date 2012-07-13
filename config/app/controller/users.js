Ext.define('configCenter.controller.users', {
	extend : 'Ext.app.Controller',
	views  : [ 'user.login' ],
//	models : [ 'userLogin' ],

    init: function() {
        this.control({
            'viewport > userlogin': {
                itemdblclick: this.editUser
            }
        });
    },

    editUser: function(grid, record) {
        console.log('Double clicked on ' + record.get('name'));
    },
});