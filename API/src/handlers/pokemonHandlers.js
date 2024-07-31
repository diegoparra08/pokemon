const { getByNameController, getByIdController } = require('../controllers/pokemonControllers');


const getPokemonById = async (req, res) => {
    const { id } = req.params;

    try {

        if (!id) {

            throw new Error("Pokemon ID is missing")

        } else {

            const getById = await getByIdController(id);
            return res.status(200).json(getById)
        }

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }

}

const getPokemonByName = async (req, res) => {
    const { name } = req.query;

    try {

        if (!name) {

            throw new Error("Pokemon name is missing")

        } else if (typeof name !== 'string') {

            throw new Error('The value provided for "Name" is not valid')

        } else {

            const getByName = await getByNameController(name);

            return res.status(200).json(getByName);
        }
    } catch (error) {
        
        return res.status(500).json({ error: error.message })
    }

}

module.exports = { getPokemonById, getPokemonByName };
