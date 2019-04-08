import DBQuery from "./dbquery.controller";

class Base extends DBQuery {
  constructor(model) {
    super(model);

    if (!model) {
      throw new Error('Model is missing');
    }

    this.model = model;
  }

  createItem = async (req, res) => {
    const { body } = req;
    
    try {
        const response = await this.create(this.model, body)
        return res.status(200).json(response);
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            message: 'An error occured when creating'
        })
    }
  }
updateItem = async (req, res) => {
    const { body, params: { id } } = req;
    console.log(body);
    body.id = id;

    try {
        const response = await this.update(this.model, body)
        return res.status(200).json(response);
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            message: 'An error occured when updating'
        })
    }
  }
  deleteItem = async (req, res, next, id) => {
    try {
        const response = await this.delete(this.model, id)
        return res.status(200).json(response);
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            message: 'An error occured when deleting'
        })
    }
  }

  findAllItems = async (req, res) => {
    try {
        const response = await this.findAll(this.model)
        return res.status(200).json(response);
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            message: 'An error occured when finding'
        })
    }
  }

  getItem = async (req, res) => {
      const { details } = req;
      return res.status(200).json(details);
  }
  findItemById = async (req, res, next, id) => {
    try {
        const response = await this.findbyId(this.model, id)
        req.details = response;
        next();
        // return res.status(200).json(response);
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            message: 'An error occured when finding'
        })
    }
  }

}

export default Base;
