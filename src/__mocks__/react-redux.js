
module.exports = {
    useDispatch: jest.fn(),
    connect: (mapStateToProps, mapDispatchToProps) => (ReactComponent) => ({
        mapStateToProps,
        mapDispatchToProps,
        ReactComponent
    }),
    Provider: ({ children }) => children,

}
