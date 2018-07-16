export default (
  {
    name,
    className = '',
    size = '',
    color = '',
    style = {}
  }
) => (
  <span className={['svg-icon', className].join(' ')} style={style}>
    <svg className={['icon-svg', size].join(' ')} style={{fill: color}}>
      <use xlinkHref={`#${name}`}/>
    </svg>
  </span>
);
