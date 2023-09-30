import Router from "express";
import bodyParser from "body-parser";
import { addNewBeer, getBeerById, getBeers } from "../controllers/beerController.js";

const router = Router();

router.get("/", (req, res) => getBeers(req, res));

router.get("/:id", (req, res) => getBeerById(req, res));

router.post("/", (req, res) =>  addNewBeer(req, res));

// router.delete("/:id", (req, res) => deleteBeer(req, res));

export default router;