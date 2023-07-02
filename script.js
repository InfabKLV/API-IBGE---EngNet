let UF = document.getElementById("muni");

async function getMunicipios(){
    const response = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/GO/municipios");
    const data = await response.json();
    return data.map( (municipio) => municipio.nome);
};

getMunicipios().then( (municipios) => {

    const listaMunicipios = document.getElementById("municipios");

    for(let i = 0; i < municipios.length; i++ ){
        const municipio = municipios[i];
        const li = document.createElement("li");
        li.innerHTML = municipio;
        listaMunicipios.appendChild(li);
    }
});