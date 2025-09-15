import  dados from "../models/dados.js";

const {barbies} = dados;
let resultado = barbies;    

const getAllBarbies = (req, res) => {
    res.status(200).json ({
        total: resultado.length,
        barbies: resultado
    });
} 

const getBarbieById = (req, res) => {
    const id = parseInt(req.params.id);
    

    const barbie = barbies.find(b => b.id === id);


    if(!barbie) {
        res.status(404).json({
            sucess: false,
            message: `A barbie não existe!`
        });
    }

        res.status(200).json ({
        total: barbie.length,
        barbie: barbie
    });
}

const createBarbies = (req, res) => {
    const {nome, profissao, anoLancamento} = req.body;

    if (!nome || !profissao) {
        return res.status(400).json ({
            sucess: false,
            menssage: "Nome e Profissão são obrigatorios"
        });
    }

    const novaBarbie = {
        id: barbies.length + 1,
        nome: nome, 
        profissao: profissao,
        anoLancamento: parseInt(anoLancamento)
 
    }

    barbies.push(novaBarbie);

    res.status(201).json({
        sucess: true,
        menssage: "Barbie criada com sucesso!",
        barbie: novaBarbie
    });
}

const deleteBarbie = (req, res) => {
    const id = parseInt(req.params.id);

    if(isNaN(id)) {
        return res.status(400).json({
            sucess: false,
            message: "O ID deve ser válido"
        });
    }

    const barbieParaRemover = barbies.find(b => b.id === id);

    if (!barbieParaRemover) {
        return res.status(404).json({
            sucess: false,
            message: `Barbie com o id: ${id} não existe!`
        });
    }

    const filterBarbie = barbies.filter(barbie => barbie.id !== id);
    
    barbies.splice(0, barbies.length, ...filterBarbie);

    res.status(200).json ({
        sucess: true,
        message: `A Barbie de id: ${id} foi removida com sucesso!`
    });
}

const updateBarbie = (req, res) => {
    const id = parseInt(req.params.id);
    const {nome, profissao, anoLancamento} = req.body;
    const idParaEditar = id;

    if(isNaN(idParaEditar)) {
        return res.status(400).json({
            sucess: false,
            message: `O id deve ser um numero válido`
        }) 
    }

    const barbieExistente = barbies.find(barbie => barbie.id === id);

    if (!barbieExistente) {
        return res.status(404).json({
            sucess: false,
            message: `A barbie com o id: ${id} não existe`
        })
    }
    
    const barbieAtualizada = barbies.map(barbie => barbie.id === idParaEditar ? {
        ...barbie,
        ...(nome && {nome}),
        ...(profissao && {profissao}),
        ...(anoLancamento && {anoLancamento})
        
    }
        :barbie
    )

    barbies.slice(0, barbies.length, ...barbieAtualizada);

    const barbieEditada = barbies.find (barbie => barbie.id === idParaEditar);

    res.status(200).json({
        sucess: true,
        message: `Dados atualizados com sucesso da Barbie`,
        barbie: barbieEditada
    })
}


export { getAllBarbies, getBarbieById, createBarbies, deleteBarbie, updateBarbie};