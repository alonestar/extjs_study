//Ext.define('AM.store.Users', {
//    extend: 'Ext.data.Store',
//    model: 'AM.model.User',
//
//    data: [
//        {name: 'Store_Ed',    email: 'ed@sencha.com'},
//        {name: 'Store_Tommy', email: 'tommy@sencha.com'}
//    ]
//});


Ext.define('AM.store.Users', {
    extend: 'Ext.data.Store',
    model: 'AM.model.User',
    autoLoad: true,

    proxy: {
        type: 'ajax',
        api: {
            read: 'data/users.json',
            update: 'data/updateUsers.json'
        },
        reader: {
            type: 'json',
            root: 'users',
            successProperty: 'success'
        }
    }
});