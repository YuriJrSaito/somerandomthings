import '../table.scss';

const Cell = ({ data, componentType }: { data: any, componentType: string }) => {
    return (
        <>
            {
                componentType == 'text' &&
                <td><span>{data}</span></td>
            }
            {
                componentType == 'img' &&
                <td><img src={data}></img></td>
            }
        </>
    );
}

export default Cell;