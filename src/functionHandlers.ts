const someEventHandlerName = (context: any, complete: any, modules: any) => {
    complete({ fakeData: true}).ok().next();
};

export default {
    someEventHandlerName,
}