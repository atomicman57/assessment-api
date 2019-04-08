
class DBQuery {
  create = (model, body) => {
    try {
      return model.create(body);
    } catch (e) {
      throw new Error(e);
    }
  };

  update = (model, body) => {
      try {
          return model.findByIdAndUpdate(
              body.id,
              body,
              { new: true }
          ).exec();
      } catch (e) {
          throw new Error(e);
      }
  };

  findbyId = async (model, id) => {
      try {
          return model.findById(id).exec();
      } catch (e) {
          throw new Error(e);
      }
  };

  findAll = (model, body) => {
      try {
        return model.find({ deleted_at: null }).exec();
      } catch (e) {
        throw new Error(e);
      }
  };

   delete = (model, id) => {
      try {
          return model.findByIdAndUpdate(
              id,
              {
               deleted_at: Date.now(),
              },
              { new: true }
          ).exec();
      } catch (e) {
          throw new Error(e);
      }
  };

}

export default DBQuery;