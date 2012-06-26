//Ext.define('AM.model.User', {
//    extend: 'Ext.data.Model',
//    fields: ['name', 'email']
//});



Ext.define('AM.model.User', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'name', type: 'string' },
        { name: 'email', type: 'string' }
    ]
});