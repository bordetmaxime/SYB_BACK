const { Box } = require('../models');
const {boxsView,  boxView} = require('../dataviews/boxView');

const boxController = {
    
    getAllBox: async (req, res, next) => {
    try {
        const boxId = req.params.id;
        const boxs = await Box.findAll(
          {
            where: {box_user_id: boxId},
          },
        );
  
        if (!boxs) {
          res.status(404).json(`Cant find cards with listId ${boxId}`);
        } else {
          res.json(boxsView(boxs));
        }
      } catch (error) {
        next(error);
      }
    },


    createOrModify: async (req, res, next) => {
        try {
            const {title, description, category, link, userid } = req.body;

                Box.create({
                    box_title : title,
                    box_description: description,
                    box_link: link,
                    box_category: category,
                    box_user_id: userid,
                    });
                    

    res.json("box créer ");

} catch (err) {
    next(err);
  }
},

deleteBox: async (req, res, next) => {
    try {
        const boxId = req.params.id;
        const box = await Box.findByPk(boxId);
        if (box) {
          await box.destroy();
          res.json('OK');
        } else {
          res.status(404).send(`Cant delete list with id ${boxId}`);
        }
      } catch (err) {
        next(err);
      }
    },

    findOneBox: async (req, res, next) => {
        try {
            const boxId = req.params.id;
            const boxs = await Box.findAll(
              {
                where: {box_id: boxId},
              },
            );
      
            if (!boxs) {
              res.status(404).json(`Cant find cards with listId ${boxId}`);
            } else {
              res.json(boxsView(boxs));
            }
          } catch (error) {
            next(error);
          }
        },
    





}



module.exports = boxController;