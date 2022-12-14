class RMservice{
    _APIurl = 'https://rickandmortyapi.com/api/character';

    _transformChar = (res) =>{
        return{
            name: res.results[0].name,
            photo: res.results[0].image
        }
    }

    getResource = async (url) => {
        let res = await fetch(url);
        if (!res.ok){
            throw new Error(`Could not fetch ${url}\nStatus: ${res.status}`)
        }
        return await res.json();
    }

    getCharacter = async (id) => {
        const res = await this.getResourse(`${this._APIurl}/${id}`);
        return this._transformChar(res);
    }

    getAllChars = async () =>{
        const res = await this.getResource(this._APIurl);
        return res;
    }
}
export default RMservice;