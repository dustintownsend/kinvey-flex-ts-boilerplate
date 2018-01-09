/**
 * TODO: add kinvey-flex-sdk type binding file
 * use require instead of import until we have the type binding file
 */
// import * as sdk from 'kinvey-flex-sdk';
const sdk = require('kinvey-flex-sdk');

import dataHandlers from "./dataHandlers";
import functionHandlers from "./functionHandlers";
import authHandlers from "./authHandlers";

sdk.service((err: any, flex: any) => {
    const { data, functions, auth } = flex;
    
    const widgets = data.serviceObject('widgets');

    // GET widgets/1
    widgets.onGetById(dataHandlers.onGetWidgetById);

    // POST _flexFunctions/someEventHandlerName
    functions.register('someEventHandlerName', functionHandlers.someEventHandlerName);

    // POST /_auth/myAuth
    auth.register('myAuth', authHandlers.authenticate);
});
