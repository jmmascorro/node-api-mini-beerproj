import { Beer } from "../models/beerModel.js";

export const getBeers = (req, res) => {
    Beer.findAll()
    .then(beers => {
        res.status(200).send(beers)
    })
    .catch(err => {
        console.log(err)
    })
}

export const getBeerById = (req, res) => {
    const id = parseInt(req.params.id);
  Beer.findByPk(id)
  .then(beer => {
    res.status(200).send(beer || `Beer with the id of ${id} not found`)
  })
  .catch(err => {
    console.log(err)
  })
};


export const addNewBeer = (req, res) => {
    Beer.create({
        name: req.body.name,
        abv: req.body.abv,
        image_url: req.body.image_url,
        tagline: req.body.tagline,
        first_brewed: req.body.first_brewed,
        ph: req.body.ph
    })
    res.status(201).send({
        message: "Created"
    })
    .catch(err => {
        console.log(err)
    })
}

// export const deleteBeer = (req, res) => {
//     const id = parseInt(req.params.id);
//     Beer.destroy({
//         where: {id: id}
//     }).then(() => {
//     res.status(204).end();
//     });
// }