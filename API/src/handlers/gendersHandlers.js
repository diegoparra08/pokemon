const { Model } = require('sequelize');
const { getGenderByIdController } = require('../controllers/genderControllers');

const getGenderById = async (req, res) => {

    const { id } = req.params;

    try {

        if (!id) {

            throw new Error("Gender ID is missing")

        } else {

            const getById = await getGenderByIdController(id);
            return res.status(200).json(getById)
        }
    } catch (error) {

        return res.status(500).json({ error: error.message })

    }
};



module.exports = { getGenderById };