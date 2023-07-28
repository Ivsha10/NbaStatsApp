const ListItem = ({data}) => {
    return (
        
        data && Object.keys(data).map(key =>
                 <li className="statitem" key={key}>
                   {key.includes('_') ? (key = key.replaceAll('_', ' ')).toUpperCase(): key.toUpperCase()}: {/* //Prop name */}
                    {key.includes(' ') ? data[key = key.replaceAll(' ', '_')] : data[key]}
                  </li>) //Prop value
        
        
    )
}

export default ListItem
