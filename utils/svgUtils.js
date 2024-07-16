import iconList from '@utils/svgList.json';

function childrenReactComponent(key, children, color, customFill) {
    color = !!color ? color : 'currentColor';
    const fill = customFill ? customFill : children.fill == '#98A4B4' ? color : children.fill;

    if (children.tagName == 'path') {
        return (
            <path
                key={key}
                d={children['d']}
                fillRule={children['fill-rule']}
                clipRule={children['clip-rule']}
                stroke={children.stroke == '#98A4B4' ? color : children.stroke}
                strokeWidth={children['stroke-width']}
                strokeLinecap={children['stroke-linecap']}
                strokeLinejoin={children['stroke-linejoin']}
                fill={fill}
            />
        );
    } else if (children.tagName == 'rect') {
        return <rect key={key} x={children.x} y={children.y} width={children.width} height={children.height} rx={children.rx} fill={fill} />;
    }
}

export function iconReactComponent(props = {}, name) {
    const { className, size = 24, color, fill } = props;
    const target = iconList[name];
    if (!target) return null;
    return (
        <svg className={className} height={size} width={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {target.map((item, i) => childrenReactComponent(i, item, color, fill))}
        </svg>
    );
}

const App = (props) => iconReactComponent(props, 'App');

export {
    App
   
};