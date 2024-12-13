// backend/controllers/characterController.js
const Character = require('../models/Character');

exports.getCharacter = async (req, res) => {
  const { id } = req.params;
  try {
    const character = await Character.findByPk(id);
    if (!character) {
      return res.status(404).json({ message: 'Персонаж не найден' });
    }
    res.json(character);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка сервера', error });
  }
};

const User = require('../models/User');

exports.getUserCharacters = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }

    // Предполагается, что есть связь между User и Character
    const characters = await Character.findAll({ where: { userId: id } });
    res.json(characters);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка сервера', error });
  }
};