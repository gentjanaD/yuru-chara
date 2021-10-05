const Mascot = require("../models/models.index");
import {Request,Response} from "express"

exports.getAll = async(req:Request, res:Response) => {
    try {
        const mascot = await Mascot.find();
        res.status(200);
        res.send(mascot)
    } catch(error ) {
        console.log(error);
    }
};

exports.getMascot = async(req:Request, res:Response) => {
    try {
      const id = req.params.id;
      const mascot = await Mascot.findById(id);
      res.status(200);
      res.send(mascot);
    } catch (error) {
      console.log('controller getOneMascot error', error);
      res.sendStatus(500);
    }
  }

exports.addMascot = async(req:Request, res:Response) => {
    try {
        const id = req.params.id;
        const mascot = await Mascot.findById(id);
        res.status(200);
        res.send(mascot);
    } catch(error) {
        console.log('controller getOneMascot error', error);
        res.sendStatus(500);
    }
}

exports.toggleFavourite = async(req:Request, res:Response) => {
    try {
      const id = req.params.id;
  
      const faveStatus = req.body.favourite;
      const fave = await Mascot.findByIdAndUpdate(id, { favourite: faveStatus }, { new: true });
      res.status(200);
      res.send(fave);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }

exports.deleteMascot = async(req:Request, res:Response) => {
    try {
        const id = req.params._id;
        await Mascot.findByIdAndRemove(id);
        res.status(200);
        res.end()
    }catch(error) {
        res.sendStatus(500);
        console.log(error)
    }
}