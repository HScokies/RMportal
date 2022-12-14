import { Card_item, Cards_container } from '../../rules';
import Img from './def.svg';
import { Link } from 'react-router-dom';

function Card({ data}) {
    return (
        <Cards_container>
            {
                data ?
                    (
                        data.map(item => {
                            return (
                                <Link to={`/${item.id}`} key={item.id}>
                                    <Card_item>
                                        <img src={item.image} alt={item.name} />
                                        <h2>{item.name}</h2>
                                    </Card_item>
                                </Link>
                            );
                        })
                    ) : null
            }

            {/*             
<Card_item>
<img alt='Pic' src={Img}/>
<h2>Marty</h2>
</Card_item>
*/}
        </Cards_container>
    );
}
export default Card