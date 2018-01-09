const onGetWidgetById = (request: any, complete: any, modules: any) => {
    let entityId = request.entityId;
    let entity = null;
    // Do some logic to get the entity id from the remote data store
    // Assume that data is retrieved and stored in "entity" variable
    // After entity is retrieved, check to see if it exists
    entity = {
      entityId,
      fakeData: true
    };
    if (typeof entity === 'undefined' || entity === null) {
      return complete("The entity could not be found").notFound().next();
    } else  {
      // return the entity
      return complete().setBody(entity).ok().next();
    }
};

export default {
    onGetWidgetById,
}