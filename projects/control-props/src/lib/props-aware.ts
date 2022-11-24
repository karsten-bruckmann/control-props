export type PropsAware<TBase, TProps> = TBase & {
    prop: <K extends keyof TProps>(key: K) => TProps[K];
    setProp: <K extends keyof TProps>(key: K, value: TProps[K]) => void;
};

export function propsAware<TBase, TProps>(
    base: TBase,
    initialProps: TProps
): PropsAware<TBase, TProps> {
    const props: TProps = { ...initialProps };
    const extended = base as PropsAware<TBase, TProps>;
    extended.prop = <K extends keyof TProps>(key: K) => props[key];
    extended.setProp = <K extends keyof TProps>(key: K, value: TProps[K]) => {
        props[key] = value;
    };
    return extended;
}
