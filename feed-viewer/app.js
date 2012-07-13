Ext.application({
    name: 'FV',

    // All the paths for custom classes
    paths: {
        'Ext.ux': './ux/'
    },

    // Define all the controllers that should initialize at boot up of your application
    controllers: [
        'Articles',
        'Feeds'
    ],
    
    autoCreateViewport: true
});
