export declare namespace JSX {
    interface IntrinsicElements {
        [elemName: string]: any
    }
    interface ElementAttributesProperty {
        props: any;
    }
    type Element = string
}

type Factory<T> =
    (
        tag: T | string,
        attr: {
            [key: string]: any
            children?: T | string | (T | string)[]
        }
    ) => T | string

const jsx: Factory<(arg: any) => JSX.Element> =
    (tag, att) => {
        if (typeof tag == "function")
            return gen(tag)(att)

        if (typeof tag == "string") {
            let { children } = att
            if (!children) children = []
            if (!Array.isArray(children)) children = [children]
        
            return ``
                +`<${tag}>`
                +`${children.join("")}`
                +`<${tag}/>`
        }
        return ""
    }

export {
    jsx,
    jsx as jsxs,
    jsx as Fragment,
}

export const gen = (
    component: (...args: any[]) => JSX.Element
) => {
    const args = 
        /^\((.+?)\)/.exec(component.toString())?.[1]?.split(", ") || []
    console.log(args)
    return (props: any) => component(
        ...args.map(arg => props[arg])
    )
}