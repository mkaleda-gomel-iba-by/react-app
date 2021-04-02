export function loggerMiddleware() {
    return (next) => (action) => {
        console.group(action.type);
        console.info('Params', action.payload);
        console.groupEnd();
        return next(action);
    };
}