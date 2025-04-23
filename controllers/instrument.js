const models = require('../database/models');

const createInstrument = async (req, res) => {
  try {
    const instrument = await models.Instrument.create(req.body);
    return res.status(201).json({ instrument });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const getAllInstruments = async (req, res) => {
  try {
    const instruments = await models.Instrument.findAll();
    return res.status(200).json({ instruments });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const updateInstrument = async (req, res) => {
  try {
    const instrument = await models.Instrument.findByPk(req.params.id);
    if (!instrument) {
      return res.status(404).json({ error: 'Instrumento no encontrado' });
    }
    await instrument.update(req.body);
    return res.status(200).json({ updated: instrument });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deleteInstrument = async (req, res) => {
  try {
    const instrument = await models.Instrument.findByPk(req.params.id);
    if (!instrument) {
      return res.status(404).json({ error: 'Instrumento no encontrado' });
    }
    await instrument.destroy();
    return res.status(200).json({ deleted: req.params.id });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  createInstrument,
  getAllInstruments,
  updateInstrument,
  deleteInstrument,
};
