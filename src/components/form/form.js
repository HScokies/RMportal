import {Form_Container} from '../../rules';
function Form ({updSearch, setPage}){
    return(
        <Form_Container>
            <p>Find a character by name:</p>
            <div className='Input-container'>
                <input id='input' type='text'/>
                <button onClick={() => {
                    console.log(document.getElementById('input').value);
                    setPage(1);
                    updSearch(document.getElementById('input').value);
                }}>FIND</button>
            </div>
        </Form_Container>
    );
}
export default Form;